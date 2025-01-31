import axios from "axios";
import {IUser} from "../models/user/IUser.ts";
import {IAuthForm} from "../models/authorization/IAuthForm.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {IUserWithTokens} from "../models/user-with-tockens/IUserWithTokens.ts";
import {ITokensPair} from "../models/tokens/ITokensPair.ts";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {}
})

axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = `Bearer ` + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
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

export const refresh = async () => {

    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokensPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMins: 30
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}