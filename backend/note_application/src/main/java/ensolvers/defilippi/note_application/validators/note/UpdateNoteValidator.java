package ensolvers.defilippi.note_application.validators.note;

import ensolvers.defilippi.note_application.exceptions.ValidationException;
import ensolvers.defilippi.note_application.models.Note;

public class UpdateNoteValidator {
    private static final int maxTitleCharacters = 16;
    private static final int maxDescriptionCharacters = 64;
    public static void validateNoteUpdating(Note note) {

        if (note.getId() == null) {
            throw new ValidationException("Note id is required");
        }

        if (note.getTitle() == null || note.getTitle().isEmpty()) {
            throw new ValidationException("Note title is required");
        }

        if (note.getTitle().length() > 16) {
            throw new ValidationException("Note title cannot exceed " + maxTitleCharacters + " characters");
        }

        if (note.getDescription() == null || note.getDescription().isEmpty()) {
            throw new ValidationException("Note description is required");
        }

        if (note.getDescription().length() > 64) {
            throw new ValidationException("Note description cannot exceed " + maxDescriptionCharacters + " characters");
        }

        if (note.getCategory() == null) {
            throw new ValidationException("Category is required");
        }
    }
}
