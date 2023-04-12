import styled from "styled-components";
import Logo from "../components/Logo";

export default function AuthenticationScreen() {
  function submitData(e) {
    e.preventDefault();
  }

  return (
    <AuthenticationStyles>
      <Logo/>
      <FormStyles onSubmit={submitData}>
        <input type='text' placeholder='Enter your Email ID'/>
        <input type='text' placeholder='Password'/>
        <input type='submit' value='Signup'/>
      </FormStyles>
      <span></span>
      <span></span>
      <section>
        <div></div>
        <div></div>
      </section>
      <span></span>
    </AuthenticationStyles>
  );
}

const AuthenticationStyles = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;

  svg {
    margin-top: 68px;
    margin-bottom: 45.81px;
    width: 200px;
    background-color: #ED1B24;
  }
`;

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  
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
      background-color: transparent;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 18.3821px;
      line-height: 22px;
      color: #FFFFFF;
      transition: box-shadow 0.5s;
    }
  }
`;

