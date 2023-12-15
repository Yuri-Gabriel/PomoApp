/* eslint-disable prettier/prettier */
import React, { useState } from "react";

import {
    MainContainer,
    ChangeNumberContainer,
    Header,
    Title,
    SubmitButton,
    SubmitButtonText,
    IconUser,
    SavePressetButton,
    SavePressetImage,
    Container,
    PromptMainContainer,
    PromptContainer,
    CloseButton,
    CloseButtonImage,
    PromptFormContainer,
    PromptFormInputName,
    PromptFormMenssage,
    PromptFormChanger,
    PromptFormChangerContainer,
    PromptButtonsContainer
} from './style';

import ChangeNumber from "../Components/ChangeNumber";

import {
    SetTimerProps,
    SetTimerState
} from '../types';

class SetTimer extends React.Component<SetTimerProps, SetTimerState> {

    private username: string;
    private email: string;
    private iconUser: string;
    private img: any;

    constructor(props: SetTimerProps) {
        super(props);

        this.username = "Yuri" //this.props.route.params.username;
        this.email = "yuri1234@gmail.com" //this.props.route.params.email;
        this.iconUser = "" //this.props.route.params.iconUser;

        this.state = {
            workTime: 25,
            numberOfSessions: 5,
            pauseTime: 3,
            promptShow: false,
            pressetName: ""
        }
        
    }

    setWorkTime(value: number) {
        if(value > 0 && value < 100) {
            this.setState({ workTime: value });
        }
        
    }

    setNumberOfSessions(value: number) {
        if(value > 0 && value < 100) {
            this.setState({ numberOfSessions: value });
        }
    }

    setPauseTime(value: number) {
        if(value > 0 && value < 100) {
            this.setState({ pauseTime: value });
        }
    }

    render() {
        return (
            <MainContainer>
                <Header onPress={() => {
                    this.props.navigation.navigate("Profile", {
                        username: this.username,
                        email: this.email,
                        iconUser: this.iconUser
                    });
                }}>
                <IconUser source={require('../../Assets/userIcon.png')}/>
                <Title>
                    {this.username}
                </Title>
            </Header>
            <ChangeNumberContainer>
                <ChangeNumber
                    title="Trabalho"
                    value={this.state.workTime}
                    setValue={(value: number) => this.setWorkTime(value)}
                />
                <ChangeNumber
                    title="Sessões"
                    value={this.state.numberOfSessions}
                    setValue={(value: number) => this.setNumberOfSessions(value)}
                />
                <ChangeNumber
                    title="Pausas"
                    value={this.state.pauseTime}
                    setValue={(value: number) => this.setPauseTime(value)}
                />
            </ChangeNumberContainer>
            <Container>
                <SubmitButton
                    onPress={() => {
                        this.props.navigation.navigate("Contador", {
                            WorkTime: this.state.workTime,
                            NumberOfSessions: this.state.numberOfSessions,
                            PauseTime: this.state.pauseTime
                        })
                    }}
                >
                    <SubmitButtonText>
                        Começar
                    </SubmitButtonText>
                </SubmitButton>
                <SavePressetButton onPress={() => this.setState({ promptShow: true })} >
                    <SavePressetImage source={require("../../Assets/saveIcon.png")}/>
                </SavePressetButton>
            </Container>
            {
                this.state.promptShow &&
                <PromptMainContainer>
                    <PromptContainer>
                        <PromptButtonsContainer>
                            <CloseButton onPress={() => { this.setState({ promptShow: false })}}>
                                <CloseButtonImage source={require("../../Assets/close-line.png")} />
                            </CloseButton>
                            <SubmitButton onPress={() => {}}>
                                <SubmitButtonText>
                                    Salvar
                                </SubmitButtonText>
                            </SubmitButton>
                        </PromptButtonsContainer>
                        <PromptFormContainer>
                            <PromptFormMenssage>
                                Escolha um nome:
                            </PromptFormMenssage>
                            <PromptFormInputName onChangeText={text => {
                                this.setState({ pressetName: text })
                            }}/>
                            <PromptFormMenssage>
                                Escolha os tempos:
                            </PromptFormMenssage>
                            <PromptFormChangerContainer>
                                <PromptFormChanger
                                    value={`${this.state.workTime}`}
                                    onChangeText={value => this.setWorkTime(parseInt(value))}
                                    keyboardType="numeric"
                                />
                                <PromptFormChanger
                                    value={`${this.state.numberOfSessions}`}
                                    onChangeText={value => this.setNumberOfSessions(parseInt(value))}
                                    keyboardType="numeric"
                                />
                                <PromptFormChanger
                                    value={`${this.state.pauseTime}`}
                                    onChangeText={value => this.setPauseTime(parseInt(value))}
                                    keyboardType="numeric"
                                />
                            </PromptFormChangerContainer>
                        </PromptFormContainer>
                    </PromptContainer>
                </PromptMainContainer>
            
            }
        </MainContainer>
        );
    }
}

/*
const SetTimer = ({navigation}: any) => {

    const [ workTime, setWorkTime ] = useState<number>(25);
    const [ numberOfSessions, setNumberOfSessions ] = useState<number>(5);
    const [ pauseTime, setPauseTime ] = useState<number>(3);
    const [username, setUsername] = useState<string>("");

    async () => {
        const name: any = await AsyncStorage.getItem("username");
        setUsername(name);
    }

    alert(username);
    
    return (
        <MainContainer>
            <Header onPress={() => {
                navigation.navigate("Profile");
            }}>
                <IconUser source={require('../../Assets/userIcon.png')}/>
                <Title>
                    {"username"}
                </Title>
            </Header>
            <ChangeNumberContainer>
                <ChangeNumber
                    title="Trabalho"
                    value={workTime}
                    setValue={setWorkTime}
                />
                <ChangeNumber
                    title="Sessões"
                    value={numberOfSessions}
                    setValue={setNumberOfSessions}
                />
                <ChangeNumber
                    title="Pausas"
                    value={pauseTime}
                    setValue={setPauseTime}
                />
            </ChangeNumberContainer>
            <SubmitButton
                onPress={() => {
                    navigation.navigate("Contador", {
                        WorkTime: workTime,
                        NumberOfSessions: numberOfSessions,
                        PauseTime: pauseTime
                    })
                }}
            >
                <SubmitButtonText>
                    Começar
                </SubmitButtonText>
            </SubmitButton>
        </MainContainer>
    );
}*/

export default SetTimer;
