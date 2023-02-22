/* eslint-disable prettier/prettier */
import Colors from '../../Colors';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: auto;
  color: white;
  margin-top: 5px;
`;

export const Container = styled.View`
  height: 170px;
  width: 150px;
  display: flex;
  position: relative;
  
`;

export const ButtonContainer = styled.View`
  height: 130px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const Button = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  background-color: ${Colors.Azul_Claro};
  border-radius: 100px;
  border: 2px solid white;
`;

export const ButtonLabel = styled.Text`
  margin: auto;
  margin-top: -12px;
  font-size: 50px;
  color: white;
`;

export const NumberContainer = styled.View`
  height: 130px;
  width: 100px;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: ${Colors.Azul_Claro};
  border-radius: 20px;
  border: 5px solid white;
`;

export const NumberLabel = styled.Text`
  font-size: 50px;
  color: white;
  font-weight: bold;
  margin: auto;
`;