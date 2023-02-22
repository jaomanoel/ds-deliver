import { View, Text} from 'react-native';
import React from 'react';

import { styles } from './index.style';
import { OrderType } from '../../../data/types/OrderType';
import dateFormater from '../../../data/hooks/dateFormatter';
import currencyFormater from '../../../data/hooks/currencyFormatter';

type Order = {
    order: OrderType;
}

const OrderCard = ({order}: Order) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.orderName}>Pedido {order.id}</Text>
                <Text style={styles.orderPrice}>{currencyFormater(order.totalPrice)}</Text>
            </View>

            <Text style={styles.text}>{dateFormater(order.moment)}</Text>

            <View style={styles.productsList}>
                {order.products.map(product => (
                    <Text key={product.id} style={styles.text}>{product.name}</Text>
                ))}
            </View>
        </View>
    )
}

export default OrderCard;