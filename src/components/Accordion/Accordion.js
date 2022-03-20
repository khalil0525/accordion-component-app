import React, { useState } from "react";
import styles from "./Accordion.module.css";
import AccordionItem from "./AccordionItem";

const Accordion = (props) => {
  const [openItem, setOpenItem] = useState(true);
  return (
    <div className="Accordion">
      <AccordionItem />
      <AccordionItem />
      <AccordionItem />
    </div>
  );
};

export default Accordion;
