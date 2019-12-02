/* eslint-disable react/state-in-constructor */
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';

import api from '../../services/api';

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

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({products: response.data});
  }

  handleAddProduct = product => {
    const {dispatch} = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
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
              <CartButton onPress={() => this.handleAddProduct(item)}>
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

export default connect()(Main);
