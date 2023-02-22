/* eslint-disable prettier/prettier */
import React, { useState } from "react";

import {
    MainContainer,
    ChangeNumberContainer,
    Header,
    Title,
    SubmitButton,
    SubmitButtonText
} from './style';

import ChangeNumber from "../Components/ChangeNumber";

const Home = ({navigation}) => {

    const [ workTime, setWorkTime ] = useState(25);
    const [ numberOfSessions, setNumberOfSessions ] = useState(5);
    const [ pauseTime, setPauseTime ] = useState(3);
    
    return (
        <MainContainer>
            <Header>
                <Title>
                    PomoApp
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
                        workTime: workTime,
                        numberOfSessions: numberOfSessions,
                        pauseTime: pauseTime
                    })
                }}
            >
                <SubmitButtonText>
                    Começar
                </SubmitButtonText>
            </SubmitButton>
        </MainContainer>
    );
}

export default Home;
