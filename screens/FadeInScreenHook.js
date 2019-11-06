import React, { useState, useEffect } from 'react';
import { Animated, Text } from 'react-native';

const FadeInScreenHook = () => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
  const [status, setStatus] = useState('Not running');

  useEffect(() => {
    if (status !== 'Done') {
      setStatus('Running');
    }
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start((result) => {
      if (result.finished) {
        setStatus('Done');
      }
    });
  }, [status]);

  return (
    <Animated.View style={{
      backgroundColor: 'powderblue',
      margin: 50,
      padding: 50,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: fadeAnim,
    }}>
      <Text>{status}</Text>
    </Animated.View>
  );
}

export default FadeInScreenHook;
