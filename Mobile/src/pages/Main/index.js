/* eslint-disable react/state-in-constructor */
import React, {Component} from 'react';

import {ProductList, List, ProductImage} from './styles';

export default class Main extends Component {
  static navigationOptions = {};

  render() {
    return (
      <ProductList horizontal>
        <List>
          <ProductImage
            source={{
              uri:
                'https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_zoom1.jpg',
            }}
          />
        </List>
      </ProductList>
    );
  }
}
