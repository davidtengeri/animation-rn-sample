import React from 'react';
import { Animated, Easing, Text, View } from 'react-native';

class StaggerScreen extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
    positionAnim: new Animated.ValueXY({
      x: new Animated.Value(0),
      y: new Animated.Value(0),
    }),
  }

  componentDidMount() {
    const { fadeAnim, positionAnim } = this.state;
    Animated.stagger(1000, [
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 4000,
      }),
      Animated.timing(positionAnim, {
        toValue: { x: 200, y: 100 },
        easing: Easing.back(),
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

export default StaggerScreen;
