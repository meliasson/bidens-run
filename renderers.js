import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';

class Player extends PureComponent {
  render() {
    return (
      <View
        style={[
          styles.player,
          {left: this.props.position[0], bottom: this.props.position[1]},
        ]}
      />
    );
  }
}

class Tree extends PureComponent {
  render() {
    return (
      <View
        style={[
          getTreeStyle(this.props.zIndex),
          {left: this.props.position[0], bottom: this.props.position[1]},
        ]}
      />
    );
  }
}

function getTreeStyle(zIndex) {
  switch (zIndex) {
    case -1:
      return styles.treeInBackground;
    case 0:
      return styles.tree;
    case 1:
      return styles.treeInForeground;
    default:
      throw 'unknown value';
  }
}

const styles = StyleSheet.create({
  player: {
    backgroundColor: '#ffe4c4',
    height: 100,
    position: 'absolute',
    width: 40,
    zIndex: 0,
  },
  treeInForeground: {
    backgroundColor: '#2F4F4F',
    height: 600,
    position: 'absolute',
    width: 120,
    zIndex: 1,
  },
  treeInBackground: {
    backgroundColor: '#006400',
    height: 150,
    position: 'absolute',
    width: 30,
    zIndex: -1,
  },
  tree: {
    backgroundColor: '#228B22',
    height: 300,
    position: 'absolute',
    width: 60,
    zIndex: 0,
  },
});

export {Player, Tree};
