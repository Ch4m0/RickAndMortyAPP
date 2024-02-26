import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  imageUrl: string;
  characterId: number;
}

const Card: React.FC<CardProps> = ({ name, imageUrl, characterId }) => {
  return (
    <Link href={`/character/${characterId}`}>
      <div className={styles.card}>
        <Image
          className={styles.card__image}
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
        />
        <p className={styles.card__name}>{name}</p>
      </div>
    </Link>
  );
};

export default Card;
