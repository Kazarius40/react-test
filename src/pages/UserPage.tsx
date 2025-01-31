import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IUser} from "../models/user/IUser.ts";
import {IRecipe} from "../models/recipe/IRecipe.ts";
import {axiosInstance} from "../services/api.services.ts";
import {UserComponent} from "../components/UserComponent.tsx";
import {IRecipes} from "../models/recipes/IRecipes.ts";

export const UserPage = () => {
    const {userId} = useParams<{ userId: string }>();
    const [user, setUser] = useState<IUser | null>(null);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(() => {

        axiosInstance.get<IUser>(`/users/` + userId).then(({data}) => {
            setUser(data);
        });

        axiosInstance.get<IRecipes>(`/recipes`).then(({data}) => {
            const userRecipes = data.recipes.filter(recipe => recipe.userId === Number(userId));
            setRecipes(userRecipes);
        });
    }, [userId]);

    if (!user) return <div>Завантаження...</div>;


    return (
        <>
            <UserComponent user={user} recipes={recipes}/>
        </>
    );
};