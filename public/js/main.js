//get today's date
const todaysDate = new Date();
const thisYear = todaysDate.getFullYear();
const thisMonth = todaysDate.getMonth();
const today = todaysDate.getDate();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//put todays date on dashboard
document.getElementById("theDate").innerHTML = `${months[thisMonth]} ${today}, ${thisYear}`;

//find any holidays for today, show title and description
async function sendDate() {
  const resp = await fetch('/api/calendar');
  const holiJson = await resp.json();
  const holiName = holiJson[0].name;
  const holiDesc = holiJson[0].description;

  document.getElementById("holidayPar").innerHTML = `<b>${holiName}</b>`;
  document.getElementById("holidayDes").innerHTML = holiDesc;
}

//find news stories for the day. right now show title
//TODO make it a little prettier, title and heading. really cool would be a way to send it to phone
//but that is really optimistic
async function sendNews() {

  const resp = await fetch('/api/news');
  const newsJSON = await resp.json();
  
  let i = 0;
  while(i < 5) {
    firstHead = newsJSON[i].title;
    //this might need a change later, but the logic is actually there
    //i starts as 0, pulls the 0'th(fist) news story. i then increments and places in news1 paragraph
    //continues until i = 5, filling paragraphs 1-5 with stories 1-4
    i++;
    document.getElementById(`newsPar${i}`).innerHTML = firstHead;

  }
  
};

//find weather stats, currently show current temp
//TODO get a few days, temp, rain chance, sunny/cloudy
//maybe today, tonight, tommorow(3)
async function sendWeather() {
  const resp = await fetch('/api/weather');
  const weatherJSON = await resp.json();

  todayTemp = weatherJSON[0].temperature;
  todayFor = weatherJSON[0].shortForecast;
  windSpeed = weatherJSON[0].windSpeed;
  windDir = weatherJSON[0].windDirection;

  document.getElementById("weatherPar").innerHTML = `${todayTemp}&deg;F`;
  document.getElementById("forecastPar").innerHTML = `${todayFor}`;
  document.getElementById("windsPar").innerHTML = `${windSpeed} ${windDir}`;
}

//call our functions
sendNews();
sendWeather();
sendDate();


