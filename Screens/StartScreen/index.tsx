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
} from './style';

import UsersDB from '../../Api/Users.json';
import AsyncStorage from '@react-native-async-storage/async-storage';


const StartScreen = ({navigation}: any) =>  {

    const [email, setEmail] = useState<string>("yuri1234@gmail.com");
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("Yuri");

    const iconUser = '../../Assets/userIcon.png';

    const [isLogin, setIsLogin] = useState<boolean>(false);

    const CheckLogin = () => {
        if(true) {
            async () => {
                await AsyncStorage.setItem("username", username);
            }
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
        </MainContainer>
    );
    
}

export default StartScreen;
