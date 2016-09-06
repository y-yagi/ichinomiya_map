function attachMessage(marker, msg) {
  google.maps.event.addListener(marker, 'click', function(event) {
    new google.maps.InfoWindow({
      name: msg
    }).open(marker.getMap(), marker);
  });
}

function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(35.681382, 139.76608399999998),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var data = new Array();
  data.push({position: new google.maps.LatLng(35.059598, 135.7517383), name: '賀茂別雷神社', god: '祭神: 賀茂別雷大神'});
  data.push({position: new google.maps.LatLng(34.6127972, 135.4929405), name: '住吉大社', god: '祭神: 住吉大神 (底筒男命、中筒男命、表筒男命、息長足姫命の総称)'});
  data.push({position: new google.maps.LatLng(35.2913717, 136.7934564), name: '大神神社', god: '祭神: 大物主神'});
  data.push({position: new google.maps.LatLng(34.5369849, 135.4592449), name: '大鳥大社', god: '祭神: 日本武尊 大鳥連祖神'});
  data.push({position: new google.maps.LatLng(34.669946, 135.6507191), name: '枚岡神社', god: '祭神: 天児屋根大神 比売大神 武甕槌大神 斎主大神'});
  data.push({position: new google.maps.LatLng(34.7873779, 136.1639382), name: '敢国神社', god: '祭神: 大彦命(敢國津神)'});
  data.push({position: new google.maps.LatLng(34.960715, 136.4574395), name: '椿大神社', god: '祭神: 猿田彦大神'});
  data.push({position: new google.maps.LatLng(34.3804059, 136.8102861), name: '伊雑宮', god: '祭神: 天照坐皇大御神御魂'});
  data.push({position: new google.maps.LatLng(35.3072257, 136.8016578), name: '真清田神社', god: '祭神: 天火明命'});
  data.push({position: new google.maps.LatLng(34.8477503, 137.4208093), name: '砥鹿神社(里宮)', god: '祭神: 大己貴命'});
  data.push({position: new google.maps.LatLng(34.9057535, 137.4214992), name: '砥鹿神社(奥宮)', god: '祭神: 大己貴命'});
  data.push({position: new google.maps.LatLng(34.847355, 137.8994406), name: '小国神社', god: '祭神: 大己貴命'});
  data.push({position: new google.maps.LatLng(35.22517, 138.6106133), name: '富士山本宮浅間大社', god: '祭神: 木花之佐久夜毘売命 (別称：浅間大神)'});
  data.push({position: new google.maps.LatLng(35.1221633, 138.9194235), name: '三嶋大社', god: '祭神: 三嶋大明神 (大山祇命、積羽八重事代主神ほか3柱の総称)'});
  data.push({position: new google.maps.LatLng(35.6477503, 138.6974607), name: '浅間神社', god: '祭神: 木花開耶姫命'});
  data.push({position: new google.maps.LatLng(35.3788943, 139.3832276), name: '寒川神社', god: '祭神: 寒川大明神 (寒川比古命、寒川比女命の総称)'});
  data.push({position: new google.maps.LatLng(35.9148026, 139.6299815), name: '氷川神社', god: '祭神: 須佐之男命 奇稲田姫命 大己貴命'});
  data.push({position: new google.maps.LatLng(34.9230778, 139.8373611), name: '安房神社', god: '祭神: 天太玉命'});
  data.push({position: new google.maps.LatLng(35.3761114, 140.3605186), name: '玉前神社', god: '祭神: 玉依姫命'});
  data.push({position: new google.maps.LatLng(35.886093, 140.5286981), name: '香取神宮', god: '祭神: 経津主大神'});
  data.push({position: new google.maps.LatLng(35.9691249, 140.6310029), name: '鹿島神宮', god: '祭神: 武甕槌大神'});
  data.push({position: new google.maps.LatLng(34.973499, 135.9135046), name: '建部大社', god: '祭神: 日本武尊大己貴命'});
  data.push({position: new google.maps.LatLng(35.3634126, 136.5267771), name: '南宮大社', god: '祭神: 金山彦命'});
  data.push({position: new google.maps.LatLng(36.0835295, 137.2397475), name: '飛騨一宮水無神社', god: '祭神: 水無大神 (御歳大神ほか14柱の総称)'});
  data.push({position: new google.maps.LatLng(36.0238132, 138.1180956), name: '諏訪大社(上社 本宮)', god: '祭神: 建御名方神'});
  data.push({position: new google.maps.LatLng(35.9926868, 138.134151), name: '諏訪大社(上社 前宮)', god: '祭神: 八坂刀売神'});
  data.push({position: new google.maps.LatLng(36.0695895, 138.0800041), name: '諏訪大社(下社 秋宮)', god: '祭神: 八坂刀売神'});
  data.push({position: new google.maps.LatLng(36.077775, 138.0885661), name: '諏訪大社(下社 春宮)', god: '祭神: 八坂刀売神'});
  data.push({position: new google.maps.LatLng(36.2549884, 138.8577465), name: '一之宮貫前神社', god: '祭神: 経津主命姫大神'});
  data.push({position: new google.maps.LatLng(36.5623754, 139.8850151), name: '宇都宮二荒山神社', god: '祭神: 豊城入彦命'});
  data.push({position: new google.maps.LatLng(38.3190559, 141.0136251), name: '鹽竈神社', god: '祭神: 志波彦神社 　志波彦神 鹽竈神社 　塩土老翁神 　武甕槌神 　経津主神'});
  data.push({position: new google.maps.LatLng(39.0146158, 139.9073521), name: '鳥海山大物忌神社', god: '祭神: 鳥海山(神体山)'});
  data.push({position: new google.maps.LatLng(35.4955931, 135.7466439), name: '若狭彦神社(上社)', god: '祭神: 若狭彦大神(彦火火出見尊)'});
  data.push({position: new google.maps.LatLng(35.4789597, 135.7800916), name: '若狭彦神社(下社)', god: '祭神: 若狭姫大神(豊玉姫命)'});
  data.push({position: new google.maps.LatLng(35.6549607, 136.0756215), name: '氣比神宮', god: '祭神: 伊奢沙別命(気比大神)'});
  data.push({position: new google.maps.LatLng(36.4348444, 136.6361642), name: '白山比咩神社', god: '祭神: 白山比咩大神'});
  data.push({position: new google.maps.LatLng(36.9253359, 136.7674627), name: '気多大社', god: '祭神: 大己貴命'});
  data.push({position: new google.maps.LatLng(36.7489304, 137.0211178), name: '射水神社', god: '祭神: 瓊瓊杵尊'});
  data.push({position: new google.maps.LatLng(37.7060657, 138.8266224), name: '彌彦神社', god: '祭神: 天香山命'});
  data.push({position: new google.maps.LatLng(37.8602277, 138.3306237), name: '度津神社', god: '祭神: 五十猛命'});
  data.push({position: new google.maps.LatLng(35.0624296, 135.575673), name: '出雲大神宮', god: '祭神: 大国主命三穂津姫尊'});
  data.push({position: new google.maps.LatLng(35.5828156, 135.1966741), name: '籠神社', god: '祭神: 彦火明命'});
  data.push({position: new google.maps.LatLng(35.4819746, 134.8702865), name: '出石神社', god: '祭神: 天日槍命 出石八前大神'});
  data.push({position: new google.maps.LatLng(35.4790826, 134.2698477), name: '宇倍神社', god: '祭神: 武内宿禰命'});
  data.push({position: new google.maps.LatLng(35.4860465, 133.9005553), name: '倭文神社', god: '祭神: 建葉槌命'});
  data.push({position: new google.maps.LatLng(35.401116, 132.6847339), name: '出雲大社', god: '祭神: 大国主大神'});
  data.push({position: new google.maps.LatLng(35.1549415, 132.5134531), name: '物部神社', god: '祭神: 宇摩志麻遅命'});
  data.push({position: new google.maps.LatLng(36.2802442, 133.249028), name: '水若酢神社', god: '祭神: 水若酢命'});
  data.push({position: new google.maps.LatLng(35.0875599, 134.5864722), name: '伊和神社', god: '祭神: 大己貴神'});
  data.push({position: new google.maps.LatLng(35.1002921, 133.9944982), name: '中山神社', god: '祭神: 鏡作神'});
  data.push({position: new google.maps.LatLng(34.6768385, 133.8642188), name: '吉備津彦神社', god: '祭神: 大吉備津彦命'});
  data.push({position: new google.maps.LatLng(34.5688421, 133.2709264), name: '吉備津神社', god: '祭神: 大吉備津彦命'});
  data.push({position: new google.maps.LatLng(34.670714, 133.850654), name: '吉備津神社', god: '祭神: 大吉備津彦命'});
  data.push({position: new google.maps.LatLng(34.2972803, 132.3202573), name: '厳島神社', god: '祭神: 宗像三女神 (市杵島姫命、田心姫命、湍津姫命の総称)'});
  data.push({position: new google.maps.LatLng(34.0577227, 131.5336451), name: '玉祖神社', god: '祭神: 玉祖命 他一座未詳'});
  data.push({position: new google.maps.LatLng(33.5859192, 130.4137368), name: '住吉神社', god: '祭神: 住吉三神(底筒男命・中筒男命・表筒男命)'});
  data.push({position: new google.maps.LatLng(34.2278736, 135.2024917), name: '日前神宮・國懸神宮', god: '祭神: 日前神宮：日前大神 國懸神宮：國懸大神'});
  data.push({position: new google.maps.LatLng(34.4600042, 134.8524756), name: '伊弉諾神宮', god: '祭神: 伊弉諾尊 伊弉冉尊'});
  data.push({position: new google.maps.LatLng(34.0589363, 134.4801756), name: '八倉比売神社', god: '祭神: 八倉比売命'});
  data.push({position: new google.maps.LatLng(34.2842323, 134.024714), name: '田村神社', god: '祭神: 田村大神 (倭迹迹日百襲姫命、五十狹芹彦命、猿田彦大神、天隠山命、天五田根命の5柱の総称)'});
  data.push({position: new google.maps.LatLng(34.2484125, 133.0049172), name: '大山祇神社', god: '祭神: 大山積神'});
  data.push({position: new google.maps.LatLng(33.5926473, 133.5769853), name: '土佐神社', god: '祭神: 味鋤高彦根神 一言主神'});
  data.push({position: new google.maps.LatLng(33.6145192, 130.4222298), name: '筥崎宮', god: '祭神: 応神天皇 神功皇后 玉依姫命'});
  data.push({position: new google.maps.LatLng(33.301986, 130.565469), name: '高良大社', god: '祭神: 高良玉垂命 八幡大神 住吉大神'});
  data.push({position: new google.maps.LatLng(33.526026, 131.3747127), name: '宇佐神宮', god: '祭神: 八幡大神 比売大神 神功皇后'});
  data.push({position: new google.maps.LatLng(33.1727331, 131.5984016), name: '西寒多神社', god: '祭神: 西寒多大神'});
  data.push({position: new google.maps.LatLng(33.3263982, 130.2682719), name: '與止日女神社', god: '祭神: 與止日女命'});
  data.push({position: new google.maps.LatLng(32.9479899, 131.1158808), name: '阿蘇神社', god: '祭神: 健磐龍命 阿蘇都比咩命 ほか10柱'});
  data.push({position: new google.maps.LatLng(32.2623838, 131.5580679), name: '都農神社', god: '祭神: 大己貴命'});
  data.push({position: new google.maps.LatLng(31.7535889, 130.7387354), name: '鹿児島神宮', god: '祭神: 天津日高彦穂々出見尊 豊玉比売命'});
  data.push({position: new google.maps.LatLng(31.8275544, 130.2930673), name: '新田神社', god: '祭神: 邇邇芸尊 天照大神 天押穂耳尊'});
  data.push({position: new google.maps.LatLng(30.427173, 130.5717782), name: '益救神社', god: '祭神: 天津日高彦火々出見命'});
  data.push({position: new google.maps.LatLng(33.7640765, 129.7024666), name: '天手長男神社', god: '祭神: 天忍穂耳尊 天手力男命 天鈿女命'});
  data.push({position: new google.maps.LatLng(34.464089, 129.2832865), name: '海神神社', god: '祭神: 豊玉姫命'});
  data.push({position: new google.maps.LatLng(35.0382367, 135.7724036), name: '賀茂御祖神社', god: '祭神: 玉依姫命 賀茂建角身命'});
  data.push({position: new google.maps.LatLng(34.6806808, 135.4985213), name: '坐摩神社', god: '祭神: 坐摩神 (生井神、福井神、綱長井神、波比岐神、阿須波神の総称)'});
  data.push({position: new google.maps.LatLng(34.9012783, 136.6012245), name: '都波岐神社', god: '祭神: 都波岐神社：猿田彦大神 奈加等神社：天椹野命、中筒之男命'});
  data.push({position: new google.maps.LatLng(34.4634427, 136.8621335), name: '伊射波神社', god: '祭神: 稚日女尊 伊佐波登美命 玉柱屋姫命 狭依姫命'});
  data.push({position: new google.maps.LatLng(34.79839, 138.0754278), name: '事任八幡宮', god: '祭神: 己等乃麻知媛命'});
  data.push({position: new google.maps.LatLng(35.8869211, 139.6937576), name: '氷川女体神社', god: '祭神: 奇稲田姫命'});
  data.push({position: new google.maps.LatLng(35.6529882, 139.4422677), name: '小野神社', god: '祭神: 天下春命 瀬織津比咩命 伊弉諾尊 素盞嗚尊 大己貴大神 瓊々杵尊彦 火火出見尊 倉稲魂命'});
  data.push({position: new google.maps.LatLng(34.9699767, 139.7567265), name: '洲崎神社', god: '祭神: 天比理乃咩命'});
  data.push({position: new google.maps.LatLng(36.7585541, 139.5967885), name: '日光二荒山神社(本社)', god: '祭神: 二荒山大神 (大己貴命、田心姫命、味耜高彦根命の総称)'});
  data.push({position: new google.maps.LatLng(37.0320717, 140.3759179), name: '馬場都都古別神社', god: '祭神: 味耜高彦根命'});
  data.push({position: new google.maps.LatLng(36.9945683, 140.3920822), name: '八槻都都古別神社', god: '祭神: 味耜高彦根命'});
  data.push({position: new google.maps.LatLng(37.1437992, 140.4531065), name: '石都々古和気神社', god: '祭神: 味秬高彦根命 大国主命 誉田別命'});
  data.push({position: new google.maps.LatLng(36.7988639, 137.0457494), name: '気多神社', god: '祭神: 大己貴命奴奈加波比売命'});
  data.push({position: new google.maps.LatLng(36.5718849, 136.9482561), name: '高瀬神社', god: '祭神: 大己貴命'});
  data.push({position: new google.maps.LatLng(36.6635222, 137.3136968), name: '雄山神社', god: '祭神: 伊邪那岐神 天手力雄神'});
  data.push({position: new google.maps.LatLng(36.573363, 137.61778), name: '雄山神社(峰本社)', god: '祭神: 伊邪那岐神 天手力雄神'});
  data.push({position: new google.maps.LatLng(37.1664617, 138.2231805), name: '居多神社', god: '祭神: 大己貴命'});
  data.push({position: new google.maps.LatLng(37.0399114, 137.8643798), name: '天津神社', god: '祭神: 天津彦々火瓊々杵尊 天児屋根命 天太玉命'});
  data.push({position: new google.maps.LatLng(35.3061737, 134.9021161), name: '粟鹿神社', god: '祭神: 彦火々出見命 日子坐王 阿米美佐利命'});
  data.push({position: new google.maps.LatLng(35.3733743, 133.0703376), name: '熊野大社', god: '祭神: 熊野大神 櫛御気野命'});
  data.push({position: new google.maps.LatLng(36.0919489, 132.9878563), name: '由良比女神社', god: '祭神: 由良比女命'});
  data.push({position: new google.maps.LatLng(34.8510683, 133.9717993), name: '石上布都魂神社', god: '祭神: 素盞嗚尊'});
  data.push({position: new google.maps.LatLng(34.6104642, 134.0960406), name: '安仁神社', god: '祭神: 五瀬命'});
  data.push({position: new google.maps.LatLng(34.5526827, 133.2793456), name: '素盞嗚神社', god: '祭神: 素盞嗚尊'});
  data.push({position: new google.maps.LatLng(34.2627276, 135.5220127), name: '丹生都比売神社', god: '祭神: 丹生都比売大神 高野御子大神大食津比売大神市杵島比売大神'});
  data.push({position: new google.maps.LatLng(34.2020328, 135.2499973), name: '伊太祁曽神社', god: '祭神: 五十猛命'});
  data.push({position: new google.maps.LatLng(33.9710406, 134.3671697), name: '上一宮大粟神社', god: '祭神: 大宜都比売命'});
  data.push({position: new google.maps.LatLng(34.0378138, 134.4626744), name: '一宮神社', god: '祭神: 大宜都比売命 天石門別八倉比売命'});
  data.push({position: new google.maps.LatLng(34.1709697, 134.5025694), name: '大麻比古神社', god: '祭神: 大麻比古神'});
  data.push({position: new google.maps.LatLng(33.238345, 131.5510111), name: '柞原八幡宮', god: '祭神: 仲哀天皇 応神天皇 神功皇后'});
  data.push({position: new google.maps.LatLng(33.3305182, 130.4773743), name: '千栗八幡宮', god: '祭神: 応神天皇 仲哀天皇 神功皇后'});
  data.push({position: new google.maps.LatLng(31.2079703, 130.539959), name: '枚聞神社', god: '祭神: 大日孁貴命'});
  data.push({position: new google.maps.LatLng(33.7697712, 129.731742), name: '興神社', god: '祭神: 足仲彦命 息長足姫命'});
  data.push({position: new google.maps.LatLng(34.2067564, 129.2902791), name: '厳原八幡宮', god: '祭神: 応神天皇 神功皇后 仲哀天皇 姫大神 武内宿禰'});


  var overlay = new google.maps.OverlayView();
  overlay.onAdd = function() {
    var layer = d3.select(this.getPanes().overlayLayer).append("div")
        .attr("class", "shrines");

    var line1 = [ {"x": 1, "y": 5}, {"x": 18, "y": 5}];
    var line2 = [ {"x": 5, "y": 9}, {"x": 15, "y": 9}];
    var line3 = [ {"x": 5, "y": 5}, {"x": 5, "y": 14}];
    var line4 = [ {"x": 15, "y": 5}, {"x": 15, "y": 14}];

    overlay.draw = function() {
      var lineFunction = d3.svg.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
        .interpolate("linear");
      var projection = this.getProjection(), padding = 10;
      var marker = layer.selectAll("svg")
        .data(d3.entries(data))
        .each(transform)
        .enter().append("svg:svg")
        .each(transform)
        .attr("class", "marker");

      marker.append("svg:path").attr("d", lineFunction(line1)).attr("stroke", "red").attr("stroke-width", 2);
      marker.append("svg:path").attr("d", lineFunction(line2)).attr("stroke", "red").attr("stroke-width", 2);
      marker.append("svg:path").attr("d", lineFunction(line3)).attr("stroke", "red").attr("stroke-width", 2);
      marker.append("svg:path").attr("d", lineFunction(line4)).attr("stroke", "red").attr("stroke-width", 2);

      marker.append("svg:text")
        .attr("x", padding + 9)
        .attr("y", padding)
        .attr("dy", ".31em")
        .text(function(d) { return d.value.name; });

      function transform(d) {
        d = projection.fromLatLngToDivPixel(d.value.position);
        return d3.select(this)
            .style("left", (d.x - padding) + "px")
            .style("top", (d.y - padding) + "px");
      }

    };
  };
  overlay.setMap(map);
};
google.maps.event.addDomListener(window, 'load', initialize);
