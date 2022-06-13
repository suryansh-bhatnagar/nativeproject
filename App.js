import React, {useState, useEffect,useMemo} from 'react';

import LaunchPadTable from './components/Table/LaunchPadTable';
import {Provider, DefaultTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LaunchSection from './components/LaunchDetails/LaunchSection';
import AddInventory from './components/Inventory/AddInventory';
import Home from './components/Home';
import InventoryDetails from './components/Inventory/InventoryDetails';
import Login from './components/Login/Login';
import { View ,ActivityIndicator} from 'react-native';
import { AuthContext } from './context/context';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authFunctions = React.useMemo(() => ({
    signIn: () => {
      setUserToken('xyz');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };

  if(isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  const Stack = createNativeStackNavigator();
  return (
    <AuthContext.Provider value={authFunctions}>
    <Provider theme={theme}>
      <NavigationContainer>
      {userToken !==null?
        <Stack.Navigator>
        
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LaunchPad"
            component={LaunchPadTable}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LaunchSection"
            component={LaunchSection}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddInventory"
            component={AddInventory}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InventoryDetails"
            component={InventoryDetails}
            options={{headerShown: false}}
          />
        </Stack.Navigator> :
        <Login/>

      }

        
      </NavigationContainer>
    </Provider>
    </AuthContext.Provider>
  );
};

export default App;
