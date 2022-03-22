import styled from 'styled-components';
import { StyledIntroDiv, StyleIntroH1 } from '../../styles/intro-styles';
import default_logo from '../../assets/common_logo.png';
import { Link } from 'react-router-dom';

const RegisterForm = () => (
    <>
        <StyledIntroDiv className="container" useIntro="">
            <StyleIntroH1>
                처음 이신가요?
                <br />
                지금 이메일로 시작해보세요
            </StyleIntroH1>
        </StyledIntroDiv>
    </>
);

export default RegisterForm;
