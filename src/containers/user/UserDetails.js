import { faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Linking,
} from 'react-native';
import AppContainer from '../../components/common/AppContainer';
import TitleValueView from '../../components/data/TitleValueView';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';
import { getAddress, getCompany, getGeoLocation } from './UserUtils';

const UserDetails = (props) => {
    console.log("Props: ", props.route.params);
    const [ user ] = useState(props.route.params);

    return (
        <AppContainer
            fullScreenEnabled
            backEnabled
            scrollEnabled
            toolbarTitle={"User Details"}>
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Image source={{ uri: "https://i.pravatar.cc/300"}} style={styles.profile}/>
                </View>

                <TitleValueView
                    title={'User ID'}
                    value={user.id}
                    containerStyle={{marginTop: Styles.w20}}
                />
                <TitleValueView
                    title={'Username'}
                    value={user.username}
                    containerStyle={{marginTop: Styles.w20}}
                />
                <TitleValueView
                    title={'Name'}
                    value={user.name}
                    containerStyle={{marginTop: Styles.w20}}
                />
                <TitleValueView
                    title={'Email'}
                    value={user.email}
                    icon={faEnvelope}
                    onPress={() => Linking.openURL(`mailto:${user.email}`)}
                    containerStyle={{marginTop: Styles.w20}}
                />
                <TitleValueView
                    title={'Phone'}
                    value={user.phone}
                    onPress={() => Linking.openURL(`tel:${user.phone}`)}
                    icon={faPhone}
                    containerStyle={{marginTop: Styles.w20}}
                />
                <TitleValueView
                    title={'Address'}
                    value={getAddress(user.address)}
                    containerStyle={{marginTop: Styles.w20}}
                />
                <TitleValueView
                    title={'Geo Location'}
                    value={getGeoLocation(user.address)}
                    containerStyle={{marginTop: Styles.w20}}
                />
                <TitleValueView
                    title={'Company'}
                    value={getCompany(user.company)}
                    containerStyle={{marginTop: Styles.w20}}
                />
                <TitleValueView
                    title={'Website'}
                    value={user.website}
                    icon={faGlobe}
                    onPress={() => Linking.openURL(user.website)}
                    containerStyle={{marginTop: Styles.w20}}
                />
            </View>
        </AppContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: Styles.w16,
    },
    profile: {
        width: Styles.w160,
        height: Styles.w160,
        borderRadius: 150,
        borderWidth: Styles.w4,
        borderColor: Colors.primary40,
    }
})

export default UserDetails;