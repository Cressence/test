import styled from 'styled-components/native';
import Text from '../../widget/text';

export const TextView = styled(Text)`

`;

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
    paddingHorizontal: ${props => props.width * 0.1}px;;
    paddingTop: ${props => props.height * 0.1}px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    marginHorizontal: 3%;
    justifyContent: space-between;
    flexDirection: row;
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
    marginVertical: 15px;
    color: ${props => props.theme.colors.powderWhite};
`;

export const Instructions = styled(Text)`
    fontSize: 25px;
    marginVertical: 10px;
    color: ${props => props.theme.colors.powderWhite};
`;

export const CountryDropdown = styled.Picker`

`;

export const SigninText = styled(Text)`
    fontSize: 15px;
    alignSelf: center;
    bottom: 10px;
    position: absolute;
    color: ${props => props.theme.colors.powderWhite};
`;

export const FacebookBtn = styled.TouchableOpacity`
    borderRadius: 7px;
    borderWidth: 1px;
    borderColor: #2667C9;
    display: flex;
    flexDirection: row;
    paddingVertical: 10px;
    paddingHorizontal: 5px;
    justifyContent: space-between;
    width: 40%;
`;

export const FBLogo = styled.Image`
    marginRight: 15px;
`;

export const FBText = styled(Text)`
    fontSize: 15px
`;

export const GoogleBtn = styled.TouchableOpacity`
    borderRadius: 7px;
    borderWidth: 1px;
    borderColor: #2667C9;
    display: flex;
    flexDirection: row;
    paddingVertical: 10px;
    paddingHorizontal: 5px;
    justifyContent: space-between;
    width: 40%;
`;

export const GoogleLogo = styled.Image`
    marginRight: 15px;
`;

export const GoogleText = styled(Text)`
    fontSize: 15px
`;
