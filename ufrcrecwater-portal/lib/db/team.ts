import prisma from "../prisma";

export async function getTeam() {
    return prisma.teamMember.findMany({
        include: {
        user: {
            select: {
            id: true,
            user_name: true,
            },
        },
        },
        orderBy: [
        { status: "asc" },        
        { tenure_start: "asc" },
        ],
    });
}