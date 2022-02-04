import { Character } from "../../characters/Character";
import { HealthRule } from "../HealthRule";

export class DeadhCharacterRule implements HealthRule {
    apply(atacker: Character, defender: Character, amount: number): number {
        return defender.isAlive() ? amount : 0
    }
    
}