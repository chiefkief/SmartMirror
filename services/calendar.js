//calendar service, get todays date(month day, year)and the holiday(theres always one)
//super secret API key(what happens when this goes public?)
//5JXRkGNIuFhf9rKKKIKoyMhPyBRao0s3
//what is todays date?
var myDay = new Date();
var thisYear = myDay.getFullYear();
var today = myDay.getDate();
//FUN javascript, months are 0 based on return, like lists. so january is 0, not 1
var thisMonth = (myDay.getMonth()) + 1;
const { CAL_API_PASS } = require('../secrets.js');

async function getDate(){

  const calResp = await fetch(`https://calendarific.com/api/v2/holidays?&api_key=${CAL_API_PASS}&country=US&year=${thisYear}&month=${thisMonth}&day=${today}`);

  const calData = await calResp.json();
  
  const holidays = calData.response.holidays;

  return holidays;
}

module.exports = { getDate };
