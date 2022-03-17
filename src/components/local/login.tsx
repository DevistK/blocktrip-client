import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLocalStartLoginWrap = styled.div`
    display: flex;
    justify-content: center;
    button {
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        margin-top: 29px;
        display: block;
    }
`;

const LocalStartButton = () => {
    return (
        <StyledLocalStartLoginWrap>
            <Link to="/loginDetail">
                <button id="local-btn">이메일로 시작하기 / 회원가입</button>
            </Link>
        </StyledLocalStartLoginWrap>
    );
};

export default LocalStartButton;
