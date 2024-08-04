import axios from "axios"

export default async function () {
    const userResponse = await axios.get('http://localhost:3000/api/user');
    const users = userResponse.data.users;

    interface User {
        id: number;
        username: string;
    }

    return (
        <div>
            <h1>All the signed users</h1>
            {users.map((user: User) => (
                <div key={user.id}>
                    {user.username}
                </div>
            ))}
        </div>
    );
}