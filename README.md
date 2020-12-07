![](https://live.staticflickr.com/65535/50690482338_cb418bd28f_o.png)

# Coronavirus Case Tracker
This is a simple project I did to honing my VueJS skills. There is nothing out of ordinary in here. I tried to create a clean UI for those who want to see the information without any distraction.

You can view the LIVE demo from the following link
<center>https://serhangursoy.github.io/coronatracker/</center>

### About Technical Side
- I used Vue2 for this project. I'm aware that Vue3 is stepping up in the game lately, but I wanted to remember basics of Vue2.
- This as pure as it gets. No bloated themes, no random components. I designed all components and `table` from scratch. Although I can admit that not all of them were "best practices" but still does the job.
- Currently, it supports two different languages, English and Turkish. Although it's quite simple to add new language, it comes with a built-in translate mixin.
-
![CoronaCaseTracker](https://live.staticflickr.com/65535/50690428268_68be4dcc4f_o.png)


## How to run?
Get all the dependencies
```
npm install
```

Once you are ready, compile for development.
```
npm run serve
```
Go to http://localhost:8080/ and view the work

Once you are super ready, compile and minify for production
```
npm run build
```

For lints and fixes run
```
npm run lint
```

## Data
I'm gathering data directly from Postman's API. This can be viewed [from here](https://documenter.getpostman.com/view/10808728/SzS8rjbc)


### What next?
Since this was just a small project, I don't have anything else on my mind. I can expand this by adding vue-router logic and add more informative pages in the future, but I will consider that for later.
