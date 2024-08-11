// import { NextRequest, NextResponse } from "next/server"


// export function GET(req: NextRequest, { params }: { params: string[]}) {
//     console.log(params)
//     return NextResponse.json({
//         message: "Handler"
//     })
// };


import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth";


const handler = NextAuth(NEXT_AUTH)


export const GET = handler;
export const POST = handler;