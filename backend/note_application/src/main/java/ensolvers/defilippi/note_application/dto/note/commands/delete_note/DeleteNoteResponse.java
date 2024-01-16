package ensolvers.defilippi.note_application.dto.note.commands.delete_note;

import lombok.Data;

@Data
public class DeleteNoteResponse {
    private String message;

    public DeleteNoteResponse(Long noteId) {
        this.message = "Note " + noteId + " was deleted successfully";
    }
}
