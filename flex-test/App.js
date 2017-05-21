import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export default class App extends React.Component {
  render() {

    // All Three Icons with inlineStyles
    const tree = (<Icon name='tree' size={20}/>)
    const rocket = (<Icon name='rocket' size={50} color='red'/>)
    const ship = (<Icon name='ship' size={15}/>)

    return (
      // Main Container
      <View style={styles.container}>
        {/* Left Tab Dimensions */}
        <View style={styles.leftTab}>
          {/* Left FlexBox */}
          <View style={styles.leftFlexBox}>

        {/* Home Icon Animation   */}
            <Animatable.Text
              animation="swing"
              easing="ease-in"
              iterationCount="infinite"
              style={{textAlign: 'center'}}>
              {/* Icon 1 */}
                {tree}
             </Animatable.Text>

          </View>
        </View>

        {/* Rocket Icon Animation  */}
            <Animatable.Text
              animation="zoomInUp"
              duration={4000}>
              {/* Icon 2 */}
                {rocket}
            </Animatable.Text>

        {/* Right Tab Dimensions */}
        <View style={styles.rightTab}>
          {/* Right FlexBox */}
          <View style={styles.rightFlexBox}>

        {/* Ship Icon Animation */}
            <Animatable.Text
              animation="swing"
              easing="ease-out"
              iterationCount="infinite"
              style={{textAlign: 'center'}}>
              {/* Icon 3 */}
                {ship}
            </Animatable.Text>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  leftTab: {
    width: 120,
    height: 40,
    margin: 20,
    backgroundColor: 'blue',
    borderRadius: 10
  },
  leftFlexBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightTab: {
    width: 120,
    height: 40,
    margin: 20,
    backgroundColor: 'rgb(13,133,193)',
    borderRadius: 10
  },
  rightFlexBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
