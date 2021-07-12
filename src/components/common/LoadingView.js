import React from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import Colors from '../../constants/Colors';

const LoadingView = (props) => {

    let loadingColor = props.loadingColor?? Colors.primary;
    if(props.showLoading)
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={loadingColor} />
            </View>
        )
    else return null;
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        zIndex: 1, 
        position: 'absolute',
        top: 0, left: 0, 
        right: 0, bottom: 0
    },
});

export default LoadingView;
