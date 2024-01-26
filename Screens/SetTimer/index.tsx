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
    
} from './style';

import { 
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
} from '../Components/Form/style';

import ChangeNumber from "../Components/ChangeNumber";

import {
    SetTimerProps,
    SetTimerState
} from '../types';

import { Timer } from "../../Api/entitys";

import Conn from '../../Api/conection';

class SetTimer extends React.Component<SetTimerProps, SetTimerState> {

    private username: string;
    private email: string;
    private password: string;
    private userID: number;
    private timers: Timer[];

    constructor(props: SetTimerProps) {
        super(props);

        this.username = this.props.route.params.username;
        this.email = this.props.route.params.email;
        this.password = this.props.route.params.password;
        this.timers = this.props.route.params.timers;
        this.userID = this.props.route.params.userID,

        this.state = {
            workTime: this.props.route.params.workTime || 25,
            numberOfSessions: this.props.route.params.numberOfSessions || 5,
            pauseTime: this.props.route.params.pauseTime || 3,
            promptShow: false,
            pressetName: "",
            workTimePresset: "25",
            pauseTimePresset: "3",
            numberOfSessiosPresset: "5"
        }
    }

    setWorkTime(value: number) { 
        if(value > 0 && value < 100) {
            this.setState({ workTime: value });
            this.setState({ workTimePresset: `${value}` });
        }
        
    }

    setNumberOfSessions(value: number) {
        if(value > 0 && value < 100) {
            this.setState({ numberOfSessions: value });
            this.setState({ numberOfSessiosPresset: `${value}` });
        }
    }

    setPauseTime(value: number) {
        if(value > 0 && value < 100) {
            this.setState({ pauseTime: value });
            this.setState({ pauseTimePresset: `${value}` });
        }
    }
    
    async SavePresset() {
        if (this.state.numberOfSessiosPresset == "" ||
            this.state.pauseTimePresset == "" ||
            this.state.workTimePresset == "" ||
            this.state.pressetName == "") {
                alert("Erro");
                this.setState({ promptShow: false });
        }
        await Conn.createTimer({
            forpause: parseInt(this.state.pauseTimePresset),
            forwork: parseInt(this.state.workTimePresset),
            sessions: parseInt(this.state.numberOfSessiosPresset),
            timer_name: this.state.pressetName,
            user_id: this.userID
        });

        alert("Timer criado");
        /**
         * Pegar o nome do presset, tempo de trabalho, de descanço e n° de sessões 
         * Enviar para a API
        */
    }

    private CheckNumbersPresset(value: number): number {
        if (value >= 100) {
            value = 99;
        } else if (value <= 0) {
            value = 1;
        }
        return value;
    }

    render() {
        return (
            <MainContainer>
                <Header onPress={() => {
                        this.props.navigation.navigate("Profile", {
                            username: this.username,
                            email: this.email,
                            timers: this.timers,
                            userID: this.userID
                        });
                    }}>
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
                            <CloseButton onPress={() =>  this.setState({ promptShow: false })}>
                                <CloseButtonImage source={require("../../Assets/close-line.png")} />
                            </CloseButton>
                            <SubmitButton onPress={() => {
                                
                                this.SavePresset();
                                this.setState({
                                    promptShow: false
                                });
                            }}>
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
                                    value={`${this.state.workTimePresset}`}
                                    onChangeText={value => {
                                        if (value != "") {
                                            value = `${this.CheckNumbersPresset(parseInt(value))}`
                                        }
                                        this.setState({
                                            workTimePresset: value
                                        })
                                    }}
                                    keyboardType="numeric"
                                />
                                <PromptFormChanger
                                    value={`${this.state.numberOfSessiosPresset}`}
                                    onChangeText={value => {
                                        if (value != "") {
                                            value = `${this.CheckNumbersPresset(parseInt(value))}`
                                        }
                                        this.setState({
                                            numberOfSessiosPresset: value
                                        })
                                    }}
                                    keyboardType="numeric"
                                />
                                <PromptFormChanger
                                    value={`${this.state.pauseTimePresset}`}
                                    onChangeText={value => {
                                        if (value != "") {
                                            value = `${this.CheckNumbersPresset(parseInt(value))}`
                                        }
                                        this.setState({
                                            pauseTimePresset: value
                                        });
                                    }}
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
