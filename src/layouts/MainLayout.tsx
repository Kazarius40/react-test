import {Outlet} from "react-router-dom";
import {Menu} from "../components/Menu.tsx";
import {authSliceActions} from "../redux/slices/authSlice.ts";
import {IUser} from "../models/user/IUser.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";

export const MainLayout = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const localStorageUser = localStorage.getItem("user");

        if (localStorageUser) {
            const user: IUser = JSON.parse(localStorageUser);
            dispatch(authSliceActions.login(user)); // Відновлюємо стан
        }
    }, [dispatch]);

    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};