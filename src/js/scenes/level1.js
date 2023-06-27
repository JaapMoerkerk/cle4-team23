import {Scene} from "excalibur";
import {Resources} from "../resources.js";
import {Background} from "../classes/background.js";
import {Player} from "../classes/player.js";
import {Ground} from "../classes/ground.js";
import {Settings} from "../settings.js";
import {Spawner} from "../classes/spawner.js";
import {Healthbar} from "../classes/healthbar.js";

/**
 * Startscreen (scene 1) class
 *
 * First scene of the game, loaded and started in main.js, provides
 * a glimpse into the game itself with the layered background,
 * appearance of the player and some UI
 *
 * param: none
 */

export class Level1 extends Scene{
    constructor(engine) {
        super()
        this.engine = engine
    }

    onInitialize(engine) {
        Resources.Music.play(0.5)
        const background1 = new Background("Background", 200)
        const ground = new Ground(Settings.groundHeight)
        const healthbar = new Healthbar(engine)
        const player = new Player(healthbar)
        const spawner = new Spawner()

        healthbar.setPlayer(player)

        this.add(background1)
        this.add(player)
        this.add(ground)
        this.add(healthbar)
        this.add(spawner)
    }
}


