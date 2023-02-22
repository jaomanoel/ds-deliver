import { View, Text, Pressable, TouchableOpacity, Alert, Linking } from 'react-native'
import React from 'react'

import Header from "../../ui/components/Header";

import { styles } from './index.style'
import { useNavigation } from '@react-navigation/native';
import { OrderType } from '../../data/types/OrderType';
import OrderCard from '../../ui/components/OrderCard';
import fetchDelivered from '../../data/hooks/fetchDelivered';

type Props = {
    route: {
        params: {
            order: OrderType;
        }
    }
}

const OrderDetails = ({ route }: Props) => {
    const { order } = route.params;
    const navigation = useNavigation<any>();

    const handleOnCancel = () => {
        navigation.navigate('Orders');
    }

    const handleOnDelivered = () => {
        fetchDelivered(order.id)
        .then(response => {
            Alert.alert(`Pedido ${order.id} confirmado com sucesso!`)
            navigation.navigate('Orders');
        })
        .catch(error => Alert.alert(`Houve um erro ao marcar o pedido ${order.id} como entregue!`))
    }

    const handleStartNavigation = () => {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <OrderCard order={order} />

                <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={handleStartNavigation}>
                    <Text style={styles.buttonText}>INICIAR NAVEGACAO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={handleOnDelivered}>
                    <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={handleOnCancel}>
                    <Text style={styles.buttonText}>CANCELAR</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default OrderDetails;