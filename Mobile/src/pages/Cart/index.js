import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import {formatPrice} from '../../util/format';

import {
  Container,
  CartInfos,
  Product,
  CartButton,
  TotalText,
  ButtonText,
  CartFooter,
  TotalPrice,
  Total,
  ProductInfo,
  ProductImage,
  ProductControls,
  ProductControl,
  ProductAmount,
  ProductDetails,
  ProductName,
  ProductPrice,
  TrashIcon,
  DecrementButton,
  IncrementButton,
} from './styles';

function Cart({cart, total, removeFromCart, updateAmount, navigation}) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <CartInfos>
        {cart.map(product => (
          <Product key={product.id}>
            <ProductInfo>
              <ProductImage
                source={{
                  uri: product.image,
                }}
              />
              <ProductDetails>
                <ProductName>{product.title}</ProductName>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductDetails>
              <TrashIcon onPress={() => removeFromCart(product.id)}>
                <Icon name="delete-forever" size={30} color="#7159c1" />
              </TrashIcon>
            </ProductInfo>
            <ProductControls>
              <ProductControl>
                <DecrementButton onPress={() => decrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    size={30}
                    color="#7159c1"
                  />
                </DecrementButton>
                <ProductAmount value={String(product.amount)} />
                <IncrementButton onPress={() => increment(product)}>
                  <Icon name="add-circle-outline" size={30} color="#7159c1" />
                </IncrementButton>
              </ProductControl>
              <ProductPrice>{product.subtotal}</ProductPrice>
            </ProductControls>
          </Product>
        ))}
        <CartFooter>
          <Total>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>{total}</TotalPrice>
          </Total>
          <CartButton onPress={() => navigation.navigate('Main')}>
            <ButtonText>FINALIZAR PEDIDO</ButtonText>
          </CartButton>
        </CartFooter>
      </CartInfos>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
    priceFormatted: formatPrice(product.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
