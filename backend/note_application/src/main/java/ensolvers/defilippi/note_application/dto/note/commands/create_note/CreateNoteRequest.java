package ensolvers.defilippi.note_application.dto.note.commands.create_note;

import ensolvers.defilippi.note_application.models.common.BaseDomainModel;
import lombok.Data;

@Data
public class CreateNoteRequest {
    private String title;
    private String description;
    private BaseDomainModel category;
}
