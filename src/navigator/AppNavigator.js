import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from '../navigator/NavigationService';

import Splash from '../containers/Splash';
import UserList from '../containers/user/UserList';
import UserDetails from '../containers/user/UserDetails';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="UserList" component={UserList} />
                <Stack.Screen name="UserDetails" component={UserDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;