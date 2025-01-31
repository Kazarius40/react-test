import {useForm} from "react-hook-form";
import {IAuthForm} from "../models/authorization/IAuthForm.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {authSliceActions} from "../redux/slices/authSlice.ts";
import {authService} from "../services/api.services.ts";
import {useNavigate} from "react-router-dom";




export const AuthForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IAuthForm>({
        mode: 'all',
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const loginHandler = async (data: IAuthForm) => {
        const user = await authService(data);
        dispatch(authSliceActions.login(user));
        localStorage.setItem("user", JSON.stringify(user));
        navigate('/recipes');
    };

    return (
        <form onSubmit={handleSubmit(loginHandler)}>
            <div>
                <input type="text" placeholder="Username"{...register('username')}/>
                <div>{errors.username?.message}</div>
            </div>
            <div>
                <input type="password" placeholder="Password"{...register('password')}/>
                <div>{errors.password?.message}</div>
            </div>
            <button type="submit">Login</button>
        </form>
    );
};