import styled from 'styled-components';
import { KAKAO_AUTH_URL } from '../../api/kakao/OAuth';
import kakao_btn from '../../assets/kakao_login_button.png';

const StyledKakaoWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const KakaoButton = () => {
    return (
        <StyledKakaoWrap>
            <a id="custom-login-btn" onClick={() => {}}>
                <img src={kakao_btn} alt="카카오 로그인 버튼" />
            </a>
        </StyledKakaoWrap>
    );
};

export default KakaoButton;
