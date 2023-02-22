import { View, Text, Image, Touchable } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

import React from 'react'

import { styles } from './index.style'

const index = () => {
    return (
        <>
            <View style={styles.container}>
                <Image source={require('../../../assets/deliveryman.png')} />
                <Text style={styles.title}>Aconpanhe os pedidos e entrege no prazo!</Text>
                <Text style={styles.subTitle}>Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão</Text>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button}>
                    <Text style={styles.buttonText}>VER PEDIDOS</Text>
                </RectButton>
            </View>
        </>
    )
}

export default index