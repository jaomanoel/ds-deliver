import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenStackHeaderSearchBarView } from "react-native-screens";

import Home from './pages/Home';
import Orders from './pages/Orders';
import OrderDetails from "./pages/OrderDetails";

const Stack = createStackNavigator();

function Routers() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#FFF'
                    },
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
                <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Routers;