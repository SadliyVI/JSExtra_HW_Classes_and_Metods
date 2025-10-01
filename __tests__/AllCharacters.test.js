import Bowerman from '../src/classes/Bowerman.js';
import Swordsman from '../src/classes/Swordsman.js';
import Magician from '../src/classes/Magician.js';
import Daemon from '../src/classes/Daemon.js';
import Undead from '../src/classes/Undead.js';
import Zombie from '../src/classes/Zombie.js';

describe('All child classes', () => {
  const characters = [
    { cls: Bowerman, type: 'Bowerman', attack: 25, defence: 25 },
    { cls: Swordsman, type: 'Swordsman', attack: 40, defence: 10 },
    { cls: Magician, type: 'Magician', attack: 10, defence: 40 },
    { cls: Daemon, type: 'Daemon', attack: 10, defence: 40 },
    { cls: Undead, type: 'Undead', attack: 25, defence: 25 },
    { cls: Zombie, type: 'Zombie', attack: 40, defence: 10 }
  ];

  characters.forEach(({ cls, type, attack, defence }) => {
    const validName = `Hero${type.slice(0, 3)}`;

    test(`создание экземпляра ${type}`, () => {
      const hero = new cls(validName);
      expect(hero.name).toBe(validName);
      expect(hero.type).toBe(type);
      expect(hero.health).toBe(100);
      expect(hero.level).toBe(1);
      expect(hero.attack).toBe(attack);
      expect(hero.defence).toBe(defence);
    });

    test(`${type} выбрасывает ошибку при коротком имени`, () => {
      expect(() => new cls('A')).toThrow('Некорректное имя!');
    });

    test(`${type} выбрасывает ошибку при длинном имени`, () => {
      expect(() => new cls('VeryLongName')).toThrow('Некорректное имя!');
    });
  });
});
