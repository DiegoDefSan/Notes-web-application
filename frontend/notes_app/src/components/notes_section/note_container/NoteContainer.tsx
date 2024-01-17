import { useContext } from 'react';
import Note from '../../../interfaces/note'
import { useDeleteNote } from '../../../services/hooks/notes/useDeleteNote';
import { usePutNote } from '../../../services/hooks/notes/usePutNote';
import { PopFormContext } from '../../../contexts/PopFormContext';
import { ModifyingNoteContext } from '../../../contexts/ModifyingNoteContext';

export const NoteContainer = (note: Note) => {

  const { setNoteIdToModify }: any = useContext(ModifyingNoteContext);
  const { setIsFormDisplayed }: any = useContext(PopFormContext)

  const {
    mutate: putNote,
    error: errorPuting
  } = usePutNote();

  const {
    mutate: deleteNote,
    error: errorDeleting
  } = useDeleteNote();

  if (errorPuting) throw errorPuting;
  if (errorDeleting) throw errorDeleting;

  const archiveNote = () => {
    const noteModified: Note = {
      id: note.id,
      title: note.title,
      description: note.description,
      archived: !note.archived,
      category: note.category
    }

    putNote(noteModified);
  }

  const eraseNote = () => {
    deleteNote(note.id!);
  }

  const handleModifyingButton = () => {
    setIsFormDisplayed(true);
    setNoteIdToModify(note.id);
  }


  return (
    <div className="note-container">
      <div className="note-subcontainer" id="top-section">
        <div className="note-title">
          <h2>{note.title}</h2>
        </div>
        <div className="note-options">
          <ul className="options-list">
            <li>
              <i className='fa-solid fa-box-archive' onClick={() => archiveNote()}></i>
            </li>
            <li>
              <i className="fa-solid fa-pencil" onClick={() => handleModifyingButton()}></i>
            </li>
            <li>
              <i className="fa-solid fa-trash" onClick={() => eraseNote()}></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="note-subcontainer" id="description-section">
        <p className="note-description">
          {note.description}
        </p>
      </div>
      <div className="note-subcontainer" id="bottom-section">
        <p className="note-category">
          <b>Category: </b>
          {note.category.name}
        </p>
      </div>
    </div>
  )
}