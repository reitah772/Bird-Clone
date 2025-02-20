export default class MenuScene extends Phaser.Scene {
    constructor() {
      super('MenuScene');
    }
  
    create() {
      this.add.text(100, 250, 'Flappy Bird', { fontSize: '32px', fill: '#fff' });
      this.add.text(90, 300, 'Tryck för att starta', { fontSize: '16px', fill: '#fff' });
  
      this.input.on('pointerdown', () => {
        this.scene.start('GameScene');
      });
    }
  }
  