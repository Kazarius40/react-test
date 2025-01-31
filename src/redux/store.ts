import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        authorization: authorization.reducer,
    }
});