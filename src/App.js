import React from 'react';
import {
    View,
    Text,
} from 'react-native';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import configureStore from 'store/configureStore';

import AppNavigator from './navigator/AppNavigator';

// const { persistor, store } = configureStore();

function App() {
    return (
      <AppNavigator />
        // <Provider store={store}>
        //     <PersistGate loading={null} persistor={persistor}>
        //         <AppNavigator />
        //     </PersistGate>
        // </Provider>
    );
}

export default App;