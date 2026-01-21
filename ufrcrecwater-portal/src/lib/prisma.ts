// Import needed packages
// import { PrismaClient } from '../../generated/prisma/client'
import { PrismaClient } from "@prisma/client";
import { PrismaPostgresAdapter } from '@prisma/adapter-ppg'

// Setup
const connectionString = `${process.env.DATABASE_URL}`

// Init Prisma Client with adapter
const adapter = new PrismaPostgresAdapter({ connectionString })
export const prisma = new PrismaClient({ adapter })