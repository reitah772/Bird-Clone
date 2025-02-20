export default class Bird {
    constructor(scene, x, y) {
      this.scene = scene;
      this.sprite = scene.physics.add.sprite(x, y, 'bird').setScale(0.5);
      this.sprite.setCollideWorldBounds(true);
    }
  
    flap() {
      this.sprite.setVelocityY(-250);
    }
  }
  