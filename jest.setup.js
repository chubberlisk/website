import "@testing-library/jest-dom";
import { loadEnvConfig } from "@next/env";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

export default async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};
