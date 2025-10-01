import Character from '../src/classes/Character.js';

describe('Character methods', () => {
  let hero;

  beforeEach(() => {
    hero = new Character('Hero', 'Bowerman');
    hero.attack = 50;
    hero.defence = 20;
  });

  describe('levelUp()', () => {
    test('повышает уровень, улучшает stats и восстанавливает здоровье', () => {
      hero.health = 50;
      hero.levelUp();
      expect(hero.level).toBe(2);
      expect(hero.attack).toBe(Math.round(50 * 1.2));
      expect(hero.defence).toBe(Math.round(20 * 1.2));
      expect(hero.health).toBe(100);
    });

    test('выбрасывает ошибку, если персонаж мёртв', () => {
      hero.health = 0;
      expect(() => hero.levelUp()).toThrow(
        'Нельзя повысить уровень мёртвого персонажа!'
      );
    });
  });

  describe('damage(points)', () => {
    test('наносит урон с учётом защиты', () => {
      hero.damage(50); // 50 * (1 - 0.2) = 40
      expect(hero.health).toBe(60);
    });

    test('не наносит урон, если персонаж мёртв', () => {
      hero.health = 0;
      hero.damage(50);
      expect(hero.health).toBe(0);
    });

    test('здоровье не уходит ниже 0', () => {
      hero.damage(200);
      expect(hero.health).toBe(0);
    });
  });
});
