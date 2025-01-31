import {useEffect, useState} from "react";
import {axiosInstance} from "../services/api.services.ts";
import {Link} from "react-router-dom";
import {IUsers} from "../models/users/IUsers.ts";
import {IUser} from "../models/user/IUser.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axiosInstance.get<IUsers>("/users?limit=1").then(({ data }) => {
            const total: number = data.total;
            axiosInstance.get<IUsers>(`/users?limit=` + total).then(({ data }) => {
                setUsers(data.users);
            });
        });
    }, []);

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <h2>Список користувачів</h2>

            <input
                type="text"
                placeholder="Введіть ім'я користувача"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        <p>{user.id}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <Link to={`/users/${user.id}`}>Переглянути профіль</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};