import { IUser } from "../models/user/IUser.ts";
import { IRecipe } from "../models/recipe/IRecipe.ts";
import { Link } from "react-router-dom";
import {FC} from "react";

interface IUserComponentProps {
    user: IUser;
    recipes: IRecipe[];
}

export const UserComponent: FC<IUserComponentProps> = ({ user, recipes }) => {
    return (
        <div>
            <h2>Інформація про користувача</h2>
            <p><strong>Ім'я:</strong> {user.username}</p>
            <p><strong>Фамілія:</strong> {user.lastName}</p>
            <p><strong>Електронна пошта:</strong> {user.email}</p>
            <p><strong>Вік:</strong> {user.age}</p>
            <p><strong>Телефон:</strong> {user.phone}</p>
            <p><strong>Роль:</strong> {user.role}</p>
            <p><strong>Освіта:</strong> {user.university}</p>

            <h3>Рецепти користувача:</h3>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                    </li>
                ))}
            </ul>

            <Link to="/users">Назад до списку користувачів</Link>
        </div>
    );
};
