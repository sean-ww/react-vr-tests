import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import axios from 'react-native-axios';
import TitleScene from './components/scenes/TitleScene';
import Dashboard from './components/scenes/Dashboard';
import VideoPlayer from './components/scenes/VideoPlayer';

export default class VrVideoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      scene: 1,
      previews: "",
      IDs: "",
      selectedStreamID: "",
      selectedEnv: "",
      environments: [
        "title-background.jpg",
        "dashboard-background.jpg",
        "states/Arizona.jpg",
        "states/Hawaii.jpg",
        "states/New Hampshire.jpg",
        "states/Texas.jpg",
      ],
    };
  }

  componentWillMount() {
    axios.get('https://api.twitch.tv/kraken/streams/featured?limit=6&client_id=naze3azgkgnw342donz25rr3xgz6sg')
      .then(response => {
        console.log(response);
        this.gatherPreviews(response);
        this.gatherStreamIDs(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  captureSelection = (stage, value) => {
    switch (stage) {
      case 1:
        alert(this.state.IDs[value-1]);
        this.setState({selectedStreamID: this.state.IDs[value-1]});
        break;
      case 2:
        this.setState({selectedEnv: this.state.environments[value-1]});
        break;
    }
  };

  changeScenes = (nextScene) => {
    switch (nextScene) {
      case 1:
        this.setState({scene: 1});
        break;
      case 2:
        this.setState({scene: 2});
        break;
      case 3:
        this.setState({scene: 3});
        break;
    }
  };

  gatherPreviews = (response) => {
    const previews = response.data.featured.map(function(feat) {
      return feat.stream.preview.large;
    });
    this.setState({previews: previews});
  };

  gatherStreamIDs = (response) => {
    const IDs = response.data.featured.map(function(feat) {
      return feat.stream.channel.name;
    });
    this.setState({IDs: IDs});
  };

  render() {
    const {
      scene,
      selectedStreamID,
      selectedEnv,
    } = this.state;

    return (
      <View>
        {scene === 1 ? (
          <TitleScene
            showButton={true}
            text={"Watch a Video"}
            changeScenes={this.changeScenes}
            scene={scene}
          />
        ) : (
          scene === 2 ? (
            <Dashboard
              captureSelection={this.captureSelection}
              previews={this.state.previews}
              environments={this.state.environments}
              showButton={false}
              text={"Select Environment"}
              changeScenes={this.changeScenes}
              scene={scene}
            />
          ) : (
            <VideoPlayer
              streamID={selectedStreamID}
              env={selectedEnv}
              showButton={true}
              text={"Back to Dashboard"}
              changeScenes={this.changeScenes}
              scene={scene}
            />
          )
        )}
      </View>
    );
  }
};

AppRegistry.registerComponent('VrVideoApp', () => VrVideoApp);
