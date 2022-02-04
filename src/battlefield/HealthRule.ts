import { Character } from "../characters/Character"
import { BattleOptions } from "./BattleOptions"

export interface HealthRule {
  apply(atacker: Character, defender: Character, options: BattleOptions): number
}
