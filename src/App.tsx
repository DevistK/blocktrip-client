import React from 'react';
import Test from './test';
import styled from 'styled-components';
import { StyledIntroDiv, StyleIntroH1, StyleMainButtonWrap } from './styles/intro-styles';
import default_logo from './assets/common_logo.png';
import KakaoButton from './components/kakao/login';
import GoogleButton from './components/google/login';
import LocalStartButton from './components/local/login';

const App = () => (
    <>
        <StyledIntroDiv className="container" useIntro="use">
            <StyleIntroH1>
                <img src={default_logo} />
            </StyleIntroH1>
            <StyleMainButtonWrap>
                <KakaoButton />
                <GoogleButton />
                <LocalStartButton />
            </StyleMainButtonWrap>
        </StyledIntroDiv>
    </>
);

export default App;
