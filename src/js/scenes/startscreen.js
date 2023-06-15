import {Graphic, GraphicsGroup, GraphicsLayer, Scene, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Background} from "../classes/background.js";

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
        const background1 = new Background("Background", 10)
        this.add(background1)
    }

}


