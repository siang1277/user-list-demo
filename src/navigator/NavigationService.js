import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

function navigate(name, params) {
    return navigationRef.current.navigate(name, params);
}

function reset(routeName, params) {
    return navigationRef.current.resetRoot({
        index: 0,
        routes: [{ name: routeName, params }]
    });
}

function goBack() {
    navigationRef.current.dispatch(
        StackActions.pop(1)
    )
}

export default {
    navigate,
    reset,
    goBack,
}