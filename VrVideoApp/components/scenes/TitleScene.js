import React from 'react';
import {
  View,
  asset,
  Pano
} from 'react-vr';
import TitleLayout from './layouts/TitleLayout.js';

class TitleScene extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('title-background.jpg')}/>
        <TitleLayout
          showButton={this.props.showButton}
          text={this.props.text}
          changeScenes={this.props.changeScenes}
          scene={this.props.scene}
        />
      </View>
    )
  }
}

module.exports = TitleScene;
