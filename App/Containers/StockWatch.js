import React from 'react';
import { Images } from '../Themes';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';


// export default class StockWatch extends React.Component {
//
//   constructor(props, context){
//     super(props, context);
//
//
//   }
//
//   render(){
//     let stockWatchTitle = 'Stock Watch';
//     return (
//       <View style={styles.container}>
//         <Image style={styles.logo}
//           source={require('image!stockMarket')}></Image>
//         <Text style={styles.heading}>{stockWatchTitle}</Text>
//         <TextInput style={styles.input}
//           placeholder='Ticker or Company Name'></TextInput>
//         <TouchableHighlight style={styles.button}></TouchableHighlight>
//       </View>
//     )
//   }
// }
export default class StockWatch extends React.Component {

  constructor(props, context){
    super(props, context);


  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.heading}>Results</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2277D0',
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logo: {
    width: 80,
    height: 50,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 30,
    marginTop: 10,
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  button: {
    height: 50,
    backgroundColor: '#5ED43B',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#070614',
    alignSelf: 'center',
  }
})
