/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StageOne from './layout/StageOne';
import StageTwo from './layout/StageTwo.tsx';
import StageThree from './layout/StageThree.tsx';
import Login from './layout/login.tsx';
import Success from './layout/success.tsx';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StageOne">
        <Stack.Screen
          name="StageOne"
          component={StageOne}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StageTwo"
          component={StageTwo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StageThree"
          component={StageThree}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
