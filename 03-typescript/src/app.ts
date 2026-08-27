import { findHeroByID } from "./services/service.hero";

const hero = findHeroByID(2)

console.log(hero?.name ?? 'No hero found');