import { useQuery } from "@tanstack/react-query";
import Note from "../../../interfaces/note"
import { NOTES_PATH } from "../../../utils/api_paths/paths"
import { useApi } from "../useApi"

export const useGetNotes = () => {
  const { getObjects } = useApi<Note>(NOTES_PATH);

  return useQuery({
    queryKey: ["notes"],
    queryFn: () => getObjects(),
    staleTime: 10_000
  })
}