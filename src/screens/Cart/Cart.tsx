import {View, Text, FlatList, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Container} from './styles';
import CartService from '../../services/CartService/CartService';
import CoffeService from '../../services/CoffeService/CoffeService';
import {ICoffeInfo} from '../../models/coffeModels';

const Cart = () => {
  const [cartData, setCartData] = useState();
  const [coffeInfo, setCoffeInfo] = useState<ICoffeInfo[]>([]);

  const getCart = async () => {
    try {
      const response = await CartService.getCart();
      setCartData(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllCafes = async favorites => {
    try {
      const response = await CoffeService.getAllCafes();
      const filtered = response.filter((item: any) => favorites.includes(item.id));
      setCoffeInfo(filtered);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({item, index}: {item: any; index: number}) => <Text></Text>;

  useEffect(() => {
    getCart();
  }, []);

  return (
    <Container>
      <FlatList
        data={cartData}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'key' + index}
      />
      {/* <Button title="teste" onPress={() => console.log(cartData)} /> */}
    </Container>
  );
};

export default Cart;
