import React from 'react';
import {
  View,
  asset,
  Pano,
} from 'react-vr';
import VideoPlayerLayout from './layouts/VideoPlayerLayout';

class VideoPlayer extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('title-background.jpg')}/>
        <VideoPlayerLayout
          showButton={this.props.showButton}
          text={this.props.text}
          changeScenes={this.props.changeScenes}
          scene={this.props.scene}
        />
      </View>
    )
  }
}

module.exports = VideoPlayer;
