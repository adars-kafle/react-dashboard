import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supplierApi } from "../services/supplierServices";
import { type SupplierFormInputs } from "../interfaces/supplier";
import { SUPPLIER_KEY } from "../constants/keys";

export const useSuppliers = (skip: number = 0, limit: number = 10) => {
  return useQuery({
    queryKey: [SUPPLIER_KEY, skip, limit], // this array uniquely identifies the query.
    queryFn: () => supplierApi.getSuppliers(skip, limit), // this function fetches the data from the API.
    staleTime: 5 * 60 * 1000, // after 5 minutes, the data is considered stale and is refetched from the API.
  });
};

export const useSupplier = (id: string) => {
  return useQuery({
    queryKey: [SUPPLIER_KEY, id],
    queryFn: () => supplierApi.getSupplierById(id),
    enabled: !!id, // this ensures the query is only executed if `id` is not undefined or null.
    staleTime: 5 * 60 * 1000, // 5 minutes of stale time
  });
};

export const useCreateSupplier = () => {
  const queryClient = useQueryClient(); // this is used to invalidate the cache.

  return useMutation({
    mutationFn: (newSupplier: SupplierFormInputs) =>
      supplierApi.createSupplier(newSupplier), // this function creates a new supplier (it mutates/changes the data)
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [SUPPLIER_KEY] }); // this tells react query to refetch the data from the API.
    },
  });
};

export const useUpdateSupplier = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      updates,
    }: {
      id: string;
      updates: SupplierFormInputs;
    }) => supplierApi.updateSupplier(id, updates),
    onSuccess: (updatedSupplier) => {
      queryClient.invalidateQueries({ queryKey: [SUPPLIER_KEY] });
      queryClient.setQueryData(
        [SUPPLIER_KEY, updatedSupplier.id],
        updatedSupplier
      );
    },
  });
};

export const useDeleteSupplier = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => supplierApi.deleteSupplier(id),
    onSuccess: (_, deletedId) => {
      queryClient.invalidateQueries({ queryKey: [SUPPLIER_KEY] });
      queryClient.removeQueries({ queryKey: [SUPPLIER_KEY, deletedId] });
    },
  });
};
