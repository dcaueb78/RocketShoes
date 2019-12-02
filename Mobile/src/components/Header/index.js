import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Logo, BasketContainer, ItemCount} from './styles';

export default function Header() {
  return (
    <>
      <Container>
        <Logo />
        <BasketContainer>
          <Icon name="shopping-basket" size={28} color="#fff" />
          <ItemCount>3</ItemCount>
        </BasketContainer>
      </Container>
    </>
  );
}
