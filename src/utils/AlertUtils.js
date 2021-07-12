import { Alert } from "react-native";

export function showError(message){
    Alert.alert('Error', message);
}

export function showServerError(){
    Alert.alert('Error', 'An error has occurred. Please try again later.');
}

function showYes(title, message, yesText, onPress) {
    Alert.alert(
        title,
        message,
        [
            {
                text: yesText, onPress: onPress
            },
        ],
        { cancelable: false }
    );
}

export function showSuccessYes(message, onPress){
    showYes('Success', message, 'Yes', onPress);
}

export function showAttention(message){
    Alert.alert("Attention", message);
}