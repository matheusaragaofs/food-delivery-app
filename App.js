import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();

//test

import { Home, Restaurant, Basket, PreparingOrder, Delivery } from "./screens";
import { store } from "./store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="PreparingOrder" component={PreparingOrder} options={{presentation:'fullScreenModal', headerShown:false}} />
        <Stack.Screen name="Delivery" component={Delivery} options={{presentation:'fullScreenModal', headerShown:false}} />
        <Stack.Screen name="Basket" 
        options={{presentation: 'modal', headerShown: false}}
        component={Basket} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
