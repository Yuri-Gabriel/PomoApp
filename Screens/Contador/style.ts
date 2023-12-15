/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

import Colors from '../Colors';

export const MainContainer = styled.SafeAreaView`
  height: 100%;
  background-color: ${Colors.Azul_Escuro};
`;

export const TimerContainer = styled.View`
    display: flex;
    align-items: center;
    margin-top: 100px;
`;

export const TimerBackground = styled.View`
    height: 250px;
    width: 250px;
    border-radius: 250px;
    border: 15px solid ${Colors.Verde};
    background-color: ${Colors.Azul_Claro};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TimerText = styled.Text`
    font-size: 50px;
    font-weight: bold;
    color: white;
`;

export const BallIndicator = styled.View`
    width: 30px;
    height: 30px;
    margin: 0 5px;
    background-color: ${Colors.Azul_Claro};
    border-radius: 100px;
`;

export const BallIndicatorContainer = styled.View`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const PauseButtonContainer = styled.View`
    margin-top: 50px;
`;

export const PauseButton = styled.TouchableOpacity`
    width: 130px;
    height: 50px;
    margin: auto;
    background-color: ${Colors.Azul_Claro};
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PauseButtonImage = styled.Image`
    height: 40px;
    width: 40px;
`;

