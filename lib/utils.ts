import { CharacterData, PersonalData, ResponseCharacterData } from "@/types/character";

export const generatePagination = (currentPage: number, totalPages: number) => {

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages - 1, totalPages];
    }
  
    if (currentPage >= totalPages - 2) {
      return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }
  
    
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };
  

  export const getPersonalData = async (jsonData: ResponseCharacterData): Promise<CharacterData> => {
    const {
        id,
        name,
        status,
        species,
        type,
        gender,
        origin: { name: originName, url: originUrl },
        location: { name: locationName, url: locationUrl },
        image
    } = jsonData;

    const personalData: CharacterData = {
        id,
        photo: image,
        personalData: {
            name: name,
            status: status,
            species: species,
            type: type,
            gender: gender
        },
        origin: {
            name: originName,
            url: originUrl
        },
        location: {
            name: locationName,
            url: locationUrl
        }
    };

    return personalData;
} 


export const updateLocalStorage = (data: CharacterData) =>  {
  const currentList = JSON.parse(localStorage?.getItem("characters") || "[]");

  const existingCharacterIndex = currentList.findIndex(
    (character: { id: number; photo: string; personalData: PersonalData }) =>
      character.id === data.id
  );

  if (existingCharacterIndex === -1) {
    currentList.unshift({ id: data.id, photo: data.photo, personalData: data.personalData });
  }


  const limitedList = currentList.slice(0, 5);

  localStorage?.setItem("characters", JSON.stringify(limitedList));
}
