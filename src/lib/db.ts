import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Vercel has no DATABASE_URL env and a read-only FS (except /tmp).
// - Local/sandbox: keep using ./db/custom.db (created by `bun run db:push`)
// - Vercel: fall back to /tmp so the demo lead form still works per instance
//   (ephemeral — wire Turso/Neon/Postgres for real persistence)
const dbUrl =
  process.env.DATABASE_URL ??
  (process.env.VERCEL ? 'file:/tmp/proserve.db' : 'file:./db/custom.db')

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'production' ? ['error'] : ['query', 'error'],
    datasources: {
      db: { url: dbUrl },
    },
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
