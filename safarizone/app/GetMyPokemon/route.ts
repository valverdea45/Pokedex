import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET ( req: NextRequest) {

    const db = new PrismaClient()
    
    const user = await db.user.findFirst({
        where:{
            id: ""
        },
        include: {
            Catch: {
                include: {
                    pokemon: {}
                }
            }
        }
    })

    const PokemonICaught = user?.Catch.map(c => c.pokemon.id)

    return new NextResponse(JSON.stringify(PokemonICaught))
}