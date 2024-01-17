import Category from "../../../interfaces/category"

interface FilterInterface {
  category: string,
  view: string
}

interface Props {
  categories: Category[],
  filterNotes: FilterInterface,
  setFilterNotes: React.Dispatch<React.SetStateAction<FilterInterface>>
}
export const FilterForm = (props: Props) => {

  const {
    categories,
  } = props

  const changeSelectionHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    var categoryName = e.target.value;

    props.setFilterNotes({
      ...(props.filterNotes),
      category: categoryName
    })
  }

  const changeRadioInputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    var viewType = e.target.value;

    props.setFilterNotes({
      ...(props.filterNotes),
      view: viewType
    })
  }

  const radioInput = (id: string, name: string, value: string, text: string) => {
    return (
      <div className="radio-input-container">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={props.filterNotes.view === value}
          onChange={changeRadioInputHandle}
        />
        <label htmlFor={id}>{text}</label>
      </div>
    )
  }

  const categorySelectionContainer = () => {
    var categoryOptions = categories?.map(
      category => <option
        key={category.id}
        value={category.name}
      >{category.name}</option>
    )

    categoryOptions?.unshift(
      <option key={0} value="All">All</option>
    )

    return (
      <select id="category-select" onChange={changeSelectionHandle} >
        {categoryOptions}
      </select>
    )
  }

  return (
    <form className="filter-form-container">
      <div className="filter-subcontainer" id="category-filter">
        <p>Categories</p>
        <div className="category-options">
          {categorySelectionContainer()}
        </div>
      </div>
      <div className="filter-subcontainer" id="view-filter">
        <div className="view-options">
          {radioInput("view-actives", "options", "view-actives", "View actives")}
          {radioInput("view-archived", "options", "view-archived", "View archived")}
        </div>
      </div>
    </form>
  )
}