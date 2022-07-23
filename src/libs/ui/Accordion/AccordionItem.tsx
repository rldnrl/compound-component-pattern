import {
  Children,
  cloneElement,
  FunctionComponent,
  isValidElement,
  ReactNode,
} from "react";

type AccordionItemProps = {
  children: ReactNode[];
  label: string;
  className?: string;
};

export const AccordionItem: FunctionComponent<AccordionItemProps> = ({
  children,
  label,
  className,
}) => {
  const childrenArray = Children.toArray(children);

  // label is used to distinguish between each accordion element.
  // Adding the label prop to the children of accordionItem along with other props.
  const accordionItemChildren = childrenArray.map((child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        ...child.props,
        label,
      });
    }
    return null;
  });

  return <div className={className}>{accordionItemChildren}</div>;
};

export default AccordionItem;
