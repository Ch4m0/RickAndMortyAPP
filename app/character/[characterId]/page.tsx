'use client';
import CharacterDetails from "@/app/ui/characterDetail/characterDetails";
import CharacterImage from "@/app/ui/characterDetail/characterImage/characterImage";
import styles from "./page.module.scss";
import React, { useEffect, useState } from "react";
import { getOnlyCharacter } from "@/actions/chracters";
import { CharacterData } from "@/types/character";
import { updateLocalStorage } from "@/lib/utils";




export default function Page({
  params
}: {
  params: { characterId: number };
}) {

  const [characterData, setCharacterData] = useState<CharacterData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOnlyCharacter(params.characterId) as CharacterData;
        setCharacterData(data);
        updateLocalStorage(data);

      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    fetchData();
  }, [params.characterId]);

  if (!characterData) {
    return <div>Loading...</div>;
  }

  const { photo, personalData, origin, location } = characterData;


   return (
    <article className={styles.container}>
      <section className={styles.container__imageSection}>
        <CharacterImage photo={photo} name={personalData?.name} />
      </section>
      <section className={styles.container__detailsSection}>
        <CharacterDetails data={personalData} title="Personal info" />
        <CharacterDetails data={origin} title="Origin" />
        <CharacterDetails data={location} title="Location" />
      </section>
    </article>
  );
}
