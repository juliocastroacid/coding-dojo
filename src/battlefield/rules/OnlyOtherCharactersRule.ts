import { Character } from "../../characters/Character"
import { BattleOptions } from "../BattleOptions"
import { HealthRule } from "../HealthRule"

export class OnlyOtherCharactersRule implements HealthRule {
  apply(
    atacker: Character,
    defender: Character,
    { amount }: BattleOptions,
  ): number {
    return atacker !== defender ? amount : 0
  }
}