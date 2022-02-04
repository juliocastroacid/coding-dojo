import { Character } from "../characters/Character";

export interface HealthRule {
    apply(atacker: Character, defender: Character, amount: number): number 
}