import { Resources } from "../resources.js";
import {Actor, CollisionType, Engine, Vector} from "excalibur";
import {Settings} from "./settings.js";

export class Trash extends Actor {
    constructor() {
        super({
            width: 70/0.02,
            height: 100/0.02,
        })

        this.graphics.use(Resources.Trash.toSprite())
        this.scale.scaleEqual(0.02)
    }
    onInitialize(engine) {
        this.pos = new Vector(Settings.trashStartX, Settings.trashStartY)
        this.vel = new Vector(-40, 0)
        this.body.collisionType = CollisionType.Fixed
        this.body.useGravity = false
    }
}
