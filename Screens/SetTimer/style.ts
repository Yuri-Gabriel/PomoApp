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

export const PromptMainContainer = styled.View`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PromptContainer = styled.View`
    width: 300px;
    height: 400px;
    background-color: ${Colors.Azul_Escuro};
    border-radius: 10px;
    padding: 20px;
`;

export const PromptButtonsContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
`;

export const CloseButtonImage = styled.Image`
    height: 50px;
    width: 50px;
`;

export const PromptFormContainer = styled.View`
    width: 100%;
    padding-top: 20px;
`;

export const PromptFormMenssage = styled.Text`
    font-size: 25px;
    color: #FFFFFF;
    font-weight: bold;
    
`;

export const PromptFormInputName = styled.TextInput`
    font-size: 15px;
    background-color: #FFFFFF;
    border-radius: 10px;
    height: 40px;
    padding-left: 10px;
    margin: 20px 0px;
`;

export const PromptFormChangerContainer = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    padding: 10px;
`;

export const PromptFormChanger = styled.TextInput`
    width: 40px;
    height: 40px;
    padding: 10px;
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-top: 10px;
    font-weight: bold;
    text-align: center;
`;
