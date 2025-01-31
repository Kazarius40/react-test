import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {Recipes} from "../components/Recipes.tsx";
import {AuthorizationPage} from "../pages/AuthorizationPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {UserPage} from "../pages/UserPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            { path: 'auth', element: <AuthorizationPage/> },
            { path: 'users', element: <UsersPage/> },
            {path: '/users/:userId', element: <UserPage/>},
            { path: 'recipes', element: <Recipes/> },
        ],
    },
])