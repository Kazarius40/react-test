import axios from "axios";
import {IUser} from "../models/user/IUser.ts";
import {IAuthForm} from "../models/authorization/IAuthForm.ts";

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number
}

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {}
})

export const authService = async (data: IAuthForm): Promise<IUser> => {
    try {
        const {data: user} = await axiosInstance.post<IUser>('/auth/login', data);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Login failed");
    }
}