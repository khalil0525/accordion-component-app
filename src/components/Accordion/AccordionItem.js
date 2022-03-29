import React from "react";

import styles from "./AccordionItem.module.css";

const AccordionItem = (props) => {
  // This handler is executed when the button on an AccordionItem is click and will send the AccordionItem's number value to Accordion.
  // This is used to set the state in Accordion and that state is passed back down via props, causing the AccordionItems to re-render
  const buttonClickHandler = (event) => {
    // This number prop is used to set the state of the openItem variable in Accordion. That information is then passed down to the AccordionItems
    // To close the AccordionItem tabs that are not equivalent to the current open AccordionItem. If the AccordionItem was already opened, it will be closed..
    props.onClickAccordion(props.number);
  };

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
