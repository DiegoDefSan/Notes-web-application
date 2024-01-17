import { createContext, useState } from "react";

export const ModifyingNoteContext = createContext({});

export const ModifyingNoteProvider = ({ children }: any) => {

  const [noteIdToModify, setNoteIdToModify] = useState(0);

  return (
    <ModifyingNoteContext.Provider value={{ noteIdToModify, setNoteIdToModify }}>
      {children}
    </ModifyingNoteContext.Provider>
  )
}