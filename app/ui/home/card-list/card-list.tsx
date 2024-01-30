import React, { Suspense } from "react";
import Card from "./card/card";
import styles from "./card-list.module.scss";
import { getCharacters } from "@/actions/chracters";
import { Character } from "@/types/character";
import Pagination from "./pagination/pagination";

const CardList = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const { results, info } = await getCharacters(query, currentPage);

  if (!results || !info) {
    return (
      <div className={styles.cardList}>
        <div className={styles.cardList__contain}>
          <p>No se encontraron coincidencias.</p>
        </div>
      </div>
    );
  }

  const totalPages = info && info.pages ? info.pages : 0;

  return (
    <div className={styles.cardList}>
      <div className={styles.cardList__contain}>
        {results.map((character: Character) => (
          <Card
            name={character.name}
            imageUrl={character.image}
            key={character.id}
            characterId={character.id}
          />
        ))}
      </div>

      {totalPages > 0 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default CardList;
