import React from 'react';

import LaunchPadTable from './components/Table/LaunchPadTable';
import {Provider, DefaultTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LaunchSection from './components/LaunchDetails/LaunchSection';
import AddInventory from './components/Inventory/AddInventory';
import Home from './components/Home';
import InventoryDetails from './components/Inventory/InventoryDetails';

const App = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };
  const Stack = createNativeStackNavigator();
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LaunchPad" component={LaunchPadTable} />
          <Stack.Screen name="LaunchSection" component={LaunchSection} />
          <Stack.Screen name="AddInventory" component={AddInventory} />
          <Stack.Screen name="InventoryDetails" component={InventoryDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
