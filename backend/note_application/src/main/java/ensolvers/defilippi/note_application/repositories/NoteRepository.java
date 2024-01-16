package ensolvers.defilippi.note_application.repositories;

import ensolvers.defilippi.note_application.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {

    @Query("""
        SELECT n
        FROM Note n
        LEFT OUTER JOIN FETCH n.category
    """)
    List<Note> selectNotes();

    @Query("""
        SELECT n
        FROM Note n
        LEFT OUTER JOIN FETCH n.category
        WHERE n.category.id = :categoryId
    """)
    List<Note> selectNotesByCategoryId(Long categoryId);

    @Query("""
        SELECT n
        FROM Note n
        WHERE n.isArchived
    """)
    List<Note> selectArchivedNotes();

    @Query("""
        SELECT n
        FROM Note n
        WHERE NOT n.isArchived
    """)
    List<Note> selectUnarchivedNotes();
}
