import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createContext } from 'react';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{ 
        user: new UserStore(),
        devices: new DeviceStore()
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
