import { useMutation, useQueryClient } from "@tanstack/react-query";
import Note from "../../../interfaces/note";
import { NOTES_PATH } from "../../../utils/api_paths/paths";
import { useApi } from "../useApi";

export const usePutNote = () => {
  const { putObject } = useApi<Note>(NOTES_PATH);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (note: Note) => { return putObject(note) },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"]
      })
    }
  })
}