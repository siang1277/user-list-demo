import { all, fork } from 'redux-saga/effects';

import user from './user';

export default function* submit() {
    yield all([
        fork(user),
    ]);
}
