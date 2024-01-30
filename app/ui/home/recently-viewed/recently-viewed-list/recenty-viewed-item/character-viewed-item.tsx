import React from 'react';
import styles from './character-viewed-item.module.scss'

interface CharacterItemProps {
  name: string;
  imageSrc: string;
}

const CharacterItemComponent: React.FC<CharacterItemProps> = ({ name, imageSrc }) => {
  return (
    <div className={styles.characterItem}>
      <img
        alt={name}
        className={styles.characterItem__image}
        height="50"
        src={imageSrc}
        style={{
          aspectRatio: "50/50",
          objectFit: "cover",
        }}
        width="50"
      />
      <div>
        <h3 className={styles.characterItem__name}>{name}</h3>
      </div>
    </div>
  );
};

export default CharacterItemComponent;
