import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import AppContainer from '../components/common/AppContainer';
import NavigationService from '../navigator/NavigationService';

const Splash = (props) => {
    useEffect(() => {
        // setTimeout(() => {
        //     NavigationService.reset('UserList')
        // }, 100);
    }, [])

    return (
        <AppContainer
            fullScreenEnabled>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    source={require('../assets/images/app_logo_text.png')}
                    resizeMode={'center'}
                />
            </View>
        </AppContainer>
    )
}

export default Splash;