import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';

const FormInput = (props) => {
    const [isFocused, setIsFocus] = useState(false);

    let borderColor = isFocused ? Colors.primaryDark : Colors.black30;
    let borderWidth = isFocused ? 1.2 : 0.8;
    return (
        <View style={[styles.container, props.containerStyle]}>
            {props.title && <Text style={styles.title}>{props.title}</Text>}
            <View style={[styles.inputContainer, { borderColor, borderWidth }]}>
                <TextInput
                    {...props}
                    placeholderTextColor={isFocused ? Colors.black40 : Colors.black30}
                    style={[styles.input, props.inputStyle]}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    inputContainer: {
        backgroundColor: Colors.white,

        paddingVertical: Styles.h8,
        paddingHorizontal: Styles.w6,

        borderWidth: 1,
        borderColor: Colors.black30,
        borderRadius: 4,
        marginTop: Styles.h4,
    },
    input: {
        flex: 1,
        fontSize: Styles.fs16,
        color: Colors.black,
        paddingHorizontal: Styles.w2,
        paddingVertical: Platform.OS === 'ios' ? Styles.w6 : 0,
    },
    title: {
        fontSize: Styles.fs16,
        color: Colors.black60,
        fontWeight: '500',
    },
})

export default FormInput;