import React from 'react';
import MainMenuContainer from './Layouts/MainMenuContainer.js';

class MainMenu extends React.Component {
  render() {
    return (
      <MainMenuContainer
        text={this.props.text}
        buttonText={this.props.buttonText}
        updateScene={this.props.updateScene}
        scene={this.props.scene}
      />
    )
  }
}

module.exports = MainMenu;
