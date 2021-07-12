export const NAME = 'USER';

export const USER_LIST = `${NAME}/USER_LIST`;
export const USER_LIST_SUCCESS = `${NAME}/USER_LIST_SUCCESS`;
export const USER_LIST_FAIL = `${NAME}/USER_LIST_FAIL`;
export const RESET_USER_LIST = `${NAME}/RESET_USER_LIST`;

export const getUserListData = store => store[NAME].userList;

export const userList = data => ({
    type: USER_LIST,
    data,
});

export const userListSuccess = data => ({
    type: USER_LIST_SUCCESS,
    data,
});

export const userListFail = error => ({
    type: USER_LIST_FAIL,
    error,
});

export const resetUserList = () => ({
    type: RESET_USER_LIST,
});
