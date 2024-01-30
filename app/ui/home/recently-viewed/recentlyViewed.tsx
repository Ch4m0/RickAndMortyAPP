import React from 'react';
import styles from './recentlyViewed.module.scss'

interface RecentlyViewedProps {
  title: string;
  children: React.ReactNode;
}

const RecentlyViewedComponent: React.FC<RecentlyViewedProps> = ({ title, children }) => {
  return (
    <div>
      <h2 className={styles.recentlyViewed__title}>{title}</h2>
      <div className={styles.recentlyViewed__grid}>
        {children}
      </div>
    </div>
  );
};

export default RecentlyViewedComponent;
