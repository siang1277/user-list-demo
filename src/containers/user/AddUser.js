import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import ValidationComponent from 'react-native-form-validator';

import Actions from '../../actions';
import AppButton from '../../components/button/AppButton';
import AppContainer from '../../components/common/AppContainer';
import FormInput from '../../components/input/FormInput';
import Styles from '../../constants/Styles';
import NavigationService from '../../navigator/NavigationService';
import { showAttention, showSuccessYes } from '../../utils/AlertUtils';

const AddUser = (props) => {
    const [ fullName, setFullName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ street, setStreet ] = useState('');
    const [ city, setCity ] = useState('');
    const [ suite, setSuite ] = useState('');
    const [ zipcode, setZipcode ] = useState('');
    const [ latitude, setLatitude ] = useState('');
    const [ longitude, setLongitude ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ website, setWebsite ] = useState('');
    const [ company, setCompany ] = useState('');

    useEffect(() => {
        if(__DEV__) {
            setFullName('Alwin Pou');
            setUsername('siang1277');
            setEmail('weisiang91@gmail.com');
            setStreet('1277, Jalan E4/9, Tmn Ehsan');
            setCity('Kepong');
            setZipcode('52100');
            setPhone('0162811714')
        }
    }, []);

    const onSubmitPress = () => {
        if(!isValid()) return;
        let data = {
            "name": fullName,
            "username": username,
            "email": email,
            "address": { 
                    "street": street,
                    "suite": suite,
                    "city": city,
                    "zipcode": zipcode,
                    "geo": {
                            "lat": latitude,
                            "lng": longitude
                    }
            },
            "phone": phone,
            "website": website,
            "company": {
                    "name": company,
            }
        }
        props.onAddUser(data);
        showSuccessYes('Add User Successful', () => {
            NavigationService.goBack();
        })
    }

    const isValid = () => {
        let isValid = true;
        let message = '';
        if(!fullName) {
            isValid = false;
            message += 'Full name is required'
        }
        if(!username) {
            isValid = false;
            message += `${message.length > 0?'\n':''}Username is required`;
        }
        if(!email) {
            isValid = false;
            message += `${message.length > 0?'\n':''}Email is required`;
        }
        if(!phone) {
            isValid = false;
            message += `${message.length > 0?'\n':''}Phone is required`;
        }
        if(!street) {
            isValid = false;
            message += `${message.length > 0?'\n':''}Street is required`;
        }
        if(!city) {
            isValid = false;
            message += `${message.length > 0?'\n':''}City is required`;
        }
        if(!zipcode) {
            isValid = false;
            message += `${message.length > 0?'\n':''}Zipcode is required`;
        }
        if(!!message) {
            showAttention(message);
        }
        return isValid;
    }
    
    return (
        <AppContainer
            fullEnabled
            backEnabled
            scrollEnabled
            toolbarTitle={'Add New User'}>
            <View style={styles.container}>
                <FormInput
                    title={'Full Name'}
                    placeholder={'Full Name'}
                    value={fullName}
                    onChangeText={(fullName) => setFullName(fullName)}
                />
                <FormInput
                    title={'Username'}
                    placeholder={'Username'}
                    value={username}
                    onChangeText={(username) => setUsername(username)}
                    containerStyle={{marginTop: Styles.w20}}
                />
                <FormInput
                    title={'Email'}
                    placeholder={'Email'}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    containerStyle={{marginTop: Styles.w20}}
                />
                <FormInput
                    title={'Address'}
                    placeholder={'Street'}
                    value={street}
                    onChangeText={(street) => setStreet(street)}
                    containerStyle={{marginTop: Styles.w8}}
                />
                <FormInput
                    placeholder={'City'}
                    value={city}
                    onChangeText={(city) => setCity(city)}
                    containerStyle={{marginTop: Styles.w8}}
                />
                <FormInput
                    placeholder={'Suite (Optional)'}
                    value={suite}
                    onChangeText={(suite) => setSuite(suite)}
                    containerStyle={{marginTop: Styles.w8}}
                />
                <FormInput
                    placeholder={'Zipcode'}
                    value={zipcode}
                    onChangeText={(zipcode) => setZipcode(zipcode)}
                    containerStyle={{marginTop: Styles.w8}}
                />
                <FormInput
                    title={'Geo Location'}
                    placeholder={'Latitude'}
                    value={latitude}
                    editable={false}
                    onChangeText={(latitude) => setLatitude(latitude)}
                    containerStyle={{marginTop: Styles.w20}}
                />
                <FormInput
                    placeholder={'Longitude'}
                    value={longitude}
                    editable={false}
                    onChangeText={(longitude) => setLongitude(longitude)}
                    containerStyle={{marginTop: Styles.w8}}
                />
                <FormInput
                    title={'Phone'}
                    placeholder={'Phone'}
                    value={phone}
                    onChangeText={(phone) => setPhone(phone)}
                    containerStyle={{marginTop: Styles.w20}}
                />
                <FormInput
                    title={'Website (Optional)'}
                    placeholder={'Website'}
                    value={website}
                    onChangeText={(website) => setWebsite(website)}
                    containerStyle={{marginTop: Styles.w20}}
                />
                <FormInput
                    title={'Company (Optional)'}
                    placeholder={'Company'}
                    value={company}
                    onChangeText={(company) => setCompany(company)}
                    containerStyle={{marginTop: Styles.w20}}
                />

                <AppButton
                    containerStyle={{marginTop: Styles.h32}}
                    title={'Submit'}
                    onPress={onSubmitPress}
                />
            </View>
        </AppContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: Styles.w16,
    }
})


const mapStateToProps = store => ({
    getUserListData: Actions.getUserListData(store),
});

const mapDispatchToProps = {
    onAddUser: Actions.addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);