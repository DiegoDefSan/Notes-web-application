import { createContext, useState } from "react";

export const PopFormContext = createContext({});

export const PopFormProvider = ({ children }: any) => {

  const [isFormDisplayed, setIsFormDisplayed] = useState(false);

  const handleClose = () => {
    setIsFormDisplayed(false);
  }

  return (
    <PopFormContext.Provider value={{ isFormDisplayed, setIsFormDisplayed, handleClose }}>
      {children}
    </PopFormContext.Provider>
  )
}