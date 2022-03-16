import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import LoginDetail from './components/local/loginDetail';
import { GlobalStyle } from './styles/global-styles';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/loginDetail" element={<LoginDetail />}></Route>
            </Routes>
        </BrowserRouter>
    </>,
    rootElement
);
