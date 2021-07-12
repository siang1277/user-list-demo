import React, { useEffect } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux';

import Actions from '../../actions';

const UserList = (props) => {
    useEffect(() => {
        props.onUserList();
    }, []);

    return (
        <View>
            <Text>User List</Text>
        </View>
    )
}

const mapStateToProps = store => ({
    getUserListData: Actions.getUserListData(store),
});

const mapDispatchToProps = {
    onUserList: Actions.userList,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);