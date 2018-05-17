// const formatTime = date => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// const formatNumber = n => {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

// module.exports = {
//   formatTime: formatTime
// }

//获取当前位置坐标--------------------3
function getLocation(callback) {
  wx.getLocation({
    success: function(res) {
      console.log("获取当前位置成功",res.latitude,res.longitude);
      callback(true,res.latitude,res.longitude)
    },
    fail:function(){
      callback(false)
    }
  })
}

//Reverse Geocoding 根据经纬度获取城市名称--------------------5-2
function getCityName(latitude, longitude, callback) {
  var apiURL = "http://api.map.baidu.com/geocoder?output=json&location=" + latitude + "," + longitude + "&key=2x0rOC7KcRqbnXqomm5kBf7YGUh7awVw";

  wx.request({
    url: apiURL,
    success:function(res){
      callback(res.data["result"]["addressComponent"]["city"]);
    }
  })
}

//获取指定位置的天气信息--------------------4
function getWeatherByLocation(latitude, longitude, callback) {
  var apiKey = "0962d559328fa22eb7d8082a8c3fb627";
  var apiURL = "https://api.darksky.net/forecast/" + apiKey + "/" + latitude + "," + longitude + "?lang=zh&units=ca";
  wx.request({
    url: apiURL,
    success: function (res) {
      console.log("获取指定位置的天气信息成功", res);
      var weatherData = parseWeatherData(res.data);
      getCityName(latitude, longitude, function (city) {
        weatherData.city = city;
        callback(weatherData);
      });
    }
  });
}

//解析天气数据--------------------5-1
function parseWeatherData(data) {
  var weather = {};
  weather["current"] = data.currently;
  weather["daily"] = data.daily;
  return weather;
}

//将时间戳格式化为日期
function formatDate(timestamp) {
  var date = new Date(timestamp * 1000);
  return date.getMonth() + 1 + "月" + date.getDate() + "日 " + formatWeekday(timestamp);
}

//将时间戳格式化为时间
function formatTime(timestamp) {
  var date = new Date(timestamp * 1000);
  return date.getHours() + ":" + date.getMinutes();
}

//中文形式的每周日期
function formatWeekday(timestamp) {
  var date = new Date(timestamp * 1000);
  var weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  var index = date.getDay();
  return weekday[index];
}


// 加载天气数据--------------------2
function requestWeatherData(cb){
  getLocation(function(success,latitude,longitude){
    //如果 GPS 信息获取不成功， 设置一个默认坐标
    if (success == false) {
      latitude = 39.90403;
      longitude = 116.407526;
    }
    //请求天气数据 API
    getWeatherByLocation(latitude, longitude, function (weatherData) {
      cb(weatherData);
    });      
  });
}

// 获取当前位置的天气--------------------1
function loadWeatherData(callback) {
  requestWeatherData(function (data) {
    //对原始数据做一些修整， 然后输出给前端
    var weatherData = {};
    weatherData = data;  
    console.log('天气信息',weatherData);
    weatherData.current.formattedDate = formatDate(data.current.time);
    weatherData.current.formattedTime = formatTime(data.current.time);
    weatherData.current.temperature = parseInt(weatherData.current.temperature);

    var wantedDaily = [];
    for (var i = 1; i < weatherData.daily.data.length; i++) {
      var wantedDailyItem = weatherData.daily.data[i];
      var time = weatherData.daily.data[i].time;
      wantedDailyItem["weekday"] = formatWeekday(time);
      wantedDailyItem["temperatureMin"] = parseInt(weatherData.daily.data[i]["temperatureMin"])
      wantedDailyItem["temperatureMax"] = parseInt(weatherData.daily.data[i]["temperatureMax"])

      wantedDaily.push(wantedDailyItem);
    }      

    weatherData.daily.data = wantedDaily;
    callback(weatherData);
  });
}

module.exports= {
  loadWeatherData: loadWeatherData
}


