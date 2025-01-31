import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/recipes">Рецепти</Link></li>
                <li><Link to="/users">Користувачі</Link></li>
                <li><Link to="/auth">Увійти</Link></li>
            </ul>
        </nav>
    );
};