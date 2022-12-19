import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();

//test

import { Home, Restaurant } from "./screens";
import Basket from "./screens/Basket";
import { store } from "./store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="Basket" 
        options={{presentation: 'modal', headerShown: false}}
        component={Basket} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
