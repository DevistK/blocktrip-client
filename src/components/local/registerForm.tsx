import styled from "styled-components";
import { StyledIntroDiv, StyleIntroH1 } from "../../styles/intro-styles";
import register_pointer from "../../assets/pointer.svg";
import { Link } from "react-router-dom";
import handleRegister from "../../service/local/register/handleRegister";
import { useState } from "react";
import { TypeRegister } from "../../service/@type/local/type.register";

const Form = () => {
  const [inputValue, setInputValue] = useState(TypeRegister);

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <StyledIntroDiv className="container" useIntro="">
      <StyleIntroH1>
        <StyleRegisterGuide>
          <p>
            처음 이신가요?
            <br />
            지금 이메일로 시작해보세요
          </p>
          <img
            src={register_pointer}
            alt="guide"
            className="register-pointer"
          />
        </StyleRegisterGuide>
      </StyleIntroH1>
      <StyleRegisterForm
        id="registerForm"
        onSubmit={(e) => handleRegister(e, inputValue)}
      >
        <div className="register-form">
          <input
            type="text"
            placeholder="이메일"
            name={"email"}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="닉네임"
            name={"nickname"}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="비밀번호"
            name={"password"}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="생년월일"
            name={"birth"}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="휴대폰 번호"
            name={"hp"}
            onChange={handleChange}
          />
        </div>
        <RegisterRequestButton>이메일로 시작하기</RegisterRequestButton>
        <Link to="/loginDetail">
          <button id="previous-btn" className="register-prev">
            뒤로가기
          </button>
        </Link>
      </StyleRegisterForm>
    </StyledIntroDiv>
  );
};

export default Form;

const StyleRegisterGuide = styled.div`
  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.6;
  }

  img {
    display: block;
    margin: 25px auto 52px;
  }
`;

const StyleRegisterForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .register-form {
    width: 100%;

    input {
      width: inherit;
      border-bottom: 1px solid #eaeaea;
      font-size: 14px;
      font-weight: 500;
      padding: 8px 0;
      transition: all 0.4s;

      &:not(&:first-child) {
        margin-top: 20px;
      }

      ::placeholder {
        font-size: 14px;
        color: #cecece;
      }

      :focus {
        border-bottom: 1px solid #000;
      }
    }
  }
  button.register-prev {
    color: #a0a0a0;
    font-size: 14px;
    font-weight: 500;
    padding-top: 28px;
  }
`;

const RegisterRequestButton = styled.button`
  border-radius: 10px;
  text-align: center;
  background: #07cdf0;
  padding: 13px 0;
  margin-top: 24px;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;
