/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";

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

import Conn from '../../Api/conection';

import Axios from 'axios';

const StartScreen = ({navigation}: any) =>  {
    const [email, setEmail] = useState<string>("yuri1234@gmail.com");
    const [password, setPassword] = useState<string>("yuri1234");
    const [username, setUsername] = useState<string>("");

    const [newPassword, setNewPassword] = useState<string>("");

    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [resetPassword, setResetPassword] = useState<boolean>(false);

    
    const SingUp = async () => {
        if(email == "" || password == "" || username == "") {
            alert("Credenciais");
            return;
        }

        //

        await Conn.SingUpUser({
            username: username,
            useremails: email,
            userpassword: password
        })
    }

    const CheckLogin = async () => {

        if(email == "" || password == "") {
            alert("Credenciais");
            return;
        }

        const user = await Conn.LoginUser({
            useremails: email.toLowerCase(),
            userpassword: password
        });

        console.log("kjahsk")

        if (user.statusCode == 404) return;

        navigation.reset({
            routes: [{
                name: 'SetTimer',
                params: {
                    userID: user.user_id,
                    username: user.username,
                    email: user.useremails,
                    timers: user.timers
                }
            }],
        });
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
                            SingUp();
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
                            isLogin?"Não possui conta? ":"Já possui conta?"
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
