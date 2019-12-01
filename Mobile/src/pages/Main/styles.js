import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #191920;
`;

export const ProductList = styled.View``;

export const Text = styled.Text`
  font-size: 50px;
  color: white;
`;

export const List = styled.FlatList`
  margin: 0 20px;
`;

export const ProductItem = styled.View`
  display: flex;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 0 10px;
  max-width: 400px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
  max-width: 200px;
`;

export const Strong = styled.Text`
  font-weight: bold;
  color: #666;
  font-size: 16px;
  line-height: 20px;
  margin-top: 5px;
  max-width: 300px;
`;

export const SpanPrice = styled.Text`
  color: white;
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
  color: #191920;
`;

export const CartBasketView = styled.View`
  align-items: center;
  padding: 12px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.1);
  flex-direction: row;
`;
export const CartNumber = styled.Text`
  color: #fff;
  margin-left: 4px;
`;

export const CartButton = styled(RectButton)`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 6px;
  overflow: hidden;
  margin-top: auto;

  flex-direction: row;
  align-items: center;
`;

export const SpanCart = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
  padding: 10px;
`;
