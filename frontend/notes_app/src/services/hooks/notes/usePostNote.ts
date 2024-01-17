import { NOTES_PATH } from './../../../utils/api_paths/paths';
import { useApi } from "../useApi"
import Note from '../../../interfaces/note';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostNote = () => {
  const { postObject } = useApi<Note>(NOTES_PATH);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (note: Note) => postObject(note),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"]
      })
    }
  })
}