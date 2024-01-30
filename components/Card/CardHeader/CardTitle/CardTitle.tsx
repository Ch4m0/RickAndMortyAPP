import React from "react";
import styles from "./CardTitle.module.scss";

const CardTitle = ({ children }: { children: React.ReactNode}) => {
  return <h2 className={styles.cardTitle}>{children}</h2>;
};

export default CardTitle;
