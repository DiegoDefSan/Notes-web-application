import { useQuery } from "@tanstack/react-query";
import { CATEGORIES_PATH } from "../../../utils/api_paths/paths";
import { useApi } from "../useApi";
import Category from "../../../interfaces/category";

export const useGetCategories = () => {
  const { getObjects } = useApi<Category>(CATEGORIES_PATH);

  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getObjects(),
    staleTime: 10_000
  })
}