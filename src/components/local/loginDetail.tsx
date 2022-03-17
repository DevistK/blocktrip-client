import styled from 'styled-components';
import { StyledIntroDiv, StyleIntroH1 } from '../../styles/intro-styles';
import default_logo from '../../assets/common_logo.png';
import { Link } from 'react-router-dom';

const LoginDetail = () => (
    <>
        <StyledIntroDiv className="container">
            <StyleIntroH1>
                <img src={default_logo} />
            </StyleIntroH1>
            <LoginFormDiv>
                <input type="text" name="email" placeholder="아이디( 이메일 )" />
                <input type="password" name="password" placeholder="비밀번호" />
            </LoginFormDiv>
            <LoginRequestButton>로그인</LoginRequestButton>
            <LoginGuideDiv>
                <p className="intro-guide-msg">처음 이신가요?</p>
                <Link to="/loginDetail">
                    <button id="register-btn">이메일로 가입하기</button>
                </Link>
                <Link to="/">
                    <button id="previous-btn">뒤로가기</button>
                </Link>
            </LoginGuideDiv>
        </StyledIntroDiv>
    </>
);

export default LoginDetail;

const LoginFormDiv = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 16px;
    input {
        width: 100%;
        background: #fff;
        padding: 10px 13px;
        font-size: 14px;
        font-weight: 500;
        &:nth-child(2) {
            border-top: 1px solid #ccc;
        }
        ::placeholder {
            color: #cecece;
        }
    }
`;

const LoginRequestButton = styled.button`
    border-radius: 10px;
    border: 1px solid #d2d2d2;
    text-align: center;
    background: #fff;
    padding: 13px 0;
    margin-top: 24px;
    width: 80%;
    font-size: 14px;
    font-weight: 700;
    color: #867d7d;
`;

const LoginGuideDiv = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 54px;
    p {
        font-size: 14px;
        color: #fff;
    }
    #register-btn {
        margin-top: 8px;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
    }
    #previous-btn {
        margin-top: 47px;
        font-size: 14px;
        color: #fff;
    }
`;
