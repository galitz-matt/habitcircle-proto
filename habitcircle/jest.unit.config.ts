import { createDefaultPreset } from "ts-jest"

const tsJestTransformCfg = createDefaultPreset().transform;

const config = {
    testEnvironment: "node",
    roots: [
        "<rootDir>/tests/unit",
    ],
    transform: {
        ...tsJestTransformCfg
    },
    moduleNameMapper: {
    "^@server/(.*)$": "<rootDir>/server/$1",
    "^@lib/(.*)$": "<rootDir>/lib/$1",
    "^@graphql/(.*)$": "<rootDir>/graphql/$1",
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@generated/(.*)$": "<rootDir>/generated/$1",
  }
};

export default config