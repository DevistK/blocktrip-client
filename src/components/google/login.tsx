import styled from 'styled-components';
import google_btn from '../../assets/google_login_button.png';

const StyledGoggleWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 12px;
`;

const GoogleButton = () => {
    return (
        <StyledGoggleWrap>
            <a id="custom-login-btn" onClick={() => {}}>
                <img src={google_btn} alt="구글 로그인 버튼" />
            </a>
        </StyledGoggleWrap>
    );
};

export default GoogleButton;
