import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                username: { label: 'email', type: 'text', placeholder: 'raju@gmail.com' },
                password: { label: 'password', type: 'password', placeholder: '000000' },
            },

            async authorize(credentials: any, req) {
                // validation here for correct credentials
                console.log(credentials)

                return {
                    id: "1",
                    username: 'rajuk',
                    email: 'raju@gmail.com'
                };
            },
            
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '' ,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        // gives access to the user id
        session: ({ session, token, user }: any) => {
            if (session && session.user) {
                session.user.id = token.sub;
            }
            return session;
        }
    },
    pages: {
        signIn : '/signin'
    }
}