import React from 'react';
import { View } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import Styles from '../../constants/Styles';

const AppFooter = React.memo((props) => {
    return (
        <SafeAreaInsetsContext.Consumer>
            {(insets) => <View style={{ paddingTop: insets.bottom > 0? insets.bottom:Styles.h8, ...props.containerStyle}} />}
        </SafeAreaInsetsContext.Consumer>
    )
})

export default AppFooter;