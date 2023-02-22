import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import { styles } from './index.style'

const OrderCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.orderName}>Pedido 1</Text>
                <Text style={styles.orderPrice}>R$ 39,90</Text>
            </View>

            <Text style={styles.text}>Ha 30 min</Text>

            <View style={styles.productsList}>
                <Text style={styles.text}>Pizza Calabreza</Text>
                <Text style={styles.text}>Pizza Quatro Queizos</Text>
                <Text style={styles.text}>Pizza Masrguerita</Text>
            </View>
        </View>
    )
}

export default OrderCard;