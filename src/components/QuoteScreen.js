import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Quote from './Quote';

export default class QuoteScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Quote quoteText="Amazing quote!" quoteSource="- Great source"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
});
