import {Resources} from "../resources.js";
import {Actor, CollisionType, Shape, Vector} from "excalibur";
import {Settings} from "../settings.js";


export class Rocket extends Actor {
    constructor(rocketStartx, rocketSpeed) {
        super({
            collider: Shape.Box(130,500,Vector.Half, new Vector(0,0)),
            collisionType: CollisionType.Passive
        })
        this.rocketStartx = rocketStartx
        this.rocketSpeed = rocketSpeed
        this.graphics.use(Resources.Rocket.toSprite())
        this.scale.scaleEqual(0.5)
    }

    onInitialize(engine) {
        this.pos = new Vector(this.rocketStartx, Settings.rocketStarty)
        this.vel = new Vector(0, this.rocketSpeed)
    }
}
