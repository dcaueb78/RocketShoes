/* eslint-disable react/state-in-constructor */
import React, {Component} from 'react';

import {Container, Products, Text} from './styles';

export default class Main extends Component {
  static navigationOptions = {};

  render() {
    return (
      <>
        <Container>
          <Products horizontal>
            <Text>oi</Text>
            <Text>oi</Text>
            <Text>oi</Text>
            <Text>oi</Text>
          </Products>
        </Container>
      </>
    );
  }
}
