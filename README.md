# SmartMirror
This is a personal smart mirror project. the idea is to have a dashboard behind a 2-way mirror, on this dashboard, you can see things like weather, holidays, news, and more.

## Dev Log May 04, 2026
initial push. This was an idea that I had a while ago, I might have seen it in a make magizine article or somewhere similar. I thought it sounded like a very fun idea, and decided to work a little bit on it over the weekend. For me, this was in introduction to Node.js, I have also only worked with API calls once in the past, so this was a learning experience for using API's. 
Currently, this project has the software for a basic setup, I think the next steps are buying the hardware(raspberry pi, 2-way mirror), and putting the first setup together. I already have a monitor to use, debating removing the plastic edge so the screen can be flush with the glass of the mirror, but will play around with ideas once hardware all arrives.
Once built, I would like to keep improving on the project, possibly adding a method for easy updates(it will have to connect to Wi-Fi to collect information from the internet, could probably set up network file transfer pretty easily)

# ToDo
- [ ] new messages(email)
- [ ] daily ToDo list(would have to actually use the calendar for this to fill up enough to be usable)
- [ ] low-power background to replace monitor(7-segment display for numbers)

## Useful Links
[Public APIs](https://publicapis.io/) - provides a list of(mostly free) APIs. most APIs provide a brief tutorial for use or a link to the main site.
[Calendarific](https://calendarific.com/api-documentation) - the currently used calendar. will replace with google calendars to get personal events as well as holidays, but for a quick start, holidays were okay.
[NewsAPI](https://newsapi.org/) - API used to collect news stories. NewsAPI has a npm package, which makes usage very easy.

