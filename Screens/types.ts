import React from 'react';
import { RouteProp } from "@react-navigation/native";
import { Timer } from '../Api/entitys';
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
            userID: number,
            username: string,
            email: string,
            password: string,
            timers: Timer[],
            workTime: number,
            numberOfSessions: number,
            pauseTime: number,
        } 
    }, 'params'>,
    navigation: any
};

export interface SetTimerState {
    workTime: number,
    numberOfSessions: number,
    pauseTime: number,
    promptShow: boolean,
    pressetName: string,
    workTimePresset: string,
    numberOfSessiosPresset: string,
    pauseTimePresset: string
};

export interface ProfileProps {
    route: RouteProp<{
        params: {
            username: string,
            email: string,
            password: string,
            timers: Timer[],
            userID: number
        }
    }, 'params'>,
    navigation: any
}



export interface ProfileState {
    PreDefinitions: Array<Timer>,
    showPrompt: boolean,
    timer_ID_delete: number,
    timer_Name_delete: string
}

export interface DeleteTimerProps {
    func_close: Function,
    func_deletar: Function,
    timer_name: string
}

export interface DeleteTimerState {}

export type RootStackParamList = {
    SetTimer: React.ComponentClass<SetTimerProps, SetTimerState>;
    Contador: React.ComponentClass<ContadorProps, ContadorState>;
    StartScreen: React.ComponentClass;
    Profile: React.ComponentClass<ProfileProps, ProfileState>;
};