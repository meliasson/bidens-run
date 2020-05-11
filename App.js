import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fill: {
    alignSelf: 'stretch',
  },
  startScreenTop: {
    backgroundColor: '#3c3b6e',
  },
  startScreenTopText: {
    color: '#ffffff',
    fontSize: 80,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  startScreenBottom: {
    backgroundColor: '#b22234',
  },
  startScreenBottomText: {
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: 20,
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderWidth: 4,
    color: '#ffffff',
    padding: 20,
  },
});

function GameScreen() {
  return (
    <View style={styles.center}>
      <Text>Game screen</Text>
    </View>
  );
}

function StartScreen({navigation}) {
  return (
    <View style={styles.center}>
      <View style={[styles.center, styles.fill, styles.startScreenTop]}>
        <Text style={[styles.startScreenTopText]}>Biden's Run</Text>
      </View>
      <View style={[styles.center, styles.fill, styles.startScreenBottom]}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#b22234"
          onPress={() => navigation.navigate('Game')}>
          <Text style={[styles.startScreenBottomText]}>Press to play</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
