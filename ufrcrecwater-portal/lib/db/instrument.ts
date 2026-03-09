import prisma from "../prisma";

export async function getInstruments() {
    return prisma.instrument.findMany({
        include: {
            _count: {
              select: { tools: true }
            }
          },
        orderBy: { date_installed: "desc" },
    });
  }

