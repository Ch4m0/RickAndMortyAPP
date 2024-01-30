import { useEffect, useState } from "react";

interface RecentlyCharacter {
  id: number;
  name: string;
  imageSrc: string;
}

function useRecentlyViewedCharacters(): RecentlyCharacter[] {
  const [recentlyViewedCharacters, setRecentlyViewedCharacters] = useState<RecentlyCharacter[]>([]);

  useEffect(() => {
    const recentlyViewedList = JSON.parse(localStorage.getItem("characters") || "[]");

    const formattedList: RecentlyCharacter[] = recentlyViewedList.map((character: { id: number; photo: string; personalData: { name: string; } }) => ({
      id: character.id,
      name: character.personalData.name,
      imageSrc: character.photo,
    }));

    setRecentlyViewedCharacters(formattedList);
  }, []);

  return recentlyViewedCharacters;
}

export default useRecentlyViewedCharacters;
