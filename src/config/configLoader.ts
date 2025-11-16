import { ENVIRONMENTS } from "./environments";

export function getBaseUrl(): string {
  const envArg = process.env.TEST_ENV || "production";
  return ENVIRONMENTS[envArg] || ENVIRONMENTS.production;
}
