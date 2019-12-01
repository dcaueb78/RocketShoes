import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.ScrollView``;

export const CartInfos = styled.View`
  background-color: white;
  border-radius: 5px;
  margin: 20px;
  background-color: white;
  padding: 10px;
`;

export const Product = styled.View`
  background-color: red;
`;

export const ProductInfo = styled.View``;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProductAmount = styled.View`
  background-color: red;
  width: 100px;
  height: 100px;
`;

export const CartFooter = styled.View``;

export const Total = styled.View`
  align-items: center;
  margin: 30px 0;
`;

export const TotalText = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 18px;
  color: #999;
`;

export const TotalPrice = styled.Text`
  font-weight: bold;
  color: ${colors.dark};
  font-size: 28px;
`;

export const CartButton = styled(RectButton)`
  background-color: ${colors.primary};
  padding: 15px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;
