/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import Colors from '../Colors';

export const MainContainer = styled.SafeAreaView`
    background-color: ${Colors.Azul_Escuro};
    height: 100%;
`;
export const ChangeNumberContainer = styled.View`
    margin: auto;
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

export const SubmitButton = styled.TouchableOpacity`
    background-color: ${Colors.Azul_Claro};
    border-radius: 10px;
    border: 2px solid white;
    height: 50px;
    width: 100px;
    margin: auto;
    
`;

export const SubmitButtonText = styled.Text`
    margin: auto;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
`;
