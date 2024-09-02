import api from "./api";
import { Supplier, SupplierFormInputs } from "../interfaces/types";
import { handleApiError } from "../utils/errorHandlers";

export const supplierApi = {
  getSuppliers: async (
    skip: number = 0,
    limit: number = 100
  ): Promise<Supplier[]> => {
    try {
      const response = await api.get<Supplier[]>(
        `/suppliers?skip=${skip}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  getSupplierById: async (id: string): Promise<Supplier> => {
    try {
      const response = await api.get<Supplier>(`/suppliers/${id}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  createSupplier: async (
    supplierData: SupplierFormInputs
  ): Promise<Supplier> => {
    try {
      const response = await api.post<Supplier>("/suppliers", supplierData);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  updateSupplier: async (
    id: string,
    supplierData: SupplierFormInputs
  ): Promise<Supplier> => {
    try {
      const response = await api.put<Supplier>(
        `/suppliers/${id}`,
        supplierData
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  deleteSupplier: async (id: string): Promise<void> => {
    try {
      await api.delete(`/suppliers/${id}`);
    } catch (error) {
      throw handleApiError(error);
    }
  },
};
