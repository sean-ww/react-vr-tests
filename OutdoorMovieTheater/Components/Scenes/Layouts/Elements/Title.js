import React from 'react';
import {
  View,
  Animated,
} from 'react-vr';
import { Easing } from 'react-native';

class Title extends React.Component {
  constructor() {
    super();
    this.state = { fadeSlide: new Animated.Value(0) };
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeSlide,
      {
        toValue: 1,
        duration: 1000,
        delay: 1000,
        easing: Easing.ease
      }
    ).start();
  }

  render() {
    return (
      <View style={{ margin: 0.1, height: 0.5}}>
        <Animated.Text
          style={{
            fontSize: 0.5,
            opacity: this.state.fadeSlide,
            fontWeight: '400',
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              {translateY: this.state.fadeSlide.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1.5, 0]
                })
              }
            ]
          }}>
          {this.props.text}
        </Animated.Text>
      </View>
    )
  }
}

module.exports = Title;
