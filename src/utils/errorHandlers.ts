import { AxiosError } from "axios";

// Custom error class for API errors
class ApiError extends Error {
  status: number;
  data: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

// Helper function to handle API errors
export const handleApiError = (error: unknown): never => {
  if (error instanceof AxiosError) {
    throw new ApiError(
      error.response?.data?.message || "An unknown error occurred",
      error.response?.status || 500,
      error.response?.data
    );
  }
  throw error;
};
