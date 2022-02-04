import { Character } from "../../characters/Character"
import { BattleOptions } from "../BattleOptions"
import { HealthRule } from "../HealthRule"

export class DeadhCharacterRule implements HealthRule {
  apply(
    _attacker: Character,
    defender: Character,
    { amount }: BattleOptions,
  ): number {
    return defender.isAlive() ? amount : 0
  }
}
