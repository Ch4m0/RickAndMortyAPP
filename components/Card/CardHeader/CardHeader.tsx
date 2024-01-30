import React from "react";
import styles from "./CardHeader.module.scss";

const CardHeader = ({ children }: { children: React.ReactNode}) => {
  return <div className={styles.cardHeader}>{children}</div>;
};

export default CardHeader;
