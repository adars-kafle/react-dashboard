import api from "./api";
import { type Supplier, type SupplierFormInputs } from "../interfaces/supplier";
import { handleApiError } from "../utils/errorHandlers";
import { ENDPOINTS } from "../config/api";

export const supplierApi = {
  getSuppliers: async (
    skip: number = 0,
    limit: number = 100
  ): Promise<Supplier[]> => {
    try {
      const response = await api.get<Supplier[]>(
        `${ENDPOINTS.SUPPLIERS}?skip=${skip}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  getSupplierById: async (id: string): Promise<Supplier> => {
    try {
      const response = await api.get<Supplier>(`${ENDPOINTS.SUPPLIERS}/${id}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  createSupplier: async (
    supplierData: SupplierFormInputs
  ): Promise<Supplier> => {
    try {
      const response = await api.post<Supplier>(
        ENDPOINTS.SUPPLIERS,
        supplierData
      );
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
        `${ENDPOINTS.SUPPLIERS}/${id}`,
        supplierData
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  deleteSupplier: async (id: string): Promise<void> => {
    try {
      await api.delete(`${ENDPOINTS.SUPPLIERS}/${id}`);
    } catch (error) {
      throw handleApiError(error);
    }
  },
};
