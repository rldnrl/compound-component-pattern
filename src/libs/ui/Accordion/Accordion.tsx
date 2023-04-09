import {
  FunctionComponent,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import AccordionContext from "./AccordionContext";

import "./Accordion.style.css";

export type AccordionProps = {
  children: ReactNode | ReactNode[];
};

const Accordion: FunctionComponent<AccordionProps> = ({ children }) => {
  const [activeItem, setActiveItem] = useState("");

  const changeActiveItem = useCallback(
    (value: string) => {
      if (activeItem !== value) setActiveItem(value);
      if (activeItem === value) setActiveItem("");
    },
    [setActiveItem, activeItem]
  );

  const providerValue = useMemo(
    () => ({ activeItem, changeSelectedItem: changeActiveItem }),
    [activeItem, changeActiveItem]
  );

  return (
    <AccordionContext.Provider value={providerValue}>
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;
