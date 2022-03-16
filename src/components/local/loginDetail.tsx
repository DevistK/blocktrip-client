import styled from 'styled-components';
import { StyledIntroDiv, StyleIntroH1 } from '../../styles/intro-styles';
import default_logo from '../../assets/common_logo.png';

const LoginDetail = () => (
    <>
        <StyledIntroDiv className="container">
            <StyleIntroH1>
                <img src={default_logo} />
            </StyleIntroH1>
        </StyledIntroDiv>
    </>
);

export default LoginDetail;
