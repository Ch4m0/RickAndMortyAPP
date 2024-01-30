import { getPersonalData } from "@/lib/utils";

export async function getCharacters(name: string, currentPage: number) {
  try {
    const res =
      await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${currentPage}
        `);
    const data = res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getOnlyCharacter(characterId: number) {
  try {
    const res =
      await fetch(`https://rickandmortyapi.com/api/character/${characterId}
        `);
    const data = res.json();
    const characterDataTransform = getPersonalData(await data);
    return characterDataTransform;

  } catch (error) {
    return error;
  }
}
