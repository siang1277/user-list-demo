import React, { useEffect } from 'react';
import {
    View,
    Text,
} from 'react-native';
import AppContainer from '../components/common/AppContainer';
import NavigationService from '../navigator/NavigationService';

const Splash = (props) => {
    useEffect(() => {
        // setTimeout(() => {
        //     NavigationService.navigate('UserList')
        // }, 100);
    }, [])

    return (
        <AppContainer
            fullScreenEnabled
        >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Splash</Text>
        </View>
        </AppContainer>
    )
}

export default Splash;