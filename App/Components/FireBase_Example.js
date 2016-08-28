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
import trim from 'trim';

import Message from './Message.jsx';
let firebaseRef = new Firebase('http://raptochat.firebaseio.com');

class MessageList extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      messages : {} // Firebase will convert Objects with unique key's into an array by default.
    };
    this.onChange = this.onChange.bind(this);

    // firebaseRef.once('value', (fbSnapshot) => {
    //   let messages = fbSnapshot.value();
    //   this.setState({ messages });
    // });

    // firebaseRef.on('value', (snapshot) => {  // once || on = Firebase keyword
    // // "on" listens for changes to the firebase DB value(s).
    //   let messagesVal = snapshot.val();
    //   let messages = _(messagesVal).keys().map(messageKey => {
    //     let clone = _.clone(messagesVal[messageKey]);
    //     clone.key = messageKey;
    //     return clone;
    //   });
    //   this.setState({ messages });
    // });

    firebaseRef.on('child_added', (msg) => {
      if (this.state.messages[msg.key()]){
        return;
      }

      let msgVal = msg.val();
      msgVal.key = msg.key();
      this.state.messages[msgVal.key] = msgVal;
      this.setState({  })
    })

    firebaseRef.on('child_removed', (msg) => {
      let key = msg.key();
      delete this.state.messages[key];
      this.setState({ messages: this.state.messages });
    })
  }

  onChange(event) {
    this.setState({ input: event.target.value });
  }

  onKeyUp(event){
    event.preventDefault();
    if (event.keyCode === 13 && trim(event.target.value) !== ''){
      firebaseRef.push({ message: this.state.message });
      this.setState({ message: '' });
    }
  }

  render() {
    // let messageNodes = this.state.messages.map((message) => {
    let messageNodes = _.values(this.state.messages).map((message) => {
      return (
        <Message message={message} />
        <TextInput onChange={this.onChange} />
      );
    });

    return(
      <Card />
    )
  }


}
