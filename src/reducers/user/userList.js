import Actions from '../../actions';

const getDefaultState = () => ({ isLoading: false, error: null, data: null });

function userList(state, action) {
    if (typeof state === 'undefined') {
        return getDefaultState();
    }

    switch (action.type) {
        case Actions.USER_LIST:
            return {
                isLoading: true,
                error: null,
                data: null,
            };

        case Actions.USER_LIST_SUCCESS:
            return {
                isLoading: false,
                error: null,
                data: action.data,
            };
        case Actions.USER_LIST_FAIL:
            return {
                isLoading: false,
                error: action.error,
                data: null,
            };
        case Actions.RESET_USER_LIST:
            return getDefaultState();
        default:
            return state;
    }
}

export default userList;
