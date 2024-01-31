import jsonfile from "jsonfile";
import { pathFile } from "../database";
import { handleLowerCase } from "../utils/handleLowerCase";


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
        const lowerName = handleLowerCase(name) //aca lo que hace es transformar el nombre en la base de datos a minuscula
        const lowerNameCharacter = handleLowerCase(character.name)
        if(lowerNameCharacter.includes(lowerName) && character.hogwartsStudent === true){
            return character
        }
    })

    console.log(characters)
    return characters
}

const getCharacterByActor = (id: string): Character[] | undefined => {
    const data = getAllCharacters();

    const foundCharacter = data.find((character:Character) => { character.id === id })

    return foundCharacter
}

const showDataWand = (id: string): Character | undefined => {
    const data = getAllCharacters();

    const foundCharacter = data.find((character:Character) => character.id);
    if(foundCharacter){
        return foundCharacter.wand;
    }
}

const filterByHouse = (house: string): Character[] => {
    const data = getAllCharacters()
    const lowerHouse = handleLowerCase(house)

    const filteredCharactersByHouse = data.filter((character:Character) => {
        const lowerCharacter = handleLowerCase(character.house)
        if(lowerCharacter.includes(lowerHouse)){
            return character;
        }
    })

    return filteredCharactersByHouse
}