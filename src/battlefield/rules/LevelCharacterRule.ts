import { Character } from "../../characters/Character"
import { Level } from "../../characters/Level"
import { BattleOptions } from "../BattleOptions"
import { HealthRule } from "../HealthRule"

export class LevelCharacterRule implements HealthRule {
  constructor(
    private readonly percentageToApply: number = 50,
    private readonly conditionToApply: (
      attackerLevel: Level,
      defenderLevel: Level,
    ) => boolean,
  ) {}

  apply(
    attacker: Character,
    defender: Character,
    { amount }: BattleOptions,
  ): number {
    return this.conditionToApply(attacker.getLevel(), defender.getLevel())
      ? amount + amount * this.percentageToApply
      : amount
  }
}
