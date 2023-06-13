import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Home from './screens/Home';
import Welcome from './screens/Welcome';
import Profile from './screens/Profile';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Pay from './screens/Pay';

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
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Perfil" component={Profile} />
        <Tab.Screen name="Pay" component={Pay} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

