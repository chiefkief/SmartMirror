const express = require('express');
const app = express();

const weather = require('./services/weather.js');
const news = require('./services/news.js');
const calendar = require('./services/calendar.js');

//var gotJson = await weather.getWeather();

//serve HTML/CSS pages
app.use(express.static('public'));

//weather route
app.get('/api/weather', async (req, res) => {
  const weatherJson = await weather.getWeather();
  res.json(weatherJson);
});

//news route
app.get('/api/news', async (req, res) => {
  const newsJson = await news.getNews();
  //console.log(newsJson);
  res.json(newsJson);
});

//calendar route
app.get('/api/calendar', async (req, res) => {
  const calJson = await calendar.getDate();
  res.json(calJson);
})

//start server
app.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});
