import client from '@/db';

async function getUserDetails() {
  const users = await client.user.findMany();
  return {
    users
  }
};


// Async component --> only in server components, not in client
export default async function Home() {

  const {users} = await getUserDetails();

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
