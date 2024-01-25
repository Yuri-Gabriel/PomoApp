import { Timer, User } from './entitys';
import Axios from 'axios';

const url: string = 'https://pomoappapi.onrender.com';

export default {

    GetAllUsers: async () => {
        return await Axios.get(`${url}/User/findAllUsers`).then(res => res.data);
    },

    LoginUser: async (user: User) => {
        return await Axios.post(`${url}/User/findUser`, user)
        .then(res => res.data)
        .catch(err => err.response.data);
    },

    SingUpUser: async (user: User) => {
        console.log(user);
        await Axios.post(`${url}/User/createUser`, user).catch(err => console.log(err));
    },

    createTimer: async (timer: Timer) => {
        await Axios.post(`${url}/Timer/createTimer`, timer).catch(err => console.log(err));
    }
}