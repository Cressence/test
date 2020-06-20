import styled from 'styled-components/native';
import Text from '../../widget/text';

export const Title = styled(Text)`
    fontSize: 40px;
    color: ${props => props.theme.colors.powderWhite};
`;

export const LoginContainer = styled.View`
    flex: 1;
    backgroundColor: #f9f9f9;
`;

export const LoginContent = styled.View`
    flex: 5;
    backgroundColor: #2667C9;
    paddingHorizontal: ${props => props.width * 0.1}px;
    paddingTop: ${props => props.height * 0.1}px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    marginHorizontal: 12%;
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    top: 20px;
`;

export const LogoContainer = styled.View`
    display: flex;
    flexDirection: row;
`;

export const Logo = styled.Image`
    marginRight: 15px;
`;

export const Greetings = styled(Text)`
    fontSize: 30px;
    fontWeight: 500;
    marginVertical: 20px;
    color: ${props => props.theme.colors.powderWhite};
`;

export const Instructions = styled(Text)`
    fontSize: 25px;
    marginVertical: 10px;
    color: ${props => props.theme.colors.powderWhite};
`;

export const SigninText = styled(Text)`
    fontSize: 15px;
    alignSelf: center;
    bottom: 10px;
    position: absolute;
    color: ${props => props.theme.colors.powderWhite};
`;

export const FacebookBtn = styled.TouchableOpacity`
    borderRadius: 10px;
    borderWidth: 1px;
    borderColor: #2667C9;
    display: flex;
    flexDirection: row;
    padding: 10px;
    justifyContent: space-between;
    width: 150px;
    height: 40px;
    bottom: 0;
`;

export const FBLogo = styled.Image`
    marginRight: 15px;
`;

export const FBText = styled(Text)`
    fontSize: 15px
`;

export const GoogleBtn = styled.TouchableOpacity`
    borderRadius: 10px;
    borderWidth: 1px;
    borderColor: #2667C9;
    paddingLeft: 10px;
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    width: 150px;
    height: 40px;
    alignItems: center;
`;

export const GoogleLogo = styled.Image`
    marginRight: 15px;
`;

export const GoogleText = styled(Text)`
    fontSize: 15px;
    color: ${props => props.theme.colors.powderWhite};
    textAlign: center;
`;

export const GoogleTextContainer = styled.View`
    height: 100%;
    width: 79%;
    justifyContent: center;
    margin: auto;
    borderRadius: 10px;
    backgroundColor: #2667C9;
`;

export const PhoneContainer =  styled.View`
    display: flex;
    flexDirection: row;
    top: 40px;
`;

export const GoBtn = styled.TouchableOpacity`
    borderRadius: 5px;
    borderWidth: 2px;
    borderColor: ${props => props.theme.colors.powderWhite};
    height: 50px;
    padding: 10px;
    
`;

export const GoBtnText = styled(Text)`
    fontSize: 20px;
    color: ${props => props.theme.colors.powderWhite};
    textAlign: center;
    fontWeight: 500;
`;

export const NumberContainer = styled.View`
    backgroundColor: #fff;
    marginRight: 10px;
    borderRadius: 5px;
    width: 80%;
    height: 50px;
    justifyContent: center;
    paddingHorizontal: 15px;
    display: flex;
    flexDirection: row;
`;

export const NumberInput = styled.TextInput`
   borderLeftWidth: 2px;
   borderLeftColor: #ccc;
   paddingLeft: 10px;
   width: 70%;
   fontSize: 14px
`;
