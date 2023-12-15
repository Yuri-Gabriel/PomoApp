import styled from 'styled-components/native';

import Color from '../Colors';

export const Container = styled.View`
  background-color: ${Color.Azul_Escuro};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconUser = styled.Image`
  background-color: #FFFFFF;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin: 10px 0px;
`;

export const UserTextInfo = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px;
`;

export const ExitAccountButton = styled.TouchableOpacity`
  margin: 10px 0px;
`;

export const ExitAccountButtonText = styled.Text`
  color: #FF0000;
  font-size: 20px;
  font-weight: bold;
`;

export const SlideBarContainer = styled.View`
  width: 250px;
  height: 300px;
  background-color: ${Color.Azul_Claro};
  border-radius: 10px;
  border: 2px solid #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideBar = styled.ScrollView`
  width: 247px;
`;

export const PreDefinitionButton = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  background-color: ${Color.Azul_Escuro};
  margin: 5px auto;
  border-radius: 10px;
`;

export const PreDefinitionButtonText = styled.Text`
  font-size: 15px;
  color: #FFFFFF;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
`;