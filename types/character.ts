export interface Character {
    id: number;
    name: string;
    image: string;
}

export interface Origin {
    name: string;
    url: string;
}

export interface Location {
    name: string;
    url: string;
}

export interface PersonalData {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
}

export interface CharacterData {
    id?: number;
    photo: string;
    personalData: PersonalData;
    origin: Origin;
    location: Location;
}

export interface ResponseCharacterData {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}