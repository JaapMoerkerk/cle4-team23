import {Resources} from "../resources.js";
import {Actor, CollisionType, Shape, Vector} from "excalibur";
import {Settings} from "../settings.js";


export class Rocket extends Actor {
    constructor(rocketStartx) {
        super({
            collider: Shape.Box(3000,3000,Vector.Half, new Vector(0,0)),
            collisionType: CollisionType.Passive
        })
        this.rocketStartx = rocketStartx
        this.graphics.use(Resources.Rocket.toSprite())
        this.scale.scaleEqual(0.02)
    }

    onInitialize(engine) {
        this.pos = new Vector(this.rocketStartx, Settings.rocketStarty)
        this.vel = new Vector(0, Settings.rocketSpeed)
    }
}
