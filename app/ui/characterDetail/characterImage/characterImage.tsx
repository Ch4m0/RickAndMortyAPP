import React from "react";
import styles from "./characterImage.module.scss";
import Image from "next/image";

const CharacterImage = ({ photo, name }: { photo: string; name: string }) => {
  return (
    <div className={styles.characterImage}>
      <Image
        alt={name}
        className={styles.image}
        height={600}
        src={photo}
        width={600}
      />
    </div>
  );
};

export default CharacterImage;
