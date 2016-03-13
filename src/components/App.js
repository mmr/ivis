/* @flow */
'use strict'
import React, {Component} from 'react-native';
import Video from './Video';

const {
  StyleSheet,
  View,
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  videoPlayer: {
    height: 480,
  },
  videoContainer: {
    marginTop: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
});

class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.mapContainer}>
            <Video />
          </View>
        </View>
      );
  }
}

export default App;
