import React, { useState } from "react";
import styles from "./Accordion.module.css";
import AccordionItem from "./AccordionItem";

const Accordion = (props) => {
  // This piece of state is used to determine which accordion item is open and which to close when opening a given accordion item
  const [openItem, setOpenItem] = useState("");
  // The function will control the state for the accordion. We only want 1 tab open at once.
  // It will be passed as props to the AccordionItem to determine which item to open and which item needs to be closed(if there was one already open)
  const accordionItemHandler = (accordionItemNumber) => {
    // Here we check if the current openItem value is equivalent to the accordionItemNumber that was sent from the clicked AccordionItem.
    // If it is, we will close it because it was already opened.
    if (openItem === accordionItemNumber) {
      setOpenItem("");
      return;
    }
    // Here we set the openItem to the accordionItem that was clicked.
    // The logic for opening and closing AccordionItem tabs is in AccordionItem.
    // THe state variable we set here is passed down as a prop to all AccordionItem.
    // 1) If an item was previously open that is not equal to the current state item open, we close it and open the new current open item.
    //2) If no item was previously open, open the current state open item.
    setOpenItem(accordionItemNumber);
  };

  // Here we dynamically render the AccordionItems using data that was passed to us from the App component.
  let accordionItemGenerator = props.data.map((item) => {
    return (
      <AccordionItem
        key={item.number}
        number={item.number}
        title={item.title}
        description={item.description}
        specifications={item.specifications}
        // currentOpenItem is a prop that will be used to communicate between the AccordionItems which tab is currently open.
        currentOpenItem={openItem}
        // onClickAccordion is a prop function that is passed so that we can change the state of openItem
        onClickAccordion={accordionItemHandler}
      />
    );
  });

  //********************JSX*************************
  return (
    // Here we are using modules to work with CSS rules
    // <div className={styles.accordion}>
    //   <AccordionItem
    //     number={item1.number}
    //     title={item1.title}
    //     description={item1.description}
    //     specifications={item1.specifications}
    //     // currentOpenItem is a prop that will be used to communicate between the AccordionItems which tab is currently open.
    //     currentOpenItem={openItem}
    //     // onClickAccordion is a prop function that is passed so that we can change the state of openItem
    //     onClickAccordion={accordionItemHandler}
    //   />
    //   <AccordionItem
    //     number={item2.number}
    //     title={item2.title}
    //     description={item2.description}
    //     specifications={item2.specifications}
    //     currentOpenItem={openItem}
    //     onClickAccordion={accordionItemHandler}
    //   />
    //   <AccordionItem
    //     number={item3.number}
    //     title={item3.title}
    //     description={item3.description}
    //     specifications={item3.specifications}
    //     currentOpenItem={openItem}
    //     onClickAccordion={accordionItemHandler}
    //   />
    // </div>

    //We slimmed down the code to one line by dynamically rendering the AccordionItems.
    <div className={styles.accordion}>{accordionItemGenerator}</div>
  );
};

export default Accordion;
