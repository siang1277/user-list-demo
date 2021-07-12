import React, { useEffect } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux';

import Actions from '../../actions';
import AppContainer from '../../components/common/AppContainer';

const UserList = (props) => {
    useEffect(() => {
        props.onUserList();
    }, []);

    return (
        <AppContainer
            toolbarTitle={'User List'}
            >
            <Text>User List</Text>
        </AppContainer>
    )
}

const mapStateToProps = store => ({
    getUserListData: Actions.getUserListData(store),
});

const mapDispatchToProps = {
    onUserList: Actions.userList,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);