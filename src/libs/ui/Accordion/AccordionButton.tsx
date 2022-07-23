import { FunctionComponent, ReactNode, useCallback } from "react";
import { useAccordionContext } from "./AccordionContext";

type AccordionButtonProps = {
  children: ReactNode;
  label?: string;
  className?: string;
};

const AccordionButton: FunctionComponent<AccordionButtonProps> = ({
  label,
  children,
  className,
}) => {
  const { changeSelectedItem } = useAccordionContext();

  const accordionButtonClickHandler = useCallback(() => {
    changeSelectedItem(label || "");
  }, [changeSelectedItem, label]);

  return (
    <div
      onClick={accordionButtonClickHandler}
      className={`accordion-button ${className}`}
    >
      {children}
    </div>
  );
};

export default AccordionButton;
