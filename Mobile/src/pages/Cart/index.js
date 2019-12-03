import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

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
} from './styles';

function Cart({cart, removeFromCart}) {
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
                <ProductPrice>R$ {product.price}</ProductPrice>
              </ProductDetails>
              <TrashIcon onPress={() => removeFromCart(product.id)}>
                <Icon name="delete-forever" size={30} color="#7159c1" />
              </TrashIcon>
            </ProductInfo>
            <ProductControls>
              <ProductControl>
                <Icon name="remove-circle-outline" size={30} color="#7159c1" />
                <ProductAmount value={String(product.amount)} />
                <Icon name="add-circle-outline" size={30} color="#7159c1" />
              </ProductControl>
              <ProductPrice>R$ 129,90</ProductPrice>
            </ProductControls>
          </Product>
        ))}
        <CartFooter>
          <Total>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>R$259,80</TotalPrice>
          </Total>
          <CartButton>
            <ButtonText>FINALIZAR PEDIDO</ButtonText>
          </CartButton>
        </CartFooter>
      </CartInfos>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
