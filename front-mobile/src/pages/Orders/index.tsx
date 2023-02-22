import { View, Text, ScrollView, Alert, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

import Header from "../../ui/components/Header";
import OrderCard from '../../ui/components/OrderCard';
import featchOrders from '../../data/hooks/fetchOrders';
import { OrderType } from '../../data/types/OrderType';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const Orders = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();

  const fetchData = () => {
    setIsLoading(true);

    featchOrders()
      .then(resonse => setOrders(resonse.data))
      .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if(isFocused){
      fetchData();
    }
  }, [isFocused])


  const handleOnPress = (order: OrderType) => {
    navigation.navigate('OrderDetails', {
      order
    });
  }

  return (
    <>
      <Header />
      <ScrollView>
        {isLoading ? (
          <Text>Buscando Pedidos...</Text>
        ) : (
          orders.map(order => (
            <Pressable key={order.id} onPress={() => handleOnPress(order)}>
              <OrderCard order={order} />
            </Pressable>
          ))
        )}
      </ScrollView>
    </>
  )
}

export default Orders;