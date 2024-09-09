import { devError } from "./devLogger";

const setItem = <T>(key: string, value: T): void => {
  try {
    const stringValue =
      typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  } catch (error) {
    devError("Error setting item in localStorage:", error);
  }
};

const getItem = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    if (item === null) return null;

    return JSON.parse(item) as T;
  } catch (error) {
    devError("Error getting item from localStorage:", error);
    return null;
  }
};

const removeItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    devError("Error removing item from localStorage:", error);
  }
};

const clearItems = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    devError("Error clearing localStorage:", error);
  }
};

export { setItem, getItem, removeItem, clearItems };
