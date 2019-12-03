import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import {formatPrice} from '../../util/format';

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

  handleAddProduct = async product => {
    const {navigation} = this.props;
    const {addToCart} = this.props;
    navigation.navigate('Cart');

    await addToCart(product);
  };

  render() {
    const {products} = this.state;

    const {amount} = this.props;

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
              <SpanPrice>{formatPrice(item.price)}</SpanPrice>
              <CartButton onPress={() => this.handleAddProduct(item)}>
                <CartBasketView>
                  <Icon name="shopping-basket" size={20} color="#FFF" />
                  <CartNumber>{amount[item.id] || 0}</CartNumber>
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
