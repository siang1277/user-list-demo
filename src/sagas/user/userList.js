import { takeLatest, call, all, fork, put, } from 'redux-saga/effects';
import Actions from '../../actions';
// import * as api from '../../api';

function* userList({ data }) {
    // const { response } = yield call(api.userList, formData);

    // if (response) {
        
    // }
}

function* watchUserList() {
    yield takeLatest(Actions.USER_LIST, userList);
}

export default function* submit() {
    yield all([fork(watchUserList)]);
}
