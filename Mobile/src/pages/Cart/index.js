import React from 'react';

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

export default function Cart() {
  return (
    <Container>
      <CartInfos>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_zoom1.jpg',
              }}
            />
            <ProductDetails>
              <ProductName>Tênis de Caminhada Leve Confortável</ProductName>
              <ProductPrice>R$ 129,90</ProductPrice>
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
