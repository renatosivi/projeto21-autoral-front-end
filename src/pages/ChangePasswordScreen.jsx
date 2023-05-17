import styled from "styled-components";
import Logo from "../components/Logo";
import { useState } from "react";

export default function ChangePasswordScreen() {
  const [email, setEmail] = useState('');

  function verifyContent(e) {
    setEmail(e.target.value);
  }

  function sendEmailContent() {
    console.log(email);
  }

  return (
    <ChangePasswordStyles email={email}>
      <Logo/>
      <p>Instructions will be sent to your e-mail.</p>
      <input onChange={verifyContent} type="text" placeholder="Enter your e-mail"/>
      <button onClick={sendEmailContent}>Send</button>
    </ChangePasswordStyles>
  )
}

const ChangePasswordStyles = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;

  svg {
    margin-top: 150px;
    margin-bottom: 45.81px;
    width: 200px;
    background-color: #ED1B24;
  }

  p {
    margin-bottom: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 800;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.7);
  }

  input {
    margin-bottom: 12px;
    width: 300px;
    height: 50px;
    padding-left: 12px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18.3821px;
    line-height: 22px;
    color: #000000;

    ::placeholder {
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  button {
    width: 300px;
    height: 50px;
    border: 2px solid #ED1B24;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18.3821px;
    line-height: 22px;
    background: ${({email}) => email !== '' ? '#ED1B24' : 'transparent'};
    color: #FFFFFF;
    transition: box-shadow 0.5s;
  }
`