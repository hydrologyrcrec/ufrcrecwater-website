import { PrismaClient } from "@prisma/client";
import { PrismaPostgresAdapter } from '@prisma/adapter-ppg'

const globalForPrisma = global as unknown as {
    prisma: PrismaClient
}

const adapter = new PrismaPostgresAdapter({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = globalForPrisma.prisma || new PrismaClient({
  adapter,
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma