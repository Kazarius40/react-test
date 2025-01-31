import {IUser} from "../../models/user/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type AuthSliceType = {
    user: IUser | null;
    loadState: boolean;
}

const initialState: AuthSliceType = {user: null, loadState: false}

export const authSlice = createSlice({
    name: 'authorization',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
})

export const authSliceActions = {
    ...authSlice.actions,
}