import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = ({children} : {children : React.ReactNode}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {children}
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
