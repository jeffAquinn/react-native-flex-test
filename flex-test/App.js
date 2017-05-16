import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export default class App extends React.Component {
  render() {

    const home = (<Icon name='home' size={20}/>)
    const rocket = (<Icon name='rocket' size={15} color='#fff'/>)
    // const car = (<Icon name='car' size={15}/>)

    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
      }}>
        <View style={{
          width: 100,
          height: 40,
          margin: 10,
          backgroundColor: 'blue',
          borderRadius: 10
        }}>

          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>

            <Animatable.Text animation="flash" easing="ease-out" iterationCount="infinite" style={{
              textAlign: 'center'
            }}>❤️</Animatable.Text>
          </View>
        </View>
        <View style={{
          width: 100,
          height: 40,
          margin: 10,
          backgroundColor: 'teal',
          borderRadius: 10
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Animatable.Text animation="shake" easing="ease-out" iterationCount="infinite" style={{
              textAlign: 'center'
            }}>{rocket}</Animatable.Text>
          </View>
        </View>
        <View style={{
          width: 100,
          height: 40,
          margin: 10,
          backgroundColor: 'red',
          borderRadius: 10
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Animatable.Text animation="swing" easing="ease-out" iterationCount="infinite" style={{
              textAlign: 'center'
            }}></Animatable.Text>
          </View>
        </View>
      </View>
    );
  }
}
