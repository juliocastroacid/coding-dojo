import { Character } from "../../characters/Character"
import { BattleOptions } from "../BattleOptions"
import { HealthRule } from "../HealthRule"

export class RangeCharacterRule implements HealthRule {
  apply(
    attacker: Character,
    _defender: Character,
    { amount, distance }: BattleOptions,
  ): number {
    return attacker.isInRange(distance) ? amount : 0
  }
}
