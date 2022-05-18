import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import LoginDetail from "./components/local/loginDetail";
import Form from "./components/local/registerForm";
import { GlobalStyle } from "./styles/global-styles";
import { RecoilRoot } from "recoil";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <>
    <GlobalStyle />
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/loginDetail" element={<LoginDetail />}></Route>
          <Route path="/register" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </>,
  rootElement
);
