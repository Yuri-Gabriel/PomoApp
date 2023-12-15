import React from 'react';
import { RouteProp } from "@react-navigation/native";

export interface ContadorProps {
    route: RouteProp<{ 
        params: { 
            WorkTime: number,
            NumberOfSessions: number,
            PauseTime: number
        } 
    }, 'params'>,
    navigation: any
};
  
export  interface ContadorState {
    BallIndicatorList: any,
    imageButton: any,
    TimerPaused: boolean,
    minutesLeft: number,
    secondsLeft: number,
    pauseTime: boolean
};

export interface SetTimerProps {
    route: RouteProp<{ 
        params: { 
            username: string,
            email: string,
            iconUser: any,
        } 
    }, 'params'>,
    navigation: any
};

export interface SetTimerState {
    workTime: number,
    numberOfSessions: number,
    pauseTime: number,
    promptShow: boolean,
    pressetName: string
};

export interface ProfileProps {
    route: RouteProp<{
        params: {
            username: string,
            email: string,
            iconUser: any,
        }
    }, 'params'>,
    navigation: any
}

interface PreDefinitionsObject {
    name: string
}

export interface ProfileState {
    PreDefinitions: Array<PreDefinitionsObject>
}

export type RootStackParamList = {
    SetTimer: React.ComponentClass<SetTimerProps, SetTimerState>;
    Contador: React.ComponentClass<ContadorProps, ContadorState>;
    StartScreen: React.ComponentClass;
    Profile: React.ComponentClass<ProfileProps, ProfileState>;
};