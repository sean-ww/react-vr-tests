import React, {Component} from 'react';
import {AppRegistry, asset, Pano, Text, View, StyleSheet, VrButton} from 'react-vr';

class TestButton extends React.Component {
  render() {
    const styles = StyleSheet.create({
      button: {
        fontSize: 0.2,
        textAlign: 'center',
        color: 'black',
      },
      buttonView: {
        margin: 0.1,
        height: 0.3,
        opacity: 0.8,
      },
    });

    return (
      <VrButton
        onClick={() => this.props.stateClicked(this.props.stateIndex)}
      >
        <View style={[styles.buttonView, {backgroundColor: this.props.color}]}>
          <Text style={styles.button}>{this.props.text}</Text>
        </View>
      </VrButton>
    );
  }
};

class Title extends React.Component {
  constructor() {
    super();
    this.state = {title: "Panoramic Road Trip"};
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 0.2, textAlign: 'center', backgroundColor: '#dddddd', color: '#CF3C7E'}}>
          {this.state.title}
        </Text>
      </View>
    )
  }
}

class TestApp extends Component {
  constructor() {
    super();
    this.state = {
      selectedState: '',
      states: [
        'Arizona',
        'New Hampshire',
        'California',
        'Hawaii',
        'Texas',
      ]
    }
  }

  componentDidMount() {
    const random = Math.floor((Math.random() * 5) + 1);
    this.setState({ selectedState: this.state.states[random]});
  }

  stateClicked = (selection) => {
    this.setState({ selectedState: this.state.states[selection]});
  };

  render() {
    const colors = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
    ];
    return (
      <View>
        <Pano source={asset('states/' + this.state.selectedState + '.jpg')}/>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          width: 2,
          alignItems: 'stretch',
          transform: [{translate: [-1, 1, -5]}],
        }}>
          <Title/>

          { this.state.states.map((stateName, index) => {
            return (
              <TestButton
                stateClicked={this.stateClicked}
                stateIndex={index} text={stateName}
                color={colors[index]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('WelcomeToVR', () => TestApp);
