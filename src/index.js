import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import App from './App';
import { Provider } from './context/context';
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="85225ca5-876d-4ba5-be03-903f49bdd626" language="en-US">
    <Provider>
        <App/>
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
    );