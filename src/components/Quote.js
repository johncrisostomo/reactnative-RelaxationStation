import React, { Component } from 'React';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Quote extends Component {
  constructor(props) {
    super(props);

  }

  render () {
    const { quoteText, quoteSource } = this.props;
    return (
      <View>
        <Text>{quoteText}</Text>
        <Text>{quoteSource}</Text>
      </View>
    );
  }
}

export default Quote;
