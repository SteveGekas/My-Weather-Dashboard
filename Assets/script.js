var searchCity;
var key = "&appid=50072d89ed0daa2ea39f9aaf102ace85";
var units = "&units=imperial";
var todayWeather = "https://api.openweathermap.org/data/2.5/weather?";
var uvIndex = "https://api.openweathermap.org/data/2.5/uvi?lat=";
var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=";
var location = navigator.geolocation;
var weatherIcon = "http://openweathermap.org/img/wn/";
var searchcityArr = [];

$(document).ready(function () {
    //gets the date for now (whenever you open the app)
    var todayDate = moment().format("mm Do YYYY");
    console.log(todayDate);
    $(".current-city").append(todayDate);





})