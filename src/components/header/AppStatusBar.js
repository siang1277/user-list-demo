import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';

const AppStatusBar = React.memo((props) => {
    return (
        <SafeAreaInsetsContext.Consumer>
            {(insets) => 
            <View style={{ backgroundColor: Platform.OS === 'ios'? Colors.primary:Colors.primaryDark, height: insets.top}}>
                <StatusBar translucent barStyle='light-content' backgroundColor={Colors.primaryDark}/>
            </View>
            }
        </SafeAreaInsetsContext.Consumer>
    )
})

export default AppStatusBar;