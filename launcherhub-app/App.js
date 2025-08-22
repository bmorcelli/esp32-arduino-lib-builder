import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import DeviceScreen from './src/screens/DeviceScreen';
import FirmwareScreen from './src/screens/FirmwareScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Catalog" component={CatalogScreen} />
          <Stack.Screen name="Firmware" component={FirmwareScreen} />
          <Stack.Screen name="Device" component={DeviceScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
