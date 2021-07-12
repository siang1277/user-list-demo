import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Actions from '../../actions';
import AppContainer from '../../components/common/AppContainer';
import EmptyFlatList from '../../components/list/EmptyFlatList';
import NavigationService from '../../navigator/NavigationService';
import UserItemView from './UserItemView';

const UserList = (props) => {
    const [ loading, setLoading ] = useState(false);
    const [ userList, setUserList ] = useState([]);
 
    useEffect(() => {
        props.onUserList();
    }, []);

    useEffect(() => {
        const { isLoading, data } = props.getUserListData;
        setLoading(isLoading);
        if(data) setUserList(data);

    }, [props.getUserListData])

    return (
        <AppContainer
            toolbarTitle={'User List'}
            actionIcon={faUserPlus}
            actionIconPress={() => NavigationService.navigate('AddUser')}
            fullScreenEnabled>
            <EmptyFlatList
                data={userList}
                showLoading={loading}
                emptyTitle={'No User Found'}
                renderItem={({item, index}) => <UserItemView item={item} index={index}/>}
            />
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