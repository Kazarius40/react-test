import {Link, useLocation} from "react-router-dom";
import {authSliceActions} from "../redux/slices/authSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";

export const Menu = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.authorization.user);
    const location = useLocation();

    const logoutHandler = () => {
        dispatch(authSliceActions.logout());
        localStorage.removeItem("user");
    };

    return (
        <nav>
            <ul>
                {!user && location.pathname !== "/auth" && (
                    <li><Link to="/auth">Увійти</Link></li>
                )}
                {user && (
                    <>
                        <li><Link to="/recipes">Рецепти</Link></li>
                        <li><Link to="/users">Користувачі</Link></li>
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};