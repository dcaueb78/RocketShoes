import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.ScrollView``;

export const CartInfos = styled.View`
  background-color: white;
  border-radius: 5px;
  margin: 20px;
  background-color: white;
  padding: 15px;
`;

export const Product = styled.View`
  background-color: #fff;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const ProductDetails = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;
export const ProductName = styled.Text`
  font-size: 18px;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const TrashIcon = styled(RectButton)`
  width: 30px;
  align-items: center;
  justify-content: center;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #eee;
  flex: 1;
  border-radius: 8px;
  margin-top: 10px;
  padding: 0 15px;
  align-items: center;
`;

export const ProductControl = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DecrementButton = styled(RectButton)``;

export const IncrementButton = styled(RectButton)``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  padding: 5px;
  margin: 10px 5px;
  border: 1px solid #ddd;
  min-width: 52px;
  border-radius: 6px;
  background-color: #fff;
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
