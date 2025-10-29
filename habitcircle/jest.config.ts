import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
const config = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    "^@server/(.*)$": "<rootDir>/server/$1",
    "^@lib/(.*)$": "<rootDir>/lib/$1",
    "^@graphql/(.*)$": "<rootDir>/graphql/$1",
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@generated/(.*)$": "<rootDir>/generated/$1",
  },
  roots: ["<rootDir>/tests"],
  setupFilesAfterEnv: ["<rootDir>/tests/integration/setup/jest.setup.ts"]
};

export default config;