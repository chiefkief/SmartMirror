//weather service, get weather data for the next 2 days

async function getWeather(){
  //this is where the magic happens
  //the general idea
  //call weather.gov
  const weatherResp = await fetch('https://api.weather.gov/gridpoints/MPX/107,71/forecast');
  const weatherData = await weatherResp.json();
  //so far, so good, weather data pulled from site and stored in weatherData.
  //next steps, organize weather data
  //json setup, to get weather data, you will need to call data.properties.periods[x].name
  var day1Temp = weatherData.properties.periods.slice(0, 6);
  //console.log('the weather /{weatherJson}');
  //console.log(weatherData);
  //console.log('The temp is ${day1Temp}')
  return day1Temp;
}

module.exports = { getWeather };
