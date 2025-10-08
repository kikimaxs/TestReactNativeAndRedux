import React from 'react'
import { Provider } from 'react-redux';
import { store } from './config/store'
import Root from './modules/index'

export default function App() {
    return (
        <Provider store={store}>
            <Root/>
        </Provider>
    );
}
