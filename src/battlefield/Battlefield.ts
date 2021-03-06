import { Character } from "../characters/Character"
import { BattleOptions } from "./BattleOptions"
import { HealthRule } from "./HealthRule"
import { DeadhCharacterRule } from "./rules/DeadCharacterRule"
import { LevelCharacterRule } from "./rules/LevelCharacterRule"
import { OnlyItselfCharacterRule } from "./rules/OnlyItselfCharacterRule"
import { OnlyOtherCharactersRule } from "./rules/OnlyOtherCharactersRule"
import { RangeCharacterRule } from "./rules/RangeCharacterRule"

export class Battlefield {
  constructor(
    private readonly attackRules: HealthRule[] = [
      new OnlyOtherCharactersRule(),
      new RangeCharacterRule(),
      new LevelCharacterRule(
        50,
        (attackerLevel, defenderLevel) =>
          attackerLevel.isGreater(defenderLevel) &&
          attackerLevel.distance(defenderLevel) > 5,
      ),
      new LevelCharacterRule(
        -50,
        (attackerLevel, defenderLevel) =>
          attackerLevel.isLower(defenderLevel) &&
          attackerLevel.distance(defenderLevel) >= 5,
      ),
    ],
    private readonly healRules: HealthRule[] = [
      new DeadhCharacterRule(),
      new OnlyItselfCharacterRule(),
    ],
  ) {}

  attack(attacker: Character, defender: Character, options: BattleOptions) {
    let finalDamage = options.amount

    this.attackRules.forEach((rule) => {
      finalDamage = rule.apply(attacker, defender, options)
    })

    return attacker.attack(defender, finalDamage)
  }

  heal(attacker: Character, defender: Character, options: BattleOptions) {
    let finalHealing = options.amount

    this.healRules.forEach((rule) => {
      finalHealing = rule.apply(attacker, defender, options)
    })

    return attacker.heal(defender, finalHealing)
  }
}
