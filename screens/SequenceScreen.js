import React from 'react';
import { Animated, Easing, Text, View } from 'react-native';

class SequenceScreen extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
    topAnim: new Animated.Value(0),
  }

  componentDidMount() {
    const { fadeAnim, topAnim } = this.state;
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
      }),
      Animated.timing(topAnim, {
        toValue: 200,
        duration: 3000,
      })
    ]).start();
  }

  render() {
    const { fadeAnim, topAnim } = this.state;
    return (
      <Animated.View style={{
        backgroundColor: 'powderblue',
        margin: 50,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: topAnim,
        opacity: fadeAnim,
      }}>
        <Text>Fade In</Text>
      </Animated.View>
    );
  }
}

export default SequenceScreen;
