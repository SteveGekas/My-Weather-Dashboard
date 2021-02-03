var searchCity;
var key = "&appid=50072d89ed0daa2ea39f9aaf102ace85";
var units = "&units=imperial";
var todayWeather = "https://api.openweathermap.org/data/2.5/weather?";
var uvIndex = "https://api.openweathermap.org/data/2.5/uvi?lat=";
var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=";
var location = navigator.geolocation;
var weatherIcon = "http://openweathermap.org/img/wn/";
var searchedCityArr = [];

$(document).ready(function () {
   

    function searchForCity
    $(".btn").on("click", function() {
        searchCity = $(".text")

        if (searchCity === "") {
            return;
        }
        $(".text").val("");
        cityWeather(searchCity);
    });

    function cityWeather(searchForCity) {
        var cityWeatherURL = todayWeather + "q=" + searchForCity + units + key;

        $ajax({
        url: cityWeatherURL,
        method: "GET"
        })
       
    }





})