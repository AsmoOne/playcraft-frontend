import { useState } from "react";

import { STYLES } from "../../utils/constants";

type AccordionItemHeadingPropsT = {
  id: string;
  title: string;
  onClick: () => void;
};

const AccordionItemHeading = ({ id, title, onClick }: AccordionItemHeadingPropsT) => {
  return (
    <button className="mb-0 px-5 py-5 shadow w-full rounded" id={id} onClick={onClick}>
      <div
        className="relative flex items-center w-full h-full font-semibold text-xl text-left transition-all ease-in cursor-pointer rounded-t-1"
      >
        <span>{title}</span>
      </div>
    </button>
  );
};

type AccordionItemContentPropsT = {
  children: React.ReactNode;
  isOpen: boolean;
  id: string;
  className?: string;
};

const AccordionItemContent = ({ children, isOpen, id, className }: AccordionItemContentPropsT) => {
  return (
    <div
      id={id}
      className={`bg-slate-50 rounded overflow-hidden transition-height duration-300 ease-in-out ${isOpen ? "h-auto" : "h-0"} ${className}`}
      style={{ maxHeight: isOpen ? '1000px' : '0' }}
    >
      { children }
    </div>
  );
};

type AccordionItemPropsT = {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: (id: string) => void;
};

export const AccordionItem = ({ id, title, children, isOpen, onToggle }: AccordionItemPropsT) => {
  return (
    <div className={`relative mb-3`} id={`accordion-item-${id}`}>
      <AccordionItemHeading
        id={`accordion-item-heading-${id}`}
        title={title}
        onClick={() => onToggle(id)}
      />
      <AccordionItemContent isOpen={isOpen} id={`accordion-item-content-${id}`} className="accordion-item-content">
        {children}
      </AccordionItemContent>
    </div>
  );
};

type AccordionPropsT = {
  title: string;
  questions: any[];
};

export const Accordion = ({ title, questions }: AccordionPropsT) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const onToggle = (id: string) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <div>
      <h2 className={`${STYLES.H2} mb-10 mt-20`}>{title}</h2>

      {questions.map(({ id, title, content }, index) => (
        <AccordionItem
          id={id}
          title={title}
          key={`${index}-${id}`}
          isOpen={activeId === id}
          onToggle={onToggle}
        >
          <div className="p-4 text-base leading-normal text-blue-gray-500/80">
            {content}
          </div>
        </AccordionItem>
      ))}
    </div>
  );
};
