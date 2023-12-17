/* eslint-disable prettier/prettier */
import React, { useState } from "react";

import {
    MainContainer,
    Header,
    Title,
    PrincipalContainer,
    ModalForm,
    TitleForm,
    InputElementContainer,
    InputElement,
    ButtonSubmit,
    ButtonSubmitText,
    IsLoginLabel,
    SwitchIsLoginButton,
    ResetPasswordButton,
    ResetPasswordButtonText
} from './style';

import { 
    PromptMainContainer,
    PromptContainer,
    CloseButton,
    CloseButtonImage,
    PromptFormContainer,
    PromptFormInputName,
    PromptFormMenssage,
    PromptButtonsContainer,
    SubmitButton,
    SubmitButtonText
} from '../Components/Form/style';


const StartScreen = ({navigation}: any) =>  {

    const [email, setEmail] = useState<string>("yuri1234@gmail.com");
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("Yuri");

    const [newPassword, setNewPassword] = useState<string>("");

    const iconUser = '../../Assets/userIcon.png';

    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [resetPassword, setResetPassword] = useState<boolean>(false);

    const CheckLogin = () => {
        if(true) {
            navigation.reset({
                routes: [{
                    name: 'SetTimer',
                    params: {
                        username: username,
                        email: email,
                        iconUser: iconUser
                    }
                }],
            });
        }
    }

    const ResetPassword = () => {
        /**
         * Enviar nova senha para a API
        */
    }

    return (
        <MainContainer>
            <Header>
                <Title>
                    PomoApp
                </Title>
            </Header>
            <PrincipalContainer>
                <ModalForm>
                    <TitleForm> 
                        {isLogin?"Login":"Cadastre-se"}
                    </TitleForm>
                    <InputElementContainer>
                        {!isLogin &&
                            <InputElement 
                                placeholder="Usuario" 
                                onChangeText={usernametxt => setUsername(usernametxt)}
                            />
                        }
                        <InputElement
                            placeholder="Email"
                            onChangeText={emailtxt => setEmail(emailtxt)}
                        />
                        <InputElement
                            placeholder="Senha"
                            onChangeText={passwordltxt => setPassword(passwordltxt)}
                        />
                    </InputElementContainer>
                    <ButtonSubmit onPress={() => {
                        if(isLogin) {
                            CheckLogin();
                        } else {
                            
                            setEmail("");
                            setPassword("");
                            setIsLogin(true);
                            alert("Conta criada com sucesso")
                            
                        }
                    }}>
                        <ButtonSubmitText>
                            {isLogin?"Entrar":"Criar conta"}
                        </ButtonSubmitText>
                    </ButtonSubmit>
                    {isLogin &&
                        <ResetPasswordButton onPress={() => setResetPassword(true) }>
                            <ResetPasswordButtonText>
                                Redefinir senha
                            </ResetPasswordButtonText>
                        </ResetPasswordButton>
                    }
                    <SwitchIsLoginButton onPress={() => setIsLogin(!isLogin)}>
                        <IsLoginLabel>
                        {
                            isLogin?"Já possui conta? ":"Não possui conta? "
                        }
                        Clique aqui!
                        </IsLoginLabel>
                    </SwitchIsLoginButton>
                </ModalForm>
            </PrincipalContainer>
            {resetPassword &&
                <PromptMainContainer>
                    <PromptContainer>
                        <PromptButtonsContainer>
                            <CloseButton onPress={() => setResetPassword(false)} >
                                <CloseButtonImage source={require('../../Assets/close-line.png')}/>
                            </CloseButton>
                            <SubmitButton onPress={() => {

                            }}>
                                <SubmitButtonText>
                                    Redefinir
                                </SubmitButtonText>
                            </SubmitButton>
                        </PromptButtonsContainer>
                        <PromptFormContainer>
                            <PromptFormMenssage>
                                Seu E-mail:
                            </PromptFormMenssage>
                            <PromptFormInputName onChangeText={value => setEmail(value)} />
                            <PromptFormMenssage>
                                Nova senha:
                            </PromptFormMenssage>
                            <PromptFormInputName onChangeText={value => setNewPassword(value)}/>
                        </PromptFormContainer>
                    </PromptContainer>
                </PromptMainContainer>
            }
        </MainContainer>
    );
    
}

export default StartScreen;
