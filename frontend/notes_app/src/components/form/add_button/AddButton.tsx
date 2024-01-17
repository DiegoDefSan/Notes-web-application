import { useContext } from "react";
import { PopFormContext } from "../../../contexts/PopFormContext";
import { ModifyingNoteContext } from "../../../contexts/ModifyingNoteContext";

export const AddButton = () => {
  const { isFormDisplayed, setIsFormDisplayed }: any = useContext(PopFormContext);
  const { setNoteIdToModify }: any = useContext(ModifyingNoteContext);

  return (
    <div className='add-button-container'>
      <button className='circle' id='add-note-btn' onClick={() => {
        { setIsFormDisplayed(!isFormDisplayed); setNoteIdToModify(0); }
      }}>
        +
      </button>
      <h3>Add a note</h3>
    </div>
  )
}