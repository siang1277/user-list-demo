import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';

const TitleValueView = (props) => {
    return (
        <View style={[styles.container, props.containerStyle]}>
            <View style={{flex: 1}}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.value}>{props.value}</Text>
            </View>
            
            {props.icon &&
                <TouchableOpacity style={styles.actionIcon} onPress={props.onPress}>
                    <FontAwesomeIcon icon={props.icon} size={Styles.w16}/>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: Styles.fs16,
        color: Colors.black40,
    },
    value: {
        fontSize: Styles.fs16,
        color: Colors.black90,
        fontWeight: '500',
        marginTop: Styles.h2,
    },
    actionIcon: {
        padding: Styles.w4,
    }
})

export default TitleValueView;