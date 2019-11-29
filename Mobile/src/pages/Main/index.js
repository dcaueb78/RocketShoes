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
            <Text>Produto 1</Text>
            <Text>Produto 2</Text>
            <Text>Produto 3</Text>
            <Text>Produto 4</Text>
          </Products>
        </Container>
      </>
    );
  }
}
