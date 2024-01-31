import jsonfile from "jsonfile";
import { pathFile } from "../database";


interface Character {
    id: string;
    name: string;
    alternate_names: string[];
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string | null;
    yearOfBirth: number | null;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: any;
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alternate_actors: string[];
    alive: boolean;
    image: string;

}

const getAllCharacters = () => jsonfile.readFileSync(pathFile)


const validateStudentCharacter = (name: string): Character[] => {
    const data = getAllCharacters();
    const characters: Character[] = data.filter((character:Character) =>{
        const lowerName = name.toLowerCase() //aca lo que hace es transformar el nombre en la base de datos a minuscula

        if(character.name.toLowerCase().includes(lowerName) && character.hogwartsStudent === true){
            return character
        }
    })

    console.log(characters)
    return characters
}

const getCharacterByActor = (actor: string): Character[] | undefined => {
    return [];
}

const showDataWand = (name: string): Character | undefined => {
    return ;
}

const filterByHouse = (house: string): Character[] => {
 return []
}