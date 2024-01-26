import styled from 'styled-components/native';
import Colors from '../../Colors';

export const MainContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: #00000068;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
    height: 150px;
    width: 300px;
    background-color: ${Colors.Azul_Escuro};
`;

export const CloseIconButton = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
`;


export const CloseIcon = styled.Image`
    height: 50px;
    width: 50px;
`;

export const HeaderContainer = styled.View`
    height: 50px;
    width: 100%;
    align-items: flex-start;
`;

export const BodyContainer = styled.View`
    height: 100px;
    width: 100%;
    align-items: center;
`;

export const DeleteButton = styled.TouchableOpacity`
    background-color: ${Colors.Azul_Claro};
    border-radius: 10px;
    border: 2px solid white;
    height: 50px;
    width: 80px;
`;

export const DeleteButtonText = styled.Text`
    margin: auto;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
`;

export const Text = styled.Text`
    font-size: 17px;
    color: #FFFFFF;
    font-weight: bold;
    margin-bottom: 10px;
`;