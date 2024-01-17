import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { NoteContainer } from "./note_container/NoteContainer";

import './notes_section.css'
import { useGetNotes } from "../../services/hooks/notes/useGetNotes";

interface FilterInterface {
  category: string,
  view: string
}

export const NoteSection = (props: FilterInterface) => {

  const {
    data: notesDb,
    isLoading: isLoadingNotes
  } = useGetNotes();

  if (isLoadingNotes) {
    return <div>Loading...</div>
  }

  const filterNotesInComponents = () => {
    var notes = notesDb!;

    const filteredNotes = notes.filter(
      note => {
        return (props.view === "view-actives" ? !note.archived : note.archived) &&
          (props.category !== "All" ? note.category.name === props.category : note.category)
      }
    )

    var notesComponent = filteredNotes.map(
      note => <NoteContainer
        key={note.id}
        id={note.id}
        title={note.title}
        description={note.description}
        archived={note.archived}
        category={note.category} />
    )

    return notesComponent
  }



  return (
    <section className="main-section" id="notes-section">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 1, 660: 2, 960: 3, 1360: 4, 1660: 5 }}
      >
        <Masonry>{filterNotesInComponents()}</Masonry>
      </ResponsiveMasonry>
    </section>
  )
}