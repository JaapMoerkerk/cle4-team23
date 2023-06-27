import {Resources} from "../resources.js";
import {Actor, CollisionType, Shape, Vector} from "excalibur";
import {Settings} from "../settings.js";

export class Trash extends Actor {
    constructor(trashSpeed) {
        super({
            collider: Shape.Box(3000,3000,Vector.Half, new Vector(0,0)),
            collisionType: CollisionType.Passive
        })
        this.trashSpeed = trashSpeed
        this.graphics.use(Resources.Trash.toSprite())
        this.scale.scaleEqual(0.03)
    }

    onInitialize(engine) {
        this.pos = new Vector(Settings.trashStartX, Settings.trashStartY)
        this.vel = new Vector(-this.trashSpeed, 0)
    }
}
