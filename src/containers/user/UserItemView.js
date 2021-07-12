import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import stc from 'string-to-color';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';
import NavigationService from '../../navigator/NavigationService';

const UserItemView = (props) => {
    let item = props.item;
    let marginTop = props.index === 0? Styles.w12 : 0;
    return (
        <TouchableOpacity style={[styles.container, {marginTop}]}
            onPress={() => NavigationService.navigate('UserDetails', {...item})}>
            <View style={[styles.singleContainer, {backgroundColor: stc(item.username)}]}>
                <Text style={styles.single}>{item.username.charAt(0)}</Text>
            </View>
            <View>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.email}>{item.email}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: Styles.w12,
        borderRadius: 4,
        flexDirection: 'row',
        backgroundColor: Colors.white,
        marginBottom: Styles.w12,
        marginHorizontal: Styles.w12,
        ...Styles.shadow,
    },
    singleContainer: {
        height: Styles.w20,
        width: Styles.w20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginRight: Styles.w8,
        marginTop: Styles.h2,
    },
    single: {
        fontSize: Styles.fs14,
        color: Colors.white,
    },
    username: {
        fontSize: Styles.fs20,
        fontWeight: 'bold',
    },
    email: {
        fontSize: Styles.fs14,
        color: Colors.black70,
    }
})

export default UserItemView;