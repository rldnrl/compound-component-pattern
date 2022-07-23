import { createContext, useContext } from "react";

export type AccordionContextType = {
  activeItem: string;
  changeSelectedItem: (item: string) => void;
};

const AccordionContext = createContext<AccordionContextType>({
  activeItem: "",
  changeSelectedItem: () => {},
});

export const useAccordionContext = () => useContext(AccordionContext);

export default AccordionContext;
