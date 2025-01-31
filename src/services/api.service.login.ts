import {axiosInstance} from "./api.services.ts";
import {IUserWithTokens} from "../models/user-with-tockens/IUserWithTokens.ts";

type LoginData = {
    username: string,
    password: string,
    expiresInMin: number,
}


export const login = async (loginData: LoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/auth/login', loginData);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}