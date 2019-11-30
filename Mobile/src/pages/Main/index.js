/* eslint-disable react/state-in-constructor */
import React, {Component} from 'react';

import {
  ProductList,
  List,
  ProductImage,
  ProductItem,
  Strong,
  Span,
} from './styles';

export default class Main extends Component {
  state = {
    items: [{name: 'nome'}, {name: 'nome2'}, {name: '3'}],
  };

  render() {
    const {items} = this.state;

    return (
      <ProductList>
        <List
          horizontal
          data={items}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <ProductItem>
              <ProductImage
                source={{
                  uri:
                    'https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_zoom1.jpg',
                }}
              />
              <Strong>{item.name}</Strong>
              <Span>R$129.90</Span>
            </ProductItem>
          )}
        />
      </ProductList>
    );
  }
}
