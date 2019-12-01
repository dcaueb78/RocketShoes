/* eslint-disable react/state-in-constructor */
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
// Não utilizando API por utilizar aparelho físico na emulação
// import api from '../../services/api';

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
  CartNumber,
} from './styles';

export default class Main extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 3,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 5,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 6,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 4,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
    ],
  };

  render() {
    const {products} = this.state;

    return (
      <ProductList>
        <List
          horizontal
          data={products}
          keyExtractor={product => product.id}
          renderItem={({item}) => (
            <ProductItem>
              <ProductImage
                source={{
                  uri: item.image,
                }}
              />
              <Strong>{item.title}</Strong>
              <SpanPrice>R$ {item.price}</SpanPrice>
              <CartButton>
                <CartBasketView>
                  <Icon name="shopping-basket" size={20} color="#FFF" />
                  <CartNumber>3</CartNumber>
                </CartBasketView>
                <SpanCart>ADICIONAR</SpanCart>
              </CartButton>
            </ProductItem>
          )}
        />
      </ProductList>
    );
  }
}
