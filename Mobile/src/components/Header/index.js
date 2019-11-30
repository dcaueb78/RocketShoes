import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Logo} from './styles';

export default function Header() {
  return (
    <>
      <Container>
        <Logo />
        <Icon name="shopping-basket" size={28} color="#fff" />
      </Container>
    </>
  );
}
