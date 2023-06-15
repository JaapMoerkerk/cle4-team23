import { Resources, ResourceLoader } from "../resources.js";
import {Actor, Vector} from "excalibur";

/**
 * Main character (player) class
 *
 * New instance creates the main player
 *
 * param:
 */

export class player extends Actor{
    constructor() {
        super({
            width: Resources.Player.width,
            height: Resources.Player.height,
        });
        this.graphics.use(Resources.Player.toSprite());
        this.scale = new Vector(1,1);
        this.pos = new Vector(120, 500)
    }
}