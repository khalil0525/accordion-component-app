import React, { useState } from "react";

import styles from "./AccordionItem.module.css";

const AccordionItem = (props) => {
  // This state controls whether the accordion tab is open or not. It's false/Closed by default
  // const [isOpen, setIsOpen] = useState(false);
  //This handler will set the state of isOpen to false or true and call the onClickAccordion fucntion, passed in props from Accordion, to pass up the components number prop.
  // const isOpen = false;
  const buttonClickHandler = (event) => {
    // setIsOpen((prevState) => !prevState);
    // This number prop is used to set the state of the openItem variable in Accordion. That information is then passed down to the AccordionItems
    // To close the AccordionItem tabs that are not equivalent to the current openItem value.
    props.onClickAccordion(props.number);
  };
  // This if statement checks if the AccordionItem is currently open and if it is the proper AccordionItem tab that's supposed to be open.
  // if (props.currentOpenItem === props.number) {
  //   // If an AccordionItem is currently open and isn't the currenOpenItem, we switch it's state to false to close it.
  //   isOpen = true;
  // }
  //********************JSX*************************
  return (
    <div
      className={`${styles["accordion-item"]} ${
        props.currentOpenItem === props.number && styles.open
      }`}
    >
      <p className={styles.number}>{props.number}</p>
      <p className={styles.text}>{props.title}</p>
      <button onClick={buttonClickHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.btn}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className={styles["hidden-box"]}>
        <p>{props.description}</p>
        <ul>
          <li>{props.specifications[0]}</li>
          <li>{props.specifications[1]}</li>
          <li>{props.specifications[2]}</li>
          <li>{props.specifications[3]}</li>
        </ul>
      </div>
    </div>
  );
};

export default AccordionItem;
