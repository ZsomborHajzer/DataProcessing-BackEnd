import * as dotenv from 'dotenv'
dotenv.config();

module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testEnvironmentOptions: {
      url: `http://localhost:${process.env.PORT}`,
    },
  }