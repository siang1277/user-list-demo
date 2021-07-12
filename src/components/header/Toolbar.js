import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';
import NavigationService from '../../navigator/NavigationService';

const Toolbar = React.memo((props) => {
    return (
        <View style={[styles.container, props.containerStyle]}>
            <Text style={[styles.title, props.titleStyle]}>{props.toolbarTitle}</Text>

            <View style={styles.actionContainer}>
                {props.backEnabled &&
                    <TouchableOpacity style={styles.iconContainer} onPress={props.onBackPress?props.onBackPress:() => NavigationService.goBack()}>
                        <FontAwesomeIcon icon={faChevronLeft} size={Styles.w18} color={Colors.white}/>
                    </TouchableOpacity>
                }
                <View style={{flex: 1}}/>
                {props.actionIcon &&
                    <TouchableOpacity style={styles.iconContainer} onPress={props.actionIconPress}>
                        <FontAwesomeIcon style={{color: Colors.white}} size={Styles.w24} icon={ props.actionIcon } />                
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios'? Styles.h44 : Styles.h52,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
    },
    actionContainer: {
        flexDirection: 'row',
        position: 'absolute', 
        width: '100%',
    },
    title: {
        fontSize: Styles.fs18,
        fontWeight: '500',
        color: Colors.white,
        textAlign: 'center',
    },
    iconContainer: {
        padding: Styles.w8,
    },
})

export default Toolbar;