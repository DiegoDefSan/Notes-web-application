package ensolvers.defilippi.note_application.services;

import ensolvers.defilippi.note_application.dto.note.commands.create_note.CreateNoteRequest;
import ensolvers.defilippi.note_application.dto.note.commands.create_note.CreateNoteResponse;
import ensolvers.defilippi.note_application.dto.note.commands.delete_note.DeleteNoteRequest;
import ensolvers.defilippi.note_application.dto.note.commands.delete_note.DeleteNoteResponse;
import ensolvers.defilippi.note_application.dto.note.commands.update_note.UpdateNoteRequest;
import ensolvers.defilippi.note_application.dto.note.commands.update_note.UpdateNoteResponse;
import ensolvers.defilippi.note_application.dto.note.queries.NoteVm;

import java.util.List;

public interface INoteService {
    List<NoteVm> getNotes();

    CreateNoteResponse createNote(CreateNoteRequest createNoteRequest);
    UpdateNoteResponse updateNote(UpdateNoteRequest updateNoteRequest);
    DeleteNoteResponse deleteNote(DeleteNoteRequest deleteNoteRequest);
}
