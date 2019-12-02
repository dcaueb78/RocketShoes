import styled from 'styled-components/native';
import colors from '../../styles/colors';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 25px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 20px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  max-width: 18px;
  background: ${colors.primary};
  color: #fff;
  border-radius: 9px;
  overflow: hidden;
`;
