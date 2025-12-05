import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
const config = {
  testEnvironment: "node",
  verbose: true,
  silent: false,
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    "^@/server/(.*)$": "<rootDir>/server/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
    "^@/prisma/generated(.*)$": "<rootDir>/server/infra/db/prisma/generated/$1",
    "^@/tests/(.*)$": "<rootDir>/tests/$1"
  },
  roots: ["<rootDir>/tests/integration"],
  setupFilesAfterEnv: ["<rootDir>/tests/integration/setup/jest.setup.ts"]
};

export default config;