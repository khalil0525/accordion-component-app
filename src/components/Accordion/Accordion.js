import React, { useState } from "react";
import styles from "./Accordion.module.css";
import AccordionItem from "./AccordionItem";

const Accordion = (props) => {
  // This piece of state is used to determine which accordion item is open and which to close when opening a given accordion item
  const [openItem, setOpenItem] = useState("");
  // The function will control the state for the accordion. We only want 1 tab open at once.
  // It will be passed as props to the AccordionItem to pull up the AccordionItem number that is currently open.
  const accordionItemHandler = (accordionItemNumber) => {
    // Here we check if the current openItem value is equivalent to the accordionItemNumber that was sent from the clicked AccordionItem.
    // If it is, we will close it.
    if (openItem === accordionItemNumber) {
      setOpenItem("");
      return;
    }
    // Here we set the openItem to the accordionItem that was clicked.
    // The logic for opening and closing AccordionItem tabs is in AccordionItem.
    // THe state variable we set here is passed down as a prop.
    // 1) If no tab is open, we simply just open the tab we selected
    //2) If a tab is open, we close it and open the selected tab.
    setOpenItem(accordionItemNumber);
  };

  //********************JSX*************************
  return (
    //Here we are using modules to work with CSS rules
    <div className={styles.accordion}>
      <AccordionItem
        number="1"
        title="Something"
        description="some text here"
        // currentOpenItem is a prop that will be used to communicate between the AccordionItems which tab is currently open.
        currentOpenItem={openItem}
        // onClickAccordion is a prop function that is passed so that we can change the state of openItem
        onClickAccordion={accordionItemHandler}
      />
      <AccordionItem
        number="2"
        title="Something"
        description="some text here"
        currentOpenItem={openItem}
        onClickAccordion={accordionItemHandler}
      />
      <AccordionItem
        number="3"
        title="Something"
        description="some text here"
        currentOpenItem={openItem}
        onClickAccordion={accordionItemHandler}
      />
    </div>
  );
};

export default Accordion;
