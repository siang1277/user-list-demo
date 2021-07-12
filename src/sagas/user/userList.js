import { takeLatest, call, all, fork, put, } from 'redux-saga/effects';
import Actions from '../../actions';
import * as api from '../../api';
import { showError, showServerError } from '../../utils/AlertUtils';

function* userList() {
    const { response, error } = yield call(api.userList);

    if (response) {
        yield put(Actions.userListSuccess(response.data));
        return;
    } else if(error) {
        showError(response.data.message)
    } else {
        showServerError();
    }
    yield put(Actions.userListFail());
}

function* watchUserList() {
    yield takeLatest(Actions.USER_LIST, userList);
}

export default function* submit() {
    yield all([fork(watchUserList)]);
}
