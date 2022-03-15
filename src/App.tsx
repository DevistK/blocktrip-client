import React from 'react';
import Test from './test';
import styled from 'styled-components';
import default_logo from './assets/common_logo.png';
import KakaoButton from './components/kakao/login';

const StyledDiv = styled.div`
    background-color: #07cdf0;
    margin: 0;
    padding: 0;
    max-width: 600px;
    height: 100vh;
    margin: 0 auto;
`;

const StyleMainH1 = styled.h1`
    text-align: center;
`;

const StyleMainButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid red;
`;
const StyleMainButton = styled.button``;

const App = () => (
    <>
        <StyledDiv>
            <StyleMainH1>
                <img src={default_logo} />
            </StyleMainH1>
            <StyleMainButtonWrap>
                <KakaoButton />
                <button>Sign in with Google</button>
            </StyleMainButtonWrap>
        </StyledDiv>
    </>
);

export default App;

// 네이버 패스 => 추후에 다시 알아보기로
// 1. 카카오 2. 구글
