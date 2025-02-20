import Bird from '../objects/Bird.js';
import Pipe from '../objects/Pipe.js';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
    this.score = 0;
  }

  preload() {
    this.load.image('bird', '/src/assets/bird.png');
    this.load.image('pipe', '/src/assets/pipe.png');
    this.load.image('background', '/src/assets/background.png');
  }

  create() {
    this.add.image(200, 300, 'background');
    this.bird = new Bird(this, 100, 300);
    this.pipes = this.physics.add.group();

    this.scoreText = this.add.text(16, 16, 'Poäng: 0', { fontSize: '20px', fill: '#fff' });

    this.pipeTimer = this.time.addEvent({
      delay: 1500,
      callback: this.addPipePair,
      callbackScope: this,
      loop: true
    });

    this.physics.add.collider(this.bird.sprite, this.pipes, this.gameOver, null, this);

    this.input.on('pointerdown', () => this.bird.flap());
  }

  addPipePair() {
    const gap = 150;
    const position = Phaser.Math.Between(100, 400);

    new Pipe(this, 400, position - gap / 2, 'pipe', false, this.pipes);
    new Pipe(this, 400, position + gap / 2, 'pipe', true, this.pipes);

    this.score++;
    this.scoreText.setText('Poäng: ' + this.score);
  }

  gameOver() {
    this.scene.restart();
  }
}
