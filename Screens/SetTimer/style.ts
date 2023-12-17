/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import Colors from '../Colors';

export const MainContainer = styled.SafeAreaView`
    background-color: ${Colors.Azul_Escuro};
    margin-top: 20px;
    height: 100%;
`;
export const ChangeNumberContainer = styled.View`
    margin: auto;
`;

export const Header = styled.TouchableOpacity`
  background-color: ${Colors.Azul_Claro};
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 80px;
  border: 2px solid white;
  border-top: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  position: relative;
`;

export const IconUser = styled.Image`
    width: 50px;
    height: 50px;
    background-color: #FFFFFF;
    border-radius: 25px;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #FFFFFF;
    margin: auto;

`;

export const Container = styled.View`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    margin-bottom: 100px;
`;

export const SubmitButton = styled.TouchableOpacity`
    background-color: ${Colors.Azul_Claro};
    border-radius: 10px;
    border: 2px solid white;
    height: 50px;
    width: 100px;
`;

export const SubmitButtonText = styled.Text`
    margin: auto;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
`;

export const SavePressetButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 10px;
`;

export const SavePressetImage = styled.Image`
    width: 50px;
    height: 50px;
`;
