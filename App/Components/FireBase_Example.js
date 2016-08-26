// Pub Sub = Firebase strneghts.
// Firebase for real time changes, and something else for when you needs more control over
// data manipulation, and subtle changes.

// Firebase reference points to a specific node inside your firebase database.
// on
// value
// child_added
// child_removed
// child_changed
//
// Firebase doesn't play well with arrays, but it can convert objects to arrays
// weakness = have to update all the id's if you want to continue to use arrays.
// HIGHLY Suggest just using objects, and then brining in Lodash to perform higher order functions.
// can convert objects easily into arrays.
// highly effective object maniuplation operations.

// npm i --save firebase
// npm i --save lodash
// npm i --save trim = trim leading and trailing whitespace from messages.

import React from 'react';
import Firebase from 'firebase';
import { Card List } from 'material-ui';
import { Text } from 'react-native';

import Message from './Message.jsx';

class MessageList extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      message : [
        'Hello there, how are you?',
        'This is so much fun!',
      ]
    };
  }


  render() {
    return(
      let messageNodes = this.state.messages.map( (message) => {
        return (
          <Text style={styles.chatMessage} />
        )
      })
    )
  }


}
