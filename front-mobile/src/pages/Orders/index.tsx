import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import Header from "../../ui/components/Header";
import OrderCard from '../../ui/components/OrderCard';

const Orders = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  )
}

export default Orders;