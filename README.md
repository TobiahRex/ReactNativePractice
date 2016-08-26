#  RaptoChat
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

## React-Native Geolocation Chat App.
#### *RaptoChat connects you to the drivers in your immediate vicinity for a fun, hands free, Text to Speech chat experience.*

### MVP:
+ Register users with OAuth - Facebook.
+ Filter active user display by desired distance.
  * User can select filter distance.
  * User can select Avatar voice.
  * User can select 8bit Avatar user icon.  
+ Setup chat rooms based on Category.
  * User can choose up to 2 saved categories.  
+ TRANSMIT - Voice to text.
  * User says 'New Message'.  
    * Relays message.
  * Users says 'Finished.'
    * RaptoChat says 'I will say...[message]... should I send?'
    * User says 'Yes' or 'No'
    * If 'Yes' - Send message.
    * If 'No' - RaptoChat says 'try again?'
      * User says 'Yes' - 'Ok, I'm listening.'
      * User says 'No' - 'Alright. Ill be here if you change your mind.'
+ RECEIVE - Text to voice.
