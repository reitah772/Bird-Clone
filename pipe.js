export default class Pipe {
    constructor(scene, x, y, texture, flipY, group) {
      const pipe = scene.physics.add.sprite(x, y, texture);
      pipe.setImmovable(true);
      pipe.body.allowGravity = false;
      pipe.setFlipY(flipY);
      pipe.setVelocityX(-200);
      group.add(pipe);
    }
  }
  