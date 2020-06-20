import React from 'react';
import PhoneInput from 'react-native-phone-input';

import Theme from '../../../utils/theme';
import LogoImg from '../../../assets/images/logo.png';
import FBImg from '../../../assets/images/facebook-square.png';
import GoogleImg from '../../../assets/images/google.png';

import {
  LoginContainer,
  LoginContent,
  ButtonContainer,
  Logo,
  LogoContainer,
  Title,
  Greetings,
  Instructions,
  NumberInput,
  SigninText,
  FBLogo,
  FBText,
  FacebookBtn,
  GoogleBtn,
  GoogleLogo,
  GoogleText,
  GoogleTextContainer,
  PhoneContainer,
  GoBtn,
  GoBtnText,
  NumberContainer,
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
          <PhoneContainer>
            <NumberContainer>
              <PhoneInput
                initialCountry="ng"
                ref={props.phone}
                autoFormat={true}
                onSelectCountry={text => props.getCode(text)}
              />
              <NumberInput
                placeholder="080 123 4567"
                keyboardType="number-pad"
                defaultValue={props.number}
                onChangeText={number =>
                  props.setNumber(number.replace(/[^0-9]/g, ''))
                }
              />
            </NumberContainer>
            <GoBtn>
              <GoBtnText>GO</GoBtnText>
            </GoBtn>
          </PhoneContainer>
          <SigninText>or you can sign in with</SigninText>
        </LoginContent>
        <ButtonContainer>
          <FacebookBtn>
            <FBLogo source={FBImg} />
            <FBText>Facebook</FBText>
          </FacebookBtn>
          <GoogleBtn>
            <GoogleLogo source={GoogleImg} />
            <GoogleTextContainer>
              <GoogleText>Google</GoogleText>
            </GoogleTextContainer>
          </GoogleBtn>
        </ButtonContainer>
      </LoginContainer>
    </Theme>
  );
};

export default login;
