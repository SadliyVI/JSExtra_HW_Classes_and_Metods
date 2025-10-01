export default class Character {
  constructor(name, type) {
    const allowedTypes = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie'
    ];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Некорректное имя!');
    }

    if (!allowedTypes.includes(type)) {
      throw new Error('Некорректный тип!');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень мёртвого персонажа!');
    }
    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      return;
    }
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
