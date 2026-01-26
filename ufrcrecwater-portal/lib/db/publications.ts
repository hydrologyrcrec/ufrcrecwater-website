import prisma from "../prisma";

export async function getPublications() {
    return prisma.publication.findMany({
        where: {
            authors: { some: {} },
        },
        include: {
            journal: {
            select: {
                id: true,
                journal_name: true,
                journal_url: true,
            },
            },
            authors: {
            include: {
                user: {
                select: {
                    id: true,
                    user_name: true,
                },
                },
            },
            },
        },
        orderBy: { date_published: "desc" },
        });
  }

