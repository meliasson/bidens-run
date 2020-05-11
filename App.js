import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function StartScreenTopSection() {
  return (
    <View
      style={[
        styles.center,
        {alignSelf: 'stretch', backgroundColor: '#3c3b6e'},
      ]}>
      <Text
        style={{
          color: '#ffffff',
          fontSize: 80,
          fontWeight: '900',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}>
        Biden's Run
      </Text>
    </View>
  );
}

function StartScreenBottomSection() {
  return (
    <View
      style={[
        styles.center,
        {alignSelf: 'stretch', backgroundColor: '#b22234'},
      ]}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#b22234"
        onPress={() => alert('Pressed!')}>
        <Text
          style={{
            textTransform: 'uppercase',
            fontWeight: '900',
            fontSize: 20,
            borderStyle: 'solid',
            borderColor: '#ffffff',
            borderWidth: 4,
            color: '#ffffff',
            padding: 20,
          }}>
          Press to play
        </Text>
      </TouchableHighlight>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.center}>
        <StartScreenTopSection />
        <StartScreenBottomSection />
      </View>
    </NavigationContainer>
  );
}
