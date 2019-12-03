import React from 'react';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

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

function Cart({cart}) {
  return (
    <Container>
      <CartInfos>
        {cart.map(product => (
          <Product>
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
              <TrashIcon>
                <Icon name="delete-forever" size={30} color="#7159c1" />
              </TrashIcon>
            </ProductInfo>
            <ProductControls>
              <ProductControl>
                <Icon name="remove-circle-outline" size={30} color="#7159c1" />
                <ProductAmount value="2" />
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

export default connect(mapStateToProps)(Cart);
