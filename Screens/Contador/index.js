/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";

import Colors from '../Colors';

import {
    Image,
    Vibration
} from 'react-native';

import {
    BallIndicator,
    BallIndicatorContainer,
    MainContainer,
    PauseButton,
    PauseButtonContainer,
    TimerContainer,
    TimerBackground,
    TimerText
} from './style';

class Contador extends React.Component {

    constructor(props) {
        super(props);
        
        this.workTime = this.props.workTime || 25;
        this.numberOfSessions = this.props.numberOfSessions || 5;
        this.pauseTime = this.props.pauseTime || 3;

        this.sessionsCompleted = 0;

        this.state = {
            BallIndicatorList: this.ManageBallIndicators(),
            imageButton: require('../../Assets/Pause.png'),
            TimerPaused: false,
            minutesLeft: this.workTime,
            secondsLeft: 59,
            pauseTime: false
        }
    }

    ManageBallIndicators(color = Colors.Azul_Claro) {
        const list = [];
        for (let i = 0; i < this.numberOfSessions; ++i) {
            if (i < this.sessionsCompleted) {
                list.push(
                    <BallIndicator
                        style={{
                            backgroundColor: Colors.Verde
                        }}
                    />
                );
            } else {
                list.push(
                    <BallIndicator/>
                );
            }
        }
        return list;
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.TimerPaused == false) {
                if (this.state.secondsLeft == 0) {
                    this.setState({
                        minutesLeft: this.state.minutesLeft - 1,
                        secondsLeft: 59
                    })
                } else {
                    this.setState({
                        secondsLeft: this.state.secondsLeft - 1
                    })
                }
            }
            if (this.state.minutesLeft == 0 && this.state.secondsLeft == 0 && this.state.pauseTime) {
                this.sessionsCompleted += 1;
                this.setState({
                    BallIndicatorList: this.ManageBallIndicators(),
                    minutesLeft: this.pauseTime,
                    pauseTime: false
                })
            }
            if (this.state.minutesLeft == 0 && this.state.secondsLeft == 0 && !this.state.pauseTime) {
                this.setState({
                    minutesLeft: this.workTime,
                    pauseTime: true
                })
            }
        }, 1000);
    }

    ChangeImageButton() {
        if(this.state.imageButton == require('../../Assets/Pause.png')) {
            this.setState({
                imageButton: require('../../Assets/Play.png'),
                TimerPaused: true
            });
        } else {
            this.setState({
                imageButton: require('../../Assets/Pause.png'),
                TimerPaused: false
            });
        }
        
    }

    ManageTimerBorderColor() {
        if (this.state.pauseTime) {
            return Colors.Amarelo;
        } else if (this.state.TimerPaused) {
            return Colors.Vermelho;
        } else {
            return Colors.Verde;
        }
    }

    render() {
        if (this.sessionsCompleted == this.numberOfSessions) {
            this.timer = null;
            Vibration.vibrate(500);
            this.props.navigation.navigate('Home');
        }
        return (
            <MainContainer>
                <TimerContainer>
                    <TimerBackground
                        style={{
                            borderColor: this.ManageTimerBorderColor()
                        }}
                    >
                        <TimerText>
                            {
                            `${
                                this.state.minutesLeft < 10 ? `0${this.state.minutesLeft}` : this.state.minutesLeft
                            }:${
                                this.state.secondsLeft < 10 ? `0${this.state.secondsLeft}` : this.state.secondsLeft
                            }`
                            }
                        </TimerText>
                    </TimerBackground>
                </TimerContainer>
                <BallIndicatorContainer>
                    {
                        this.state.BallIndicatorList.map((component, index) => {
                            return component;
                        })
                    }
                </BallIndicatorContainer>
                <PauseButtonContainer>
                        <PauseButton
                            onPress={() => this.ChangeImageButton()}
                        >
                            <Image
                                source={this.state.imageButton}
                            />
                        </PauseButton>
                </PauseButtonContainer>
            </MainContainer>
        );
    }
}

export default Contador;

