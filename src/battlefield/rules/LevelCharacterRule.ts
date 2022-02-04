import { Character } from "../../characters/Character"
import { Level } from "../../characters/Level"
import { BattleOptions } from "../BattleOptions"
import { HealthRule } from "../HealthRule"

export class LevelCharacterRule implements HealthRule {
  constructor(
    private readonly percentageToApply: number = 50,
    private readonly conditionToApply: (level: Level) => boolean,
  ) {}

  apply(
    _atacker: Character,
    defender: Character,
    { amount }: BattleOptions,
  ): number {
    return this.conditionToApply(defender.getLevel())
      ? amount + amount * this.percentageToApply
      : amount
  }
}
