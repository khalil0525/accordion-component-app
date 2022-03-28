import React, { useState } from "react";

import styles from "./AccordionItem.module.css";

const AccordionItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonClickHandler = (event) => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`${styles["accordion-item"]} ${isOpen && styles.open} `}>
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
          <li>adipisicing elit. Maxime nihil reiciendis officia</li>
          <li>adipisicing elit. Maxime nihil reiciendis officia</li>
          <li>adipisicing elit. Maxime nihil reiciendis officia</li>
          <li>adipisicing elit. Maxime nihil reiciendis officia</li>
        </ul>
      </div>
    </div>
  );
};

export default AccordionItem;
