import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import AppFooter from '../footer/AppFooter';
import AppStatusBar from '../header/AppStatusBar';
import Toolbar from '../header/Toolbar';
import LoadingView from './LoadingView';

import Styles from '../../constants/Styles';
import Colors from '../../constants/Colors';

const AppContainer = (props) => {
    // fullScreenEnabled
    // scrollEnabled
    // backEnabled
    // dashboardEnabled
    // showLoading
    return (
        <View style={{flex: 1, backgroundColor: Colors.white, ...props.mainContainerStyle}}>
            <AppStatusBar/>
            {props.toolbarTitle && <Toolbar {...props}/>}
            
            {props.scrollEnabled ? 
                <ScrollView 
                    {...props}
                    style={[styles.container, props.containerStyle]} 
                    scrollEnabled={props.scrollEnabled}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[{flexGrow: props.fullScreenEnabled? 1 : null}, props.scrollViewStyle]}>

                    {props.children}

                </ScrollView>
                :
                <View style={[styles.container, props.containerStyle, [{flex: props.fullScreenEnabled? 1 : null}, props.scrollViewStyle]]} >
                    {props.children}
                </View>
            }
            <LoadingView showLoading={props.showLoading}/>
            {!props.dashboardEnabled && <AppFooter/>}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Styles.w16,
    }
})

export default AppContainer;