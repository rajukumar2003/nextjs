// import { NextRequest, NextResponse } from "next/server"


// export function GET(req: NextRequest, { params }: { params: string[]}) {
//     console.log(params)
//     return NextResponse.json({
//         message: "Handler"
//     })
// };


import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                username: { label: 'email', type: 'text', placeholder: 'raju@gmail.com' },
                password: { label: 'password', type: 'password', placeholder: '000000' },
            },

            async authorize(credentials: any) {
                // validation here for correct credentials
                console.log(credentials)

                return {
                    id: "user1",
                    username: 'rajuk',
                    email: 'raju@gmail.com'
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})


export const GET = handler;
export const POST = handler;