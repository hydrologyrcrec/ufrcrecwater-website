import prisma from "../prisma";

export async function getInstruments() {
    return prisma.instrument.findMany({
        orderBy: { date_installed: "desc" },
    });
  }

