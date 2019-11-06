import React from 'react';
import { Animated, Text } from 'react-native';

class FadeInScreen extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    const { fadeAnim } = this.state;
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start((result) => console.log(result));
  }

  render() {
    const { fadeAnim } = this.state;
    return (
      <Animated.View style={{
        backgroundColor: 'powderblue',
        margin: 50,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: fadeAnim,
      }}>
        <Text>Fade In</Text>
      </Animated.View>
    );
  }
}

export default FadeInScreen;
