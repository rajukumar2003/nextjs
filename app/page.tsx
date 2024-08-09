'use client';

import { log } from 'console';
// import client from '@/db';
import { signIn, signOut, useSession } from 'next-auth/react';

// async function getUserDetails() {
//   const users = await client.user.findMany();
//   return {
//     users
//   }
// };

// Async component --> only in server components, not in client
export default async function Home() {

  // const {users} = await getUserDetails();

  // interface User {
  //   id: number;
  //   username: string;
  // }

  const session = useSession();

  return (
    <div className=' flex justify-between'>
      {/* <h1>All the signed users</h1>
      {users.map((user: User) => (
        <div key={user.id}>
          {user.username}
        </div>
      ))} */}
    
      <button onClick={() => signIn()}>
        SignIn
      </button>

      <button onClick={() => signOut()}>
        Logout
      </button>

      <div>
        {JSON.stringify(session)}
      </div>

    </div>
  );
}
