import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';

const EmptyView = (props) => {
    let title = props.title ?? 'No record found';
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        padding: Styles.w40,
        alignItems: 'center',
    },
    title: {
        color: Colors.black70, 
        fontSize: Styles.fs14,
    }
})

export default EmptyView;