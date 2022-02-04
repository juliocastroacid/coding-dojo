import { Health } from "./Health"
import { Level } from "./Level"

export class Character {
  constructor(
    private readonly health: Health = new Health(1000),
    private readonly level: Level = new Level(1),
  ) {}

  isAlive() {
    return this.health.isAlive()
  }

  attack(character: Character, damageAmount: number) {
    const newHealth = this.health.sub(damageAmount)

    return new Character(newHealth, character.level)
  }

  heal(character: Character, healAmount: number) {
    if(!character.isAlive()) return character
    
    const newHealth = this.health.add(healAmount)

    return new Character(newHealth, character.level)
  }

  hasLevel(level: Level) {
    return this.level.equals(level)
  }
}
