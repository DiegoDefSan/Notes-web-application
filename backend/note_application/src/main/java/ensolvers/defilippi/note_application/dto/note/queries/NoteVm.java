package ensolvers.defilippi.note_application.dto.note.queries;

import ensolvers.defilippi.note_application.dto.category.queries.CategoryVm;
import lombok.Data;

@Data
public class NoteVm {
    private Long id;
    private String title;
    private String description;
    private boolean isArchived;
    private CategoryVm category;
}
