import axios from "axios";
import {IUser} from "../models/user/IUser.ts";
import {IAuthForm} from "../models/authorization/IAuthForm.ts";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const authService  = async (data: IAuthForm): Promise<IUser> => {
    try {
        const {data: user} = await axiosInstance.post<IUser>('/auth/login', data);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Login failed");
    }
}