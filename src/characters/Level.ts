export class Level {
  constructor(private readonly level: number) {
    if (level < 1) throw new Error("Invalid level")
  }
}
