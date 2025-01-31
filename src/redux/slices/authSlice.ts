import {IUser} from "../../models/user/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type AuthSliceType = {
    user: IUser | null;
    isAuthenticated : boolean;
}

const initialState: AuthSliceType = {user: null, isAuthenticated : false}

export const authSlice = createSlice({
    name: 'authorization',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            state.isAuthenticated  = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated  = false;
        }
    }
})

export const authSliceActions = {
    ...authSlice.actions,
}