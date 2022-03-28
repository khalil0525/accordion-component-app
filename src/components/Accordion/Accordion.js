import React, { useState } from "react";
import styles from "./Accordion.module.css";
import AccordionItem from "./AccordionItem";

const Accordion = (props) => {
  const [openItem, setOpenItem] = useState(true);
  return (
    <div className="Accordion">
      <AccordionItem
        number="1"
        title="Something"
        description="some text here"
      />
      <AccordionItem
        number="2"
        title="Something"
        description="some text here"
      />
      <AccordionItem
        number="3"
        title="Something"
        description="some text here"
      />
    </div>
  );
};

export default Accordion;
