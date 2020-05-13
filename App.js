import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const styles = StyleSheet.create({
  startScreen: {
    flex: 1,
    flexDirection: 'row',
  },
  gameScreen: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  startScreenTitle: {
    alignItems: 'center',
    backgroundColor: '#3c3b6e',
    justifyContent: 'center',
    width: '50%',
  },
  startScreenTitleText: {
    color: '#ffffff',
    fontSize: 80,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  startScreenCallToAction: {
    alignItems: 'center',
    backgroundColor: '#b22234',
    justifyContent: 'center',
    width: '50%',
  },
  startScreenCallToActionText: {
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 4,
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '900',
    padding: 20,
    textTransform: 'uppercase',
  },
});

function StartScreen({navigation}) {
  return (
    <View style={styles.startScreen}>
      <View style={[styles.startScreenTitle]}>
        <Text style={[styles.startScreenTitleText]}>Biden's Run</Text>
      </View>
      <View style={[styles.center, styles.startScreenCallToAction]}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#b22234"
          onPress={() => navigation.navigate('Game')}>
          <Text style={[styles.startScreenCallToActionText]}>
            Press to play
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

function GameScreen() {
  return (
    <View style={styles.gameScreen}>
      <Text>Game screen</Text>
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
