import { useContext, useState } from 'react';
import Note from '../../interfaces/note';
import './pop_form.css'
import { usePostNote } from '../../services/hooks/notes/usePostNote';
import Category from '../../interfaces/category';
import { PopFormContext } from '../../contexts/PopFormContext';
import { ModifyingNoteContext } from '../../contexts/ModifyingNoteContext';
import { usePutNote } from '../../services/hooks/notes/usePutNote';

interface Props {
  categories: Category[],
}

export const PopForm = (props: Props) => {

  const { isFormDisplayed, handleClose }: any = useContext(PopFormContext);
  const { noteIdToModify }: any = useContext(ModifyingNoteContext);

  const {
    categories
  } = props;


  const [newNote, setNewNote] = useState<Note>({
    title: "",
    description: "",
    archived: false,
    category: {}
  });


  const {
    mutate: postNewNote,
    error: errorPosting
  } = usePostNote();

  const {
    mutate: putNote,
    error: errorPutting
  } = usePutNote();

  if (errorPosting) throw errorPosting;
  if (errorPutting) throw errorPutting;


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const categorySelected = categories[parseInt(e.target.value) - 1];

    setNewNote((prevNote) => ({
      ...prevNote,
      category: categorySelected,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newNote.title.trim() === '') {
      //alert('El título debe tener entre 1 y 16 caracteres.');
      return;
    }

    if (newNote.description.trim() === '') {
      //alert('La descripción debe tener entre 1 y 64 caracteres.');
      return;
    }

    if (newNote.category.id === null) {
      //alert('Debes seleccionar una categoría.');
      return;
    }

    noteIdToModify === 0 ? postNewNote(newNote) : putNote({
      id: noteIdToModify,
      title: newNote.title,
      description: newNote.description,
      archived: newNote.archived,
      category: newNote.category
    });

    setNewNote({
      title: "",
      description: "",
      archived: false,
      category: {}
    });

    handleClose();
  };

  const categoriesLabels = () => {
    const categoryInputContainer = categories!.map(
      category => {
        return (
          <label key={category.id} >
            <input
              className='radio-input'
              type='radio'
              name='category'
              value={category.id}
              checked={newNote.category.name === category.name}
              onChange={handleCategoryChange}
              required
            />
            {category.name}
          </label>
        )
      }
    );

    return categoryInputContainer;
  }

  return (
    <div className="popup-container" style={isFormDisplayed ? { left: '0' } : { left: '-100%' }}>
      <div className="popup-form-subcontainer">
        <form className='popup-form' onSubmit={handleSubmit}>
          <div className='input-container'>
            <h3 className='subtitle-input'>Title</h3>
            <input className='text-input'
              type="text"
              name="title"
              value={newNote.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className='input-container'>
            <h3 className='subtitle-input'>Description</h3>
            <input className='text-input'
              type='text'
              name="description"
              value={newNote.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className='input-container'>
            <h3 className='subtitle-input'>Category</h3>
            <div id='categories-input'>
              {categoriesLabels()}
            </div>
          </div>

          <div className='input-container btns-form'>
            <button type="submit" className='btn-form' id='btn-accept'>Accept</button>
            <button type="button" className='btn-form' id='btn-cancel' onClick={() => { handleClose(); }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}