#  RaptoChat
[![Airbnb](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

## React-Native Geolocation Chat App.
#### *RaptoChat connects you to the drivers in your immediate vicinity for a fun, hands free, Text to Speech chat experience.*

### MVP:
+ Register users with OAuth - Facebook.
+ Filter *Active Users* display by desired distance.
  * User can select filter distance.
  * User can select Avatar voice.
  * User can select 8bit Avatar user icon.  
+ Setup chat rooms based on Category.
  * User can choose up to 2 saved categories.  (4 total)
    - Sports
    - Science & Tech
    - Gossip
    - Road-Rage
+ TRANSMIT - Voice to text.
  * User says *'New Message'*.  
    - Relays message.
  * Users says *'Finished.'*
    - RaptoChat says *'I will say...[message]... should I send?'*
    - User says *'Yes'* or *'No'*
      * If *'Yes'* - Send message.
      * If *'No'* - RaptoChat says *'try again?'*
        - User says *'Yes'* - *'Ok, I'm listening.'*
        - User says *'No'* - *'Alright. Ill be here if you change your mind.'*
+ RECEIVE - Text to voice.
  * Each new chat in the public channel conveys respective voice, in order of transmission.
+ 40 Dummy users each with array of 10 general messages that fire at random intervals.

### Extra Features 1:
+ Private chat.

### Extra Features 2:
+ Voice commands for...
  1. Registration process.
  2. Changing room category.

### Monetization Possibilities:
+ Signup to become voice Narrator

  * Because TTS is computationally interpreted, subtle social cues will not be
  interpreted reliably or accurately, at all times.  To provide a more accurate
  representation of users desired intent, intonation, meaning, or idiomatic
  expression, users can re-interpret the conversation.  The actual users can
  rate the interpretation and based on the rating, the interpreter can receive a
  compensation reflecting rating.

  * Users who are in the middle of an avatar interpreted chat, can request for
  live interpretation, and narrators who are on stand-by will be assigned to
  their conversation.  Think, Uber for conversation.

#### Technologies
![React](https://cdn.auth0.com/blog/react-js/react.png =250x)
