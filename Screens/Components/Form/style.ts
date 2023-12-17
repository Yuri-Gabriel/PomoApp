import styled from 'styled-components/native';
import Colors from '../../Colors';

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
