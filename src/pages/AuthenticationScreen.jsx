import styled from "styled-components";
import Logo from "../components/Logo";
import { useState } from "react";
import googleIcon from "../assets/images/icons8-google.svg";
import facebookIcon from "../assets/images/icons8-facebook.svg";
import { useNavigate, useParams } from "react-router-dom";

export default function AuthenticationScreen() {
  const [passwordInvisibility, setPasswordInvisibilty] = useState(true);
  const [hasContent, setHasContent]= useState(false);
  const {type} = useParams();
  const hasAccount = {login: true, signup: false}[type];
  const navigate = useNavigate();

  function submitData(e) {
    e.preventDefault();
    console.log(e);
  }

  function verifyContent(e) {
    const email = e.target.form[0].value;
    const password = e.target.form[1].value;

    const hasContentDeterminer = (email !== '' && password !== '');
    
    setHasContent(hasContentDeterminer);
  }

  function toggleAuthenticationType() {
    navigate(hasAccount ? '/authentication/signup' : '/authentication/login');
  }

  return (
    <AuthenticationStyles>
      <div>
        <Logo/>
        <FormStyles onSubmit={submitData} onChange={verifyContent} hasContent={hasContent}>
          <input type='email' placeholder='Enter your e-mail' pattern='^[\w_+.-]+@[\w]+([.]{1}[\w]+)+$' required/>
          <input type={passwordInvisibility ? 'password' : 'text'} placeholder='Password' required/>
          <input type='submit' value={hasAccount ? 'Login' : 'Signup'}/>
          <span onClick={() => setPasswordInvisibilty(!passwordInvisibility)}>{passwordInvisibility ? 'Show' : 'Hide'}</span>
        </FormStyles>
        {hasAccount ? <ForgotPasswordSpan onClick={() => navigate('/change/password')}>Forgot password?</ForgotPasswordSpan> : []}
        <ContinueWithSpan>or continue with</ContinueWithSpan>
        <section>
          <div>
            <img src={facebookIcon}/>
            <span>Facebook</span>
          </div>
          <div>
            <img src={googleIcon}/>
            <span>Google</span>
          </div>
        </section>
        {hasAccount ? (
          <section>
          <span>Don’t have an account? </span>
          <span onClick={() => toggleAuthenticationType()}>Signup</span>
        </section>
        ) : (
          <section>
          <span>Already have an account? </span>
          <span onClick={() => toggleAuthenticationType()}>Login</span>
        </section>
        )}
      </div>
    </AuthenticationStyles>
  );
}

const AuthenticationStyles = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #000000;

  & > div {
    display: flex;
    flex-direction: column;

    svg {
      margin-top: 68px;
      margin-bottom: 45.81px;
      margin-left: auto;
      margin-right: auto;
      width: 200px;
      background-color: #ED1B24;
    }

    & > span:nth-of-type(2) {
      margin-bottom: 24px;
      margin-left: auto;
      margin-right: auto;
      width: fit-content;
      font-family: 'Inter';
      font-weight: 800;
      font-size: 15px;
      line-height: 18px;
      color: rgba(255, 255, 255, 0.7);
    }

    section:nth-of-type(1) {
      margin-bottom: 40px;
      display: flex;
      justify-content: center;
      column-gap: 13px;

      div {
        width: 120px;
        height: 50px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 4px;
        background-color: #FFFFFF;
        cursor: pointer;
        transition: box-shadow 0.5s;

        :hover {
          box-shadow: 0px 0px 4px 1px #FFFFFF;
        }

        img {
          width: 40px;
          height: 40px;
        }

        span {
          font-family: 'Inter';
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          text-align: center;
          color: #000000;
        }
      }
    }

    section:nth-of-type(2) {
      text-align: center;

      span:nth-of-type(1) {
        font-family: 'Inter';
        font-weight: 800;
        font-size: 14px;
        line-height: 17px;
        color: rgba(255, 255, 255, 0.5);
      }

      span:nth-of-type(2) {
        font-family: 'Inter';
        font-weight: 800;
        font-size: 14px;
        line-height: 17px;
        color: #ED1B24;
        cursor: pointer;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const FormStyles = styled.form`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  position: relative;
  
  input {
    width: 300px;
    height: 50px;
    padding-left: 12px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18.3821px;
    line-height: 22px;
    color: #000000;

    :nth-of-type(1) {
      margin-bottom: 12px;
    }

    :nth-of-type(2) {
      margin-bottom: 24px;
    }

    ::placeholder {
      font-family: 'Inter';
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: rgba(0, 0, 0, 0.5);
    }

    :nth-of-type(3) {
      border: 2px solid #ED1B24;
      background-color: ${({hasContent}) => hasContent ? '#ED1B24' : 'transparent'};
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 18.3821px;
      line-height: 22px;
      color: #FFFFFF;
      transition: background-color 1s;
      cursor: pointer;
    }
  }

  span {
    position: absolute;
    top: 79px;
    left: 259px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;

const ForgotPasswordSpan = styled.span`
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: 0;
  width: fit-content;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 15px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

const ContinueWithSpan = styled.span`
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  font-family: 'Inter';
  font-weight: 800;
  font-size: 15px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.7);
`