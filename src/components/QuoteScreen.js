import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Image,
  LayoutAnimation,
} from 'react-native';
import Quote from './Quote';
import NextQuoteButton from './NextQuoteButton';

const bgImage = require('../../assets/bg.png');
const { quotes } = require('../../quotes.json');

const tranquil = {
  duration: 500,
  create: {
    duration: 1000,
    delay: 300,
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    duration: 200,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity,
  },
};

export default class QuoteScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quoteIndex: 2,
    },

    this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this);
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext(tranquil);
  }

  _incrementQuoteIndex() {
    let newIndex;

    if (this.state.quoteIndex + 1 === quotes.length) {
      newIndex = 0;
    } else {
      newIndex = this.state.quoteIndex + 1;
    }

    this.setState({
      quoteIndex: newIndex,
    });
  }

  render() {
    const quote = quotes[this.state.quoteIndex];

    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Quote key={this.state.quoteIndex}
            quoteText={quote.text}
            quoteSource={quote.source} />
          <NextQuoteButton onPress={this._incrementQuoteIndex} />
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
