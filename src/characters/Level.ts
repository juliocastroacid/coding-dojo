export class Level {
  constructor(private readonly level: number) {
    if (level < 1) throw new Error("Invalid level")
  }

  equals(level: Level) {
    return this === level
  }

  isGreater(level: Level) {
    return level.level > this.level
  }

  isLower(level: Level) {
    return level.level < this.level
  }

  distance(level: Level) {
    return Math.abs(level.level - this.level)
  }
}
