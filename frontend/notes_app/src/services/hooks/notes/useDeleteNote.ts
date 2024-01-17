import { useMutation, useQueryClient } from "@tanstack/react-query";
import Note from "../../../interfaces/note";
import { NOTES_PATH } from "../../../utils/api_paths/paths";
import { useApi } from "../useApi";

export const useDeleteNote = () => {
  const { deleteObjectById } = useApi<Note>(NOTES_PATH);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => { return deleteObjectById(id); },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"]
      })
    }
  })
}