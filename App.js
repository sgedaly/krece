import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from './screens/Home';
import Welcome from './screens/Welcome';
import Profile from './screens/Profile';
import Borrow from './screens/Borrow';

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Welcome"
      >
        {/* <Tab.Screen name="Welcome" component={Welcome} /> */}
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Pedir Prestamo" component={Borrow} />
        <Tab.Screen name="Perfil" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

