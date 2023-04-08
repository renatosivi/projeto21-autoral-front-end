import styled from 'styled-components';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpeg';
import image6 from '../assets/images/6.jpg';
import Logo from '../components/Logo';
import { useState } from 'react';

export default function WelcomeScreen() {
  const [position, setPosition] = useState(0);

  function translate() {
    if (position !== 5) setPosition(position + 1);
  }

  return (
    <>
      <WelcomeStyles position={position}>
        <ul>
          <li>
            <img src={image1}/>
          </li>
          <li>
            <img src={image2}/>
          </li>
          <li>
            <img src={image3}/>
          </li>
          <li>
            <img src={image4}/>
          </li>
          <li>
            <img src={image5}/>
          </li>
          <li>
            <img src={image6}/>
          </li>
        </ul>
        <ul>
          <li>
            <p>All your favourite MARVEL Movies & Series at one place</p>
          </li>
          <li>
            <p>Watch Online or Download Offline</p>
          </li>
          <li>
            <p>Create profiles for diffrent members & get personalised recommendations</p>
          </li>
          <li>
            <p>Plans according to your needs at affordable prices</p>
          </li>
          <li>
            <p>Let’s get started!!!</p>
          </li>
          <li>
            <p>All your favourite MARVEL Movies & Series at one place</p>
          </li>
        </ul>
        <Logo/>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <footer onClick={translate}>Continue</footer>
      </WelcomeStyles>
    </>
  );
}

const WelcomeStyles = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  ul:nth-of-type(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 500vw;
    height: 100vh;
    display: flex;
    flex-shrink: 0;
    transition: transform 1s;
    transform: translateX(${({position}) => (-100 * position).toString() + 'vw'});

    li {
      position: relative;
      width: 100vw;
      height: 100%;
      flex-shrink: 0;

      ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1) 75%);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  ul:nth-of-type(2) {
    position: absolute;
    top: 0;
    left: 0;
    width: 500vw;
    height: 100vh;
    display: flex;
    flex-shrink: 0;
    transition: transform 1s ease-in;
    transform: translateX(${({position}) => (-100 * position).toString() + 'vw'});

    li {
      position: relative;
      width: 100vw;
      height: 100%;
      flex-shrink: 0;

      p {
        position: absolute;
        top: calc(100vh * 483/800);
        left: calc(50% - 125px);
        width: 250px;
        text-align: center;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
      }
    }
  }

  svg {
    position: fixed;
    top: calc(100vh * 267/800);
    left: calc(50% - 100px);
    width: 200px;
    background-color: #ED1B24;
  }

  & > div {
    position: fixed;
    top: calc(100vh * 421/800);
    left: calc(50% - 55px);
    width: 110px;
    display: flex;
    justify-content: space-between;

    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #FFFFFF;
    }

    div:nth-of-type(${({position}) => position + 1}) {
      background-color: #ED1B24;
      transition: background-color 1s;
    }
  }

  footer {
    position: fixed;
    top: calc(100vh * 670/800);
    left: calc(50% - 150px);
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ED1B24;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18.3821px;
    line-height: 22px;
    color: #FFFFFF;
  }
`;