import {Actor, CollisionType, Shape, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Settings} from "../settings.js";

export class Medkit extends Actor{
    constructor(medkitStartX) {
        super({
            collider: Shape.Box(130,500,Vector.Half, new Vector(0,0)),
            collisionType: CollisionType.Passive
        })
        this.medkitStartX = medkitStartX
        this.graphics.use(Resources.Medkit.toSprite())
        this.scale.scaleEqual(0.1)
    }

    onInitialize(engine) {
        this.pos = new Vector(this.medkitStartX, Settings.medkitStartY)
        this.vel = new Vector(0, 100)
    }
}