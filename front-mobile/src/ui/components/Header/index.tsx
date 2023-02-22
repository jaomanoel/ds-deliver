import { View, Text, Image } from 'react-native'
import React from 'react'

import { styles } from './index.style'

const index = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/logo.png')} />  
            <Text style={styles.text}>DS Delivery</Text>
        </View>
    )
}

export default index;