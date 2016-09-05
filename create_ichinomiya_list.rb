require 'open-uri'
require 'nokogiri'
require 'geocoder'
require 'csv'
require 'pry'

Geocoder.configure(language: :ja, units: :km, timeout: 10)

ICHINOMIYA_ALL_URL = "http://ja.wikipedia.org/wiki/%E4%B8%80%E5%AE%AE"
WIKI_JP_URL = "http://ja.wikipedia.org"

f = CSV.open('ichinomiya_list.csv', 'w')

jinjya_url_list = {}
doc = Nokogiri::HTML(open(ICHINOMIYA_ALL_URL))
targets = ['//*[@id="mw-content-text"]/table[3]/tr/td[2]', '//*[@id="mw-content-text"]/table[3]/tr/td[1]']

targets.each do |target|
  table = doc.xpath(target)

  table.each do |row|
    begin
      href = row.children.first.attributes['href'].value
      name = row.children.first.text
      next unless name =~ /(社|宮)\z/
      jinjya_url_list[name] = WIKI_JP_URL + href
    rescue
#      p $!
      next
    end
  end
end

jinjya_url_list.each do |name, url|
  p name # debug info

  doc = Nokogiri::HTML(open(url))
  god = doc.xpath('//*[@id="mw-content-text"]/table[1]/tr[5]/td').text
  god.gsub!("\n", " ")

  address = doc.xpath('//*[@id="mw-content-text"]/table[1]/tr[3]/td').text
  address.gsub!("\n", " ")
  geo = Geocoder.search(address)

  unless geo.first
    print "Error Address: #{address}\n"
    lng = 0
    lat = 0
  else
    lng = geo.first.data["geometry"]["location"]["lng"]
    lat = geo.first.data["geometry"]["location"]["lat"]
  end
  f << [name, god, address, lng, lat]
  sleep 0.5
end
f.close
