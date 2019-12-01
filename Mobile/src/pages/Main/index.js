/* eslint-disable react/state-in-constructor */
import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  ProductList,
  List,
  ProductImage,
  ProductItem,
  Strong,
  SpanPrice,
  SpanCart,
  CartBasketView,
  CartButton,
} from './styles';

export default class Main extends Component {
  state = {
    items: [
      {name: 'Tênis muito massaaaa'},
      {name: 'Tênis muito massaaaa2'},
      {name: 'Tênis muito massaaaa3'},
    ],
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
              <SpanPrice>R$129.90</SpanPrice>
              <CartButton>
                <CartBasketView>
                  <Icon name="shopping-basket" size={20} color="#FFF" />
                </CartBasketView>
                <SpanCart>Adicionar ao Carrinho</SpanCart>
              </CartButton>
            </ProductItem>
          )}
        />
      </ProductList>
    );
  }
}
