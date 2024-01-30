'use client'
import React from "react";
import CharacterItemComponent from "./recenty-viewed-item/character-viewed-item";
import useRecentlyViewedCharacters from "@/hooks/useRecentlyViewedCharacters";

const RecentlyViewedListComponent = () => {

  const currentList = useRecentlyViewedCharacters()
 
  return (
    <>
      {currentList.map((character: any) => (
        <CharacterItemComponent
          name={character.name}
          imageSrc={character.imageSrc}
          key={character.name}
        />
      ))}
    </>
  );
};

export default RecentlyViewedListComponent;
