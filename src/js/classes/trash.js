import { Resources } from "../resources.js";
import {Actor, CollisionType, Engine, Vector} from "excalibur";
import {Settings} from "../settings.js";
import {EndScreen} from "../scenes/endScreen.js";

import * as ex from "excalibur"
import {Player} from "./player";

export class Trash extends Actor {
    constructor(gameInstance) {
        super({
            pos: new ex.Vector(100,100),
            collider: ex.Shape.Box(3000,3000,ex.Vector.Half, ex.vec(0,0)),
            collisionType: ex.CollisionType.Passive
        })
        this.gameinstance = gameInstance
        this.graphics.use(Resources.Trash.toSprite())
        this.scale.scaleEqual(0.02)
    }
    onInitialize(engine) {
        this.on('precollision', (event) =>  this.onPreCollision(event))
        this.pos = new Vector(Settings.trashStartx, Settings.trashStarty)
        this.vel = new Vector(-400, 0)
        const gameOverLabel = new ex.Label({
            text: "Game Over je zuigt"
        })

        this.body.useGravity = false
    }
    onPreCollision(event){
        if(event.other instanceof Player){
            console.log('game over je zuig')
            const endgame = new EndScreen();
            this.gameinstance.add('gameover', endgame)
            this.gameinstance.goToScene('gameover')
        }
    }
}
