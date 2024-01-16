package ensolvers.defilippi.note_application.dto.note.commands.update_note;

import ensolvers.defilippi.note_application.models.common.BaseDomainModel;
import lombok.Data;

@Data
public class UpdateNoteRequest {
    private Long id;
    private String title;
    private String description;
    private boolean isArchived;
    private BaseDomainModel category;
}
