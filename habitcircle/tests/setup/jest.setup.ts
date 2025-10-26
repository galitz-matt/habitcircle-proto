import { execSync } from "child_process";
import { PrismaClient } from "@generated/prisma";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

console.log("Setting up test env...");

try {
  execSync(
    "npx prisma migrate deploy --schema=prisma/schema.prisma",
    { stdio: "inherit" }
  );
} catch (err) {
  console.error("Failed to run migrations:", err);
  process.exit(1);
}

export const prisma = new PrismaClient({
  log: process.env.LOG_PRISMA === "true" ? ["warn", "error"] : [],
});

beforeEach(async () => {
  const tablenames = await prisma.$queryRaw<
    Array<{ tablename: string }>
  >`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

  for (const { tablename } of tablenames) {
    if (tablename !== "_prisma_migrations") {
      await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${tablename}" CASCADE;`);
    }
  }
});

afterAll(async () => {
  await prisma.$disconnect();
});

console.log("Test DB is ready");