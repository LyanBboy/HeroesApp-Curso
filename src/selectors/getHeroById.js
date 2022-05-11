import { heroes } from "../data/heroes";

export const getHeroById = (heroid = '') => {

    return heroes.find( heroe => heroe.id === heroid );

}