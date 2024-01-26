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
        .catch(err =>{
            if (err.response.data.statusCode == 404) throw new Error(err.response.data.message);
        });
    },

    SingUpUser: async (user: User) => {
        await Axios.post(`${url}/User/createUser`, user).catch(err => {
            alert("Usuario não pode ser criado");
            if (err.response.data.statusCode == 401) throw new Error(err.response.data.message);
        });
    },

    createTimer: async (timer: Timer) => {
        await Axios.post(`${url}/Timer/createTimer`, timer).catch(err => console.log(err));
    },

    DeleteTimer: async (timer_id: number, user_id: number) => {
        await Axios.delete(`${url}/timer/remove`, {
            data: {
                timer_id: timer_id,
                user_id: user_id
            }
        }).catch(err => {
            if (err.response.data.statusCode == 404) throw new Error(err.response.data.message);
        })
    }
}