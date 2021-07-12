import React from 'react';
import {
    StyleSheet,
    Text, 
    TouchableOpacity
} from 'react-native';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';

const AppButton = React.memo((props) => {
    return (
        <TouchableOpacity
            {...props}
            onPress={props.onPress}
            style={[styles.container, props.buttonStyle, props.containerStyle]}>
            <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
})

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.primaryDark,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: Platform.OS === "ios"? Styles.h12: Styles.h10,
        ...Styles.shadow,
    },
    title: {
        color: Colors.white,
        fontWeight: '500',
        textTransform: 'capitalize',
        fontSize: Styles.fs16,
    },
})

export default AppButton;