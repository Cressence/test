import React from 'react';

import Theme from '../../../utils/theme';
import LogoImg from '../../../assets/images/logo.png';
import FBImg from '../../../assets/images/facebook-square.png';
import GoogleImg from '../../../assets/images/google.png';

import {
  TextView,
  LoginContainer,
  LoginContent,
  ButtonContainer,
  Logo,
  LogoContainer,
  Title,
  Greetings,
  Instructions,
  CountryDropdown,
  SigninText,
  FBLogo,
  FBText,
  FacebookBtn,
  GoogleBtn,
  GoogleLogo,
  GoogleText,
} from './styles';

const login = props => {
  return (
    <Theme>
      <LoginContainer>
        <LoginContent width={props.width} height={props.height}>
          <LogoContainer>
            <Logo source={LogoImg} />
            <Title>Pickmeup</Title>
          </LogoContainer>
          <Greetings>Hey there!</Greetings>
          <Instructions>Type in your phone number to get started</Instructions>
          <CountryDropdown />
          <SigninText>or you can sign in with</SigninText>
        </LoginContent>
        <ButtonContainer>
          <FacebookBtn>
            <FBLogo source={FBImg} />
            <FBText>Facebook</FBText>
          </FacebookBtn>
          <GoogleBtn>
            <GoogleLogo source={GoogleImg} />
            <GoogleText>Google</GoogleText>
          </GoogleBtn>
        </ButtonContainer>
      </LoginContainer>
    </Theme>
  );
};

export default login;
