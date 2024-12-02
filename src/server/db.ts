import { PrismaClient } from '@prisma/client'

// Prevent multiple Prisma Client instances in development
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // Optional: log queries in development
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
