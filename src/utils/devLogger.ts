// Vite automatically sets the import.meta.env.DEV variable to true if the application is running in development mode.
const isDevelopment =
  import.meta.env.DEV || import.meta.env.VITE_APP_ENV === "development";

const createDevLogger = (logFunction: (...args: any[]) => void) => {
  return (...args: any[]) => {
    if (isDevelopment) {
      logFunction(...args);
    }
  };
};

const devLog = createDevLogger(console.log);
const devError = createDevLogger(console.error);
const devWarn = createDevLogger(console.warn);

export { devLog, devError, devWarn };
