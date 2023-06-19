import {Actor, CollisionType, Vector} from "excalibur";

/**
 * Floor/ground class
 *
 * New instance creates fixed floor that interacts with Excalibur
 * gravity physics (Collisiontype.Fixed and active)
 *
 * param:
 */

export class Ground extends Actor{
    constructor(height) {
        super({
            width: window.innerWidth,
            height: height,
            y: window.innerHeight - height,
            anchor: new Vector(0, 0)
        })
        console.log(window.innerWidth)
        this.body.collisionType = CollisionType.Fixed
    }
}