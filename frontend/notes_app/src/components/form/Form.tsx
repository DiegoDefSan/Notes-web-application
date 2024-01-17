import Category from "../../interfaces/category"
import { AddButton } from "./add_button/AddButton"
import { FilterForm } from "./filter_form/FilterForm"
import './form.css'

interface FilterInterface {
  category: string,
  view: string
}

interface Props {
  categories: Category[],
  filterNotes: FilterInterface,
  setFilterNotes: React.Dispatch<React.SetStateAction<FilterInterface>>
}

export const Form = (props: Props) => {
  return (
    <section className="main-section" id="note-form">
      <AddButton />
      <FilterForm
        categories={props.categories}
        filterNotes={props.filterNotes}
        setFilterNotes={props.setFilterNotes} />
    </section>
  )
}