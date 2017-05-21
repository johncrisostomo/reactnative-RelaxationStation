import React, { Component, PropTypes } from 'React';
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

export default class Quote extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { quoteText, quoteSource } = this.props;
    return (
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>"{quoteText}"</Text>
        <Text style={styles.sourceText}>- {quoteSource}</Text>
      </View>
    );
  }
}

Quote.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteSource: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  quoteContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  quoteText: {
    fontFamily: (Platform.OS === 'ios') ?
      'AvenirNext-Bold' : 'Roboto',
    fontSize: 36,
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginVertical: 30,
  },
  sourceText: {
    fontFamily: (Platform.OS === 'ios') ?
      'AvenirNext-Italic' : 'Roboto',
    fontSize: 20,
    color: '#F8F8F8',
    backgroundColor: 'transparent',
    textAlign: 'right',
    fontStyle: 'italic',
  },
});
