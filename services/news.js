//the password for newsapi.org account(move this to a private note page for the love of god) NowW3r3MakingN3ws
//the super secret API key is b8675d5a374148fab3ed6002bfea0f70
//
async function getNews(){
  //this could be written as const secrets = require(file), but then would have to 
//be called using secrets.NEWS_API_PASS, this is more cleaned up, calls the key while declaring
  const { NEWS_API_PASS } = require('../secrets.js');
  const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI(NEWS_API_PASS);
  const headlines = { 'error': 'no headlines shown' };
  // To query /v2/top-headlines
  // All options passed to topHeadlines are optional, but you need to include at least one of them
  return newsapi.v2.topHeadlines({
    //sources: 'bbc-news,the-verge',
    //q: 'bitcoin',
    category: 'technology',
    language: 'en',
    country: 'us'
  }).then( response => {
    //return response;
    let headlines = response.articles.slice(0, 10);
    return headlines;
    //console.log(headlines);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  });

  // To query /v2/everything
  // You must include at least one q, source, or domain
  //newsapi.v2.everything({
  //  q: 'bitcoin',
  //  sources: 'bbc-news,the-verge',
  //  domains: 'bbc.co.uk, techcrunch.com',
  //  from: '2017-12-01',
  //  to: '2017-12-12',
  //  language: 'en',
  // sortBy: 'relevancy',
  //  page: 2
  //}).then(response => {
  //  console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  //});
  // To query sources
  // All options are optional
  //newsapi.v2.sources({
  //  category: 'technology',
  //  language: 'en',
  //  country: 'us'
  //}).then(response => {
  //  console.log(response);
    /*
      {
        status: "ok",
        sources: [...]
      }
    */
  //});
}
module.exports = { getNews };
