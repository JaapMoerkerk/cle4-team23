import {Resources} from "../resources.js";
import {Actor, CollisionType, Shape, Vector} from "excalibur";
import {Settings} from "../settings.js";


export class Rocket extends Actor {
    constructor(rocketStartX, rocketSpeed) {
        super({
            collider: Shape.Box(130,500,Vector.Half, new Vector(0,0)),
            collisionType: CollisionType.Passive
        })
        this.rocketStartX = rocketStartX
        this.rocketSpeed = rocketSpeed
        this.graphics.use(Resources.Rocket.toSprite())
        this.scale.scaleEqual(0.5)
    }

    onInitialize(engine) {
        this.pos = new Vector(this.rocketStartX, Settings.rocketStartY)
        this.vel = new Vector(0, this.rocketSpeed)
    }
}
