package ensolvers.defilippi.note_application.controllers;

import ensolvers.defilippi.note_application.dto.note.commands.create_note.CreateNoteRequest;
import ensolvers.defilippi.note_application.dto.note.commands.create_note.CreateNoteResponse;
import ensolvers.defilippi.note_application.dto.note.commands.delete_note.DeleteNoteRequest;
import ensolvers.defilippi.note_application.dto.note.commands.delete_note.DeleteNoteResponse;
import ensolvers.defilippi.note_application.dto.note.commands.update_note.UpdateNoteRequest;
import ensolvers.defilippi.note_application.dto.note.commands.update_note.UpdateNoteResponse;
import ensolvers.defilippi.note_application.dto.note.queries.NoteVm;
import ensolvers.defilippi.note_application.services.impl.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/v1/notes") // http://localhost:8080//api/v1/notes
public class NoteController {
    @Autowired
    private NoteService noteService;

    @GetMapping
    public ResponseEntity<List<NoteVm>> getNotes() {
        List<NoteVm> notesFromService = noteService.getNotes();

        return new ResponseEntity<>(notesFromService, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CreateNoteResponse> postNote(
            @RequestBody CreateNoteRequest noteRequest
    )
    {
        CreateNoteResponse note = noteService.createNote(noteRequest);

        return new ResponseEntity<>(note, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<UpdateNoteResponse> putNote(
            @RequestBody UpdateNoteRequest noteRequest
    )
    {
        UpdateNoteResponse note = noteService.updateNote(noteRequest);

        return new ResponseEntity<>(note, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<DeleteNoteResponse> deleteNote(
            @RequestBody DeleteNoteRequest noteRequest
    )
    {
        DeleteNoteResponse response = noteService.deleteNote(noteRequest);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
