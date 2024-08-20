import { toast } from "react-toastify";

const toastSuccess = (message: string) => {
  return toast.success(message);
};

const toastError = (message: string) => {
  return toast.error(message);
};

export { toastSuccess, toastError };
