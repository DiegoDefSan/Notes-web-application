import Category from "./category";

interface Note {
  id?: number,
  title: string,
  description: string,
  archived: boolean,
  category: Category
}

export default Note;