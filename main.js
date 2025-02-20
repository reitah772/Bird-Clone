import Phaser from 'phaser';
import GameScene from './scenes/GameScene.js';
import MenuScene from './scenes/MenuScene.js';

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 600 },
      debug: false
    }
  },
  scene: [MenuScene, GameScene]
};

new Phaser.Game(config);
