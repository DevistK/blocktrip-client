import styled from "styled-components";

interface useColor {
    useIntro: any;
}

export const StyledIntroDiv = styled.div<useColor>`
    background-color: ${(props) => props.useIntro == 'use' ? "#07cdf0" : "#fff"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyleIntroH1 = styled.h1`
    text-align: center;
`;

export const StyleMainButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top:183px;
`;