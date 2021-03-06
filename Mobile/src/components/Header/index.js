import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Logo, BasketContainer, ItemCount} from './styles';

function Header({navigation, cartSize}) {
  return (
    <>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={28} color="#fff" />
          <ItemCount>{cartSize}</ItemCount>
        </BasketContainer>
      </Container>
    </>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
