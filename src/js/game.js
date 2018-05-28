import MainScene from "./scenes/MainScene.js"

class Game extends Phaser.Game {
  /**
   * Set up basic game configuration and define scenes
   */
  constructor() {
    super({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          debug: false
        }
      },
      scene: [ MainScene ]
    })
  }
}

const game = new Game()