/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import Colors from '../Colors';

export const MainContainer = styled.SafeAreaView`
    background-color: ${Colors.Azul_Escuro};
    height: 100%;
`;

export const Header = styled.View`
  background-color: ${Colors.Azul_Claro};
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 80px;
  border: 2px solid white;
  border-top: none;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #FFFFFF;
    margin: auto;
`;

export const PrincipalContainer = styled.View`
  display: flex;
  align-items: center;
  height: 80%;
  margin-top: 80px;
`;

export const ModalForm = styled.View`
  background-color: ${Colors.Azul_Claro};
  border-radius: 20px;
  min-height: 450px;
  width: 350px;
  border: 2px solid white;
  display: flex;
  align-items: center;
`;

export const TitleForm = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #FFFFFF;
    margin: 40px;
`;

export const InputElementContainer = styled.View`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputElement = styled.TextInput`
  width: 250px;
  height: 40px;
  background-color: white;
  border-radius: 15px;
  margin-bottom: 20px;
  padding-left: 10px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: ${Colors.Azul_Claro};
    border-radius: 10px;
    border: 2px solid white;
    height: 50px;
    min-width: 100px;
    padding: 0px 10px;
    margin-top: 10px;
`;

export const ButtonSubmitText = styled.Text`
    margin: auto;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
`;

export const IsLoginLabel = styled.Text`
  font-size: 20px;
  color: #FFFFFF;
`;

export const SwitchIsLoginButton = styled.TouchableOpacity`
  margin: 10px;
`;

export const ResetPasswordButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const ResetPasswordButtonText = styled.Text`
  font-size: 20px;
  color: #FFFFFF;
  font-weight: bold;
`;