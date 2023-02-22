import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { styles } from './index.style'
import { useNavigation } from '@react-navigation/native';


const index = () => {
    const navigation = useNavigation<any>();

    const handleOnPress = () => {
        navigation.navigate('Home');
    }

    return (
        <TouchableNativeFeedback onPress={handleOnPress}>
            <View style={styles.container}>
                <Image source={require('../../../../assets/logo.png')} />  
                <Text style={styles.text}>DS Delivery</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default index;