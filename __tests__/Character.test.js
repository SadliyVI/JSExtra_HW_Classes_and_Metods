import Character from '../src/classes/Character.js';

describe('Character base class', () => {
  test('создание экземпляра Character с корректными данными', () => {
    const hero = new Character('Hero', 'Bowerman');
    expect(hero.name).toBe('Hero');
    expect(hero.type).toBe('Bowerman');
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(1);
    expect(hero.attack).toBe(0);
    expect(hero.defence).toBe(0);
  });

  test('слишком короткое имя выбрасывает ошибку', () => {
    expect(() => new Character('A', 'Bowerman')).toThrow('Некорректное имя!');
  });

  test('слишком длинное имя выбрасывает ошибку', () => {
    expect(() => new Character('VeryLongName', 'Bowerman')).toThrow(
      'Некорректное имя!'
    );
  });

  test('неверный тип выбрасывает ошибку', () => {
    expect(() => new Character('Hero', 'Invalid')).toThrow('Некорректный тип!');
  });
});
