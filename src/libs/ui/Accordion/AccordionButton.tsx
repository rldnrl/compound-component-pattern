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
    <div>
      <button
        onClick={accordionButtonClickHandler}
        className={`accordion-button ${className}`}
        style={{
          width: "100%",
          border: "none",
          padding: "0.5rem 1rem",
          fontSize: "18px",
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default AccordionButton;
