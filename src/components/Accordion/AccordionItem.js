import React, { useState } from "react";

import styles from "./AccordionItem.module.css";

const AccordionItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles["accordion-item"]} ${isOpen && styles.open}`}>
      <div className={styles["accordion-item--heading"]}>
        <p>{props.number}</p>
        <p>{props.title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="btn"
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
      </div>
      <p>{props.description}</p>
      <ul>
        <li>adipisicing elit. Maxime nihil reiciendis officia</li>
        <li>adipisicing elit. Maxime nihil reiciendis officia</li>
        <li>adipisicing elit. Maxime nihil reiciendis officia</li>
        <li>adipisicing elit. Maxime nihil reiciendis officia</li>
      </ul>
    </div>
  );
};

export default AccordionItem;
