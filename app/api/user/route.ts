import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();


export async function POST(req:NextRequest) {
    // extract the body
    const body = await req.json();

    // store in database
    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    return Response.json({
        msg: "You are logged in"
    });
};


export async function GET() {
    const users = await client.user.findMany();
    return Response.json({
        users
    })
};