import { Character } from "../../characters/Character"
import { BattleOptions } from "../BattleOptions"
import { HealthRule } from "../HealthRule"

export class OnlyItselfCharacterRule implements HealthRule {
  apply(
    attacker: Character,
    defender: Character,
    { amount }: BattleOptions,
  ): number {
    return attacker === defender ? amount : 0
  }
}
