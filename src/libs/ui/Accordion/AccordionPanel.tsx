import { FunctionComponent, ReactNode } from "react";
import { useAccordionContext } from "./AccordionContext";

type AccordionPanelProps = {
  children: ReactNode;
  label?: string;
  className?: string;
};

const AccordionPanel: FunctionComponent<AccordionPanelProps> = ({
  children,
  label,
  className,
}) => {
  const { activeItem } = useAccordionContext();

  const panelStyles = [
    "accordion-panel",
    label === activeItem ? "show-item" : "hide-item",
    className,
  ].join(" ");

  return <div className={panelStyles}>{children}</div>;
};

export default AccordionPanel;
