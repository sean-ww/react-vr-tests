import React from 'react';
import {
  View,
  asset,
  Pano
} from 'react-vr';
import DashboardLayout from './layouts/DashboardLayout.js';

class Dashboard extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('dashboard-background.jpg')}/>
        <DashboardLayout
          environments={this.props.environments}
          captureSelection={this.props.captureSelection}
          previews={this.props.previews}
          showButton={this.props.showButton}
          text={this.props.text}
          changeScenes={this.props.changeScenes}
          scene={this.props.scene}
        />
      </View>
    )
  }
}
module.exports = Dashboard;
