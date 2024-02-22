import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Provider allows access to the Redux store from any component within the application, ensuring that the store is available without needing to pass it manually through props.
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
// React-Toastify allows you to add notifications
import 'react-toastify/dist/ReactToastify.css';
// Redux Persist is a library that helps to save and restore the Redux store's state even when the application is closed or refreshed
import { PersistGate } from 'redux-persist/integration/react'
import { app } from './firebase.config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} app={app}>
        <PersistGate loading={"loading"} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
);
