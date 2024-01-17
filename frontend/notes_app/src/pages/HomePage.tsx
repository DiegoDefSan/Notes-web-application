import { useState } from "react"
import { Form } from "../components/form/Form"
import { Header } from "../components/header/Header"
import { NoteSection } from "../components/notes_section/note_section"
import { PopForm } from "../components/pop_form/PopForm"
import { useGetCategories } from "../services/hooks/categories/useGetCategories"
import './home_page.css'

export const HomePage = () => {

  const [filteringNotes, setFilteringNotes] = useState({
    category: "All",
    view: "view-actives"
  })

  const {
    data: categories,
    isLoading: isLoadingCategories
  } = useGetCategories();

  if (isLoadingCategories) {
    return <div>Loading...</div>
  }

  return (
    <>
      <PopForm categories={categories!} />
      <Header />
      <main className="main">
        <Form
          categories={categories!}
          filterNotes={filteringNotes}
          setFilterNotes={setFilteringNotes}
        />
        <NoteSection category={filteringNotes.category} view={filteringNotes.view} />
      </main>
    </>
  )
}