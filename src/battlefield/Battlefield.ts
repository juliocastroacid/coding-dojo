import { Character } from "../characters/Character";
import { HealthRule } from "./HealthRule";

export class Battlefield {
    constructor(
        private readonly characters: Character[] = [],
        private readonly healthRules: HealthRule[] = [] 
    ) {}


}