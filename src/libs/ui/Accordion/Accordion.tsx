import { FunctionComponent, ReactNode, useCallback, useState } from "react";
import AccordionContext from "./AccordionContext";

import "./Accordion.style.css";

export type AccrodionProps = {
  children: ReactNode | ReactNode[];
};

const Accordion: FunctionComponent<AccrodionProps> = ({ children }) => {
  const [activeItem, setActiveItem] = useState("");

  const changeActiveItem = useCallback(
    (value: string) => {
      if (activeItem !== value) setActiveItem(value);
    },
    [setActiveItem, activeItem]
  );

  return (
    <AccordionContext.Provider
      value={{ activeItem, changeSelectedItem: changeActiveItem }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;
