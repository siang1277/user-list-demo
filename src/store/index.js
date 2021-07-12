import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import sagas from '../sagas';

let store;
let middlewares;
const sagaMiddleware = createSagaMiddleware();

const config = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['USER'],
};

const reducer = persistCombineReducers(config, reducers);

/* global __DEV__ */
if (__DEV__) {
    const excludedActions = [];
    const logger = createLogger({
        collapsed: true,
        predicate: (getState, action) => excludedActions.indexOf(action.type) < 0,
    });
    middlewares = applyMiddleware(sagaMiddleware, logger);
} else {
    middlewares = applyMiddleware(sagaMiddleware);
}

export const getStore = () => store;

const configureStore = () => {
    store = createStore(reducer, middlewares);
    sagaMiddleware.run(sagas);
    const persistor = persistStore(store);
    return { persistor, store };
};

export default configureStore;
