import React, { useEffect } from 'react';
import {
    View,
    Text,
} from 'react-native';
import NavigationService from '../navigator/NavigationService';

const Splash = (props) => {
    useEffect(() => {
        setTimeout(() => {
            NavigationService.navigate('UserList')
        }, 100);
    }, [])

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Splash</Text>
        </View>
    )
}

export default Splash;