export class Health {
  static readonly MIN_HEALTH = 0

  static readonly MAX_HEALTH = 1000

  constructor(private readonly health: number) {
    if (health < Health.MIN_HEALTH || health > Health.MAX_HEALTH)
      throw new Error("Invalid health")
  }

  isAlive() {
    return this.health > Health.MIN_HEALTH
  }

  sub(amount: number) {
    const newHealth = Math.max(Health.MIN_HEALTH, this.health - amount)

    return new Health(newHealth)
  }

  add(amount: number) {
    const newHealth = Math.min(Health.MAX_HEALTH, this.health + amount)

    return new Health(newHealth)
  }
}
