import React from "react";
import styles from "./CardContent.module.scss";

const CardContent = ({ children }: { children: React.ReactNode}) => {
  return <div className={styles.cardContent}>{children}</div>;
};

export default CardContent;
