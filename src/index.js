import Bowerman from './classes/Bowerman.js';
import Swordsman from './classes/Swordsman.js';
import Magician from './classes/Magician.js';
import Daemon from './classes/Daemon.js';
import Undead from './classes/Undead.js';
import Zombie from './classes/Zombie.js';

let container = document.getElementById('heroes-container');
if (!container) {
  container = document.createElement('div');
  container.id = 'heroes-container';
  container.style.fontFamily = 'sans-serif';
  container.style.margin = '20px';
  document.body.appendChild(container);
}

if (container.children.length === 0) {
  const heroes = [
    new Bowerman('Archer'),
    new Swordsman('Knight'),
    new Magician('Merlin'),
    new Daemon('Azazel'),
    new Undead('Ghoul'),
    new Zombie('Walker')
  ];

  heroes.forEach((hero) => console.log(hero));

  heroes.forEach((hero) => {
    const message = document.createElement('div');
    message.textContent =
      `Создан герой: ${hero.name}, тип: ${hero.type}, уровень: ${hero.level}` +
      `здоровье: ${hero.health}, атака: ${hero.attack}, защита: ${hero.defence}`;
    message.style.fontSize = '16px';
    message.style.fontWeight = 'bold';
    message.style.marginBottom = '10px';
    container.appendChild(message);
  });
}
