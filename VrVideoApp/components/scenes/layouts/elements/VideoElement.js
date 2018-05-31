import React from 'react';
import {
  Video,
  asset,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

class VideoElement extends React.Component {
  constructor() {
    super();
    this.state = { fadeIn: new Animated.Value(0) };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(
        this.state.fadeIn,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.ease
        }
      )
    ]).start();
  }

  render() {
    return (
      <Animated.View style={{ margin: 0.1, height: 4, opacity: this.state.fadeIn}}>
        <Video style={{height: 4}} source={asset('fireplace.mp4')} />
      </Animated.View>
    )
  }
}

module.exports = VideoElement;
