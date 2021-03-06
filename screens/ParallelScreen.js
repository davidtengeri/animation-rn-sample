import React from 'react';
import { Animated, Easing, Text, View } from 'react-native';

class ParallelScreen extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
    positionAnim: new Animated.ValueXY({
      x: new Animated.Value(0),
      y: new Animated.Value(0),
    }),
  }

  componentDidMount() {
    const { fadeAnim, positionAnim } = this.state;
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
      }),
      Animated.timing(positionAnim, {
        toValue: { x: 200, y: 100 },
        easing: Easing.inOut(Easing.linear),
        duration: 3000,
      })
    ]).start();
  }

  render() {
    const { fadeAnim, positionAnim } = this.state;
    return (
      <Animated.View style={{
        backgroundColor: 'powderblue',
        margin: 50,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: positionAnim.x,
        left: positionAnim.y,
        opacity: fadeAnim,
      }}>
        <Text>Fade In</Text>
      </Animated.View>
    );
  }
}

export default ParallelScreen;
