import React from 'react';
import { Button, ScrollView, View } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <ScrollView>
    <View>
      <Button
        title="Fade In"
        onPress={() => navigation.navigate('FadeIn')}
      />
      <Button
        title="Sequence"
        onPress={() => navigation.navigate('Sequence')}
      />
      <Button
        title="Parallel"
        onPress={() => navigation.navigate('Parallel')}
      />
      <Button
        title="Stagger"
        onPress={() => navigation.navigate('Stagger')}
      />
      <Button
        title="Interpolation"
        onPress={() => navigation.navigate('Interpolation')}
      />
      <Button
        title="LayoutAnimation"
        onPress={() => navigation.navigate('LayoutAnimation')}
      />
    </View>
  </ScrollView>
);

export default HomeScreen;