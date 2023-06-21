import {Color, Graphic, GraphicsGroup, GraphicsLayer, Line, Scene, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Background} from "../classes/background.js";
import {Player} from "../classes/player.js";
import {Ground} from "../classes/ground.js";
import {Settings} from "../classes/settings.js";
import {Trash} from "../classes/trash.js"
import {Spawner} from "../classes/spawner.js";

/**
 * Startscreen (scene 1) class
 *
 * First scene of the game, loaded and started in main.js, provides
 * a glimpse into the game itself with the layered background,
 * appearance of the player and some UI
 *
 * param: none
 */

export class Startscreen extends Scene{
    constructor() {
        super()
    }

    onInitialize(engine) {
        console.log("Startscherm")
        const background1 = new Background("Background", 200)
        this.add(background1)
        const player = new Player()
        this.add(player)
        const ground = new Ground(Settings.groundHeight)
        this.add(ground)
        const trashCan1 = new Trash()
        this.add(trashCan1)
        const spawner1 = Spawner
        this.add(spawner1)
    }
}


