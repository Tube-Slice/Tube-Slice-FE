import styled from 'styled-components';

import { PiXBold } from 'react-icons/pi';

const styles = {
  Modal: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 12px;
    background-color: #ffffff;
    z-index: 1000;
  `,
  ExitButton: styled(PiXBold)`
    cursor: pointer;
    position: fixed;
    top: 5px;
    right: 5px;
  `,
  TubeSlice: styled.div`
    height: 15%;
    display: flex;
    align-items: center;
    font-family: 'SF_HambakSnow';
    font-size: 32px;
    font-weight: 800;
    color: #0075ff;
  `,
  Description: styled.div`
    font-size: 18px;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  ButtonWrapper: styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  `,
  SocialLoginButton: styled.img`
    cursor: pointer;
  `,
};

export default styles;
