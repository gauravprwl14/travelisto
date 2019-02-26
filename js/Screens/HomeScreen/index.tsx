import * as React from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\n Cmd+D or shake for dev menu`,
  android:
    `Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu`,
})

const HomeScreen = ()  => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit HomeScreen.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  )
}


export default connect()(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
