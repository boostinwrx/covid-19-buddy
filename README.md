**### Note: App is in *early* stages of development. *Contributors welcome!*
*(See FAQ for details such as name)*

# iCanCope
#### iCanCope is a mental health focused app made for anyone who wants to track their moods, urges, and various other metrics.(*)

 I created this after being in therapy for many years, and learning DBT in depth. I now use DBt skills every day, and it's important that I track my moods and urges.
 One aspect of DBT therapy is keeping a diary card to track your mental health, what coping skills you used, and what contributed to that mood.
 
 This is meant to be a fancy verison of a diary card of sorts, that can even suggest coping skills based on your entry (not meant to replace a doctors advice).(*)
 Keeping a diary card, in conbination with therapy, has vastly improved my life. I hope I can help do the same for others, by providing a smarter diary card.
 The final product will have all that, and will importantly direct anyone in a crisis situation to appropiate resources and hotlines. 
 
 This app also features specific tools and metrics for gender dysphoria and eating disorder behaviors.
 #### (*) Disclaimer: _This app is not a replacement for therapy, nor is it meant to replace proper treatment, it is meant as a tool to add to your mental health toolbox, I am not a medical professional, any advice given by this app is not *directly* from a medical professional **unless specifically stated**.)_\
 
 ---
 
 ### FAQ: 
 **Q:** Why is this repo called covid19-buddy, isn't this a mental health app? 
 
 **A:** This is a **rework** of another unfinished app I was working on, covid19-buddy. 
 
 I decided to pivo to be a mental health app, some things (such as repo name and folder names) will be covid19-buddy related until it's ready for production. I decided to adapt the app after seeing tools like my covid concept already in use, and the fact that during this pandemic, the country is facing a mental health crisis with suicide rates skyrocketing. 
 
 I wanted to do something to help people, by using DBT concepts, and by directing those who are in crisis to appropiate resources.
 
 -----
 ### Technologies Used
 
 ### Client-Side (Front-End):
  #### React 
* With Redux for global state management
* Redux-Thunk middleware
* Interface styling with [MDBreact](https://www.npmjs.com/package/mdbreact)
 
 ##### Package.json Dependencies:
* @testing-library/jest-dom":^4.2.4"
* @testing-library/react":^9.3.2"
* @testing-library/user-event":^7.1.2"
* mdbreact":^4.25.5"
* react":^16.13.1"
* react-bootstrap":^1.0.0"
* react-dom":^16.13.1"
* react-scripts":3.4.1"
* redux":^4.0.5"
* redux-devtools-extension":^2.13.8"
* redux-thunk":^2.3.0"
* prop-types":latest"
 
 
 ### Server-Side (Backend):
  #### Ruby on Rails (v. *6.0.2.2*)
  
  #### Database:
  * PostgreSQL
  
  ##### Important Gems: 
  * JWT for user authentication tokens
  * Bcrypt for encrypted user credentials
  * Rack-cors for Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
 
 ----
 
 ### Would you like to contribute/build upon what I've made so far?
 Please, feel free to build upon and improve what I've done so far, to meet the ultimate goals stated above. 
 
 ##### Email me at: **tifftiff.email@gmail.com** with the subject line including *iCanCope*
 



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).**
