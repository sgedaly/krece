import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Home from './screens/Home';
import Welcome from './screens/Welcome';
import Profile from './screens/Profile';
import Borrow from './screens/Borrow';
import Signup from './screens/Signup';
import Login from './screens/Login';

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.disableYellowBox = true;
//     this.state = {
//       user: ''
//     }
//   }

//   render() {
//     return (
//       <AppNavigator />
//     );
//   }
// }
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
        <Tab.Screen name="Pedir Prestamo" component={Borrow} />
        <Tab.Screen name="Perfil" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

