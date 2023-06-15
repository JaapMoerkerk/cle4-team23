import { Resources } from "../resources.js";
import {Actor, Animation, CollisionType, Input, Physics, range, SpriteSheet, Vector} from "excalibur";

/**
 * Main character (player) class
 *
 * New instance creates the main player
 *
 * param:
 */

const startHeight = 660
const startWidth = 400
Physics.gravity = new Vector(0, 3000)

export class Player extends Actor{
    constructor() {
        super()

        /**
         * The following code defines our players spritesheet animations,
         * like walk, run and jump.
         * @type {SpriteSheet}
         */

        const walkSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerWalk,
            grid: {
                rows: 1,
                columns: 15,
                spriteHeight: 564,
                spriteWidth: 614
            }
        })

        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerRun,
            grid: {
                rows: 1,
                columns: 15,
                spriteHeight: 564,
                spriteWidth: 614
            }
        })

        const jumpSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerJump,
            grid: {
                rows: 1,
                columns: 15,
                spriteHeight: 564,
                spriteWidth: 614
            }
        })

        const walk = Animation.fromSpriteSheet(walkSheet, range(0, 14), 50)
        this.graphics.add("walk", walk)

        const run = Animation.fromSpriteSheet(runSheet, range(0,14), 50)
        this.graphics.add("run", run)

        const jump = Animation.fromSpriteSheet(jumpSheet, range(0,14), 50)
        this.graphics.add("jump", jump)
        /**
         * Standard animation setting, scale and position
         */

        this.graphics.use("walk")
        this.scale.scaleEqual(0.4)
    }

    onInitialize(engine) {
        this.pos = new Vector(startWidth, startHeight)
        this.vel = new Vector(0, 0)
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = false
    }

    onPreUpdate(engine, delta) {
        if(engine.input.keyboard.wasPressed(Input.Keys.Space)){
            this.vel = new Vector(0, -1000)
            this.body.useGravity = true
            this.graphics.use("jump")
        }

        if(engine.input.keyboard.wasPressed(Input.Keys.A)) {
            this.graphics.use("run")
        }
        }
    }

