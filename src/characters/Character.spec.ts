import { Character } from "./Character"
import { Health } from "./Health"
import { Level } from "./Level"

describe("Character", () => {
  let character: Character

  it("when creating a character with negative health throws an error", () => {
    expect(() => new Character(new Health(-1))).toThrowError()
  })

  describe("when a character with health is created", () => {
    beforeEach(() => {
      character = new Character()
    })

    describe("and we ask if he/she is alive", () => {
      it("returns true", () => {
        expect(character.isAlive()).toEqual(true)
      })
    })

    describe("and we attack another character", () => {
      let anotherCharacter: Character

      beforeEach(() => {
        anotherCharacter = new Character()
      })

      it("doesn't kill the character if the damage amount is less than its current health", () => {
        const attackedCharacter = character.attack(anotherCharacter, 100)

        expect(attackedCharacter.isAlive()).toEqual(true)
      })

      it("kills the character if the damage amount is less than its current health", () => {
        const attackedCharacter = character.attack(anotherCharacter, 7_000)

        expect(attackedCharacter.isAlive()).toEqual(false)
      })
    })

    describe("and we heal a dead character", () => {
      let deadCharacter: Character

      beforeEach(() => {
        deadCharacter = new Character(new Health(0), new Level(1))
      })

      it("if character is dead, we cannot heal it", () => {
        const healedCharacter = character.heal(deadCharacter, 1_000)

        expect(healedCharacter.isAlive()).toEqual(false)
      })
    })
  })

  describe('if we heal a character more than max health', () => {
    let healedCharacter: Character

    beforeEach(() => {
      healedCharacter = new Character()
    })

    it('the health remains equal', () => {
      healedCharacter = character.heal(healedCharacter, 1_000)
      healedCharacter = character.attack(healedCharacter, 1_000)

      expect(healedCharacter.isAlive()).toEqual(false)
    })
  })


  describe("when a character with 0 health is created", () => {
    beforeEach(() => {
      character = new Character(new Health(0))
    })

    describe("and we ask if he/she is alive", () => {
      it("returns false", () => {
        expect(character.isAlive()).toEqual(false)
      })
    })
  })
})
