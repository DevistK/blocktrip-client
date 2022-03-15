import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GlobalStyle } from './styles/global-styles';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    rootElement
);
