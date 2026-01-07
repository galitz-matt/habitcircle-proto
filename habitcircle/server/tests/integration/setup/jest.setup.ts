import { execSync } from "child_process";
import { PrismaClient } from "@/prisma/generated";
import dotenv from "dotenv";
import { afterAll, beforeAll, beforeEach } from "@jest/globals"

dotenv.config({ path: ".env.test" });

console.log("Setting up test env...");

let migrated = false;


export const prisma = new PrismaClient({
  log: process.env.LOG_PRISMA === "true" ? ["query", "info", "warn", "error"] : [],
});

beforeAll(async () => {
  if (!migrated) {
    console.log("Running migrations...");
    try {
      execSync("npx prisma migrate deploy --schema=server/infra/db/prisma/schema.prisma", {
        stdio: "inherit",
      });
      migrated = true;
      console.log("Migrations applied.");
    } catch (err) {
      console.error("Failed to run migrations:", err);
      process.exit(1);
    }
  }
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
  console.log("Disconnecting prisma...")
  await prisma.$disconnect();
});