import {Actor, CollisionType, Vector} from "excalibur";

/**
 * Floor/ground class
 *
 * New instance creates fixed floor that interacts with Excalibur
 * gravity physics (Collisiontype.Fixed and active)
 *
 * param:
 */

const groundHeight = 150

export class Ground extends Actor{
    constructor() {
        super({
            width: window.innerWidth,
            height: 140,
            y: window.innerHeight - 140,
            anchor: new Vector(0, 0)
        })
        console.log(window.innerWidth)
        this.body.collisionType = CollisionType.Fixed
    }
}