import { devError } from "./devLogger";

const parseJson = <T>(value: string): T | null => {
  try {
    return JSON.parse(value) as T;
  } catch (error) {
    devError("Error parsing JSON:", error);
    return null;
  }
};

const stringifyJson = <T>(value: T): string => {
  try {
    return JSON.stringify(value);
  } catch (error) {
    devError("Error stringifying JSON:", error);
    return "";
  }
};

export { parseJson, stringifyJson };
