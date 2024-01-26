/* eslint-disable prettier/prettier */

export interface Timer {
    forwork: number;
    forpause: number;
    sessions: number;
    timer_name: string;
    user_id: number;
    timer_id: number;
}

export interface User {
    username: string
    useremails: string
    userpassword: string
    timers: Timer[]
}