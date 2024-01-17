package ensolvers.defilippi.note_application.services.impl;

import ensolvers.defilippi.note_application.dto.note.commands.create_note.CreateNoteRequest;
import ensolvers.defilippi.note_application.dto.note.commands.create_note.CreateNoteResponse;
import ensolvers.defilippi.note_application.dto.note.commands.delete_note.DeleteNoteRequest;
import ensolvers.defilippi.note_application.dto.note.commands.delete_note.DeleteNoteResponse;
import ensolvers.defilippi.note_application.dto.note.commands.update_note.UpdateNoteRequest;
import ensolvers.defilippi.note_application.dto.note.commands.update_note.UpdateNoteResponse;
import ensolvers.defilippi.note_application.dto.note.queries.NoteVm;
import ensolvers.defilippi.note_application.exceptions.ResourceNotFoundException;
import ensolvers.defilippi.note_application.models.Category;
import ensolvers.defilippi.note_application.models.Note;
import ensolvers.defilippi.note_application.repositories.CategoryRepository;
import ensolvers.defilippi.note_application.repositories.NoteRepository;
import ensolvers.defilippi.note_application.services.INoteService;
import ensolvers.defilippi.note_application.validators.note.CreateNoteValidator;
import ensolvers.defilippi.note_application.validators.note.UpdateNoteValidator;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService implements INoteService {

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    private Category getCategoryById(Long categoryId) {
        return categoryRepository.findById(categoryId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Category " + categoryId + " not found")
                );
    }

    private void verifyNoteExistence(Long noteId) {
        noteRepository.findById(noteId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Note " + noteId + "not found")
                );
    }

    @Override
    public List<NoteVm> getNotes() {
        List<Note> noteList = noteRepository.selectNotes();

        List<NoteVm> noteVmList = noteList.stream().map(
                note -> modelMapper.map(note, NoteVm.class)
        ).toList();

        return noteVmList;
    }

    @Override
    public CreateNoteResponse createNote(CreateNoteRequest createNoteRequest) {
        Note noteToAdd = modelMapper.map(createNoteRequest, Note.class);

        CreateNoteValidator.validateNoteCreation(noteToAdd);
        Category category = getCategoryById(noteToAdd.getCategory().getId());

        noteToAdd.setCategory(category);

        Note addedNote = noteRepository.save(noteToAdd);

        CreateNoteResponse noteResponse = modelMapper.map(addedNote, CreateNoteResponse.class);

        return noteResponse;
    }

    @Override
    public UpdateNoteResponse updateNote(UpdateNoteRequest updateNoteRequest) {
        Note noteToModify = modelMapper.map(updateNoteRequest, Note.class);

        UpdateNoteValidator.validateNoteUpdating(noteToModify);
        verifyNoteExistence(noteToModify.getId());
        Category category = getCategoryById(noteToModify.getCategory().getId());

        Note modifiedNote = noteRepository.save(noteToModify);

        UpdateNoteResponse noteResponse = modelMapper.map(modifiedNote, UpdateNoteResponse.class);

        return noteResponse;
    }

    @Override
    public DeleteNoteResponse deleteNote(DeleteNoteRequest deleteNoteRequest) {
        verifyNoteExistence(deleteNoteRequest.getId());

        noteRepository.deleteById(deleteNoteRequest.getId());

        return new DeleteNoteResponse(deleteNoteRequest.getId());
    }
}
