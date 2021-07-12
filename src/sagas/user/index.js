import { all, fork } from 'redux-saga/effects';
import userList from './userList';

export default function* home() {
    yield all([
        fork(userList),
    ]);
}
