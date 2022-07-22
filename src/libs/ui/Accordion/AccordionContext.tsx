import { createContext, useContext } from "react";

export type AccordionContextType = {
  activeItem: string;
  changeSelectedItem: (item: string) => void;
};

const AccordionContext = createContext<AccordionContextType>({
  activeItem: "",
  changeSelectedItem: () => {},
});

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Error in creating the context");
  }
  return context;
};

export default AccordionContext;
