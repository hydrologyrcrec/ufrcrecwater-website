import prisma from "../prisma";

export async function getResearch() {
    return prisma.research.findMany({
        orderBy: { updated_at: "desc" },
    })
}