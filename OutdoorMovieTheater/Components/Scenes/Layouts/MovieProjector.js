import React from 'react';
import { View } from 'react-vr';
import Movie from './Elements/Movie.js';

class MovieProjector extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        width: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#333333',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -5]}]
      }}>
        <Movie/>
      </View>
    )
  }
}

module.exports = MovieProjector;
