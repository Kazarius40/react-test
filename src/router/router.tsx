import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {Users} from "../components/Users.tsx";
import {Recipes} from "../components/Recipes.tsx";
import {AuthorizationPage} from "../pages/AuthorizationPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            { path: 'auth', element: <AuthorizationPage/> },
            { path: 'users', element: <Users/> },
            { path: 'recipes', element: <Recipes/> },
        ],
    },
])