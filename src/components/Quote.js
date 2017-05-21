import React, { Component, PropTypes } from 'React';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Quote extends Component {
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

Quote.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteSource: PropTypes.string.isRequired,
};
