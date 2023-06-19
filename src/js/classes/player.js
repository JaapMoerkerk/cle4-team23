import {Resources} from "../resources.js";
import {Actor, Animation, CollisionType, Input, Physics, range, SpriteSheet, Vector} from "excalibur";

/**
 * Main character (player) class
 *
 * New instance creates the main player
 *
 * param:
 */

/**
 * Start variables like starting position (x and y), movement speed and the
 * amount of gravity applied to the scene.
 */

const startY = 660
const startX = 400
const runSpeed = 200
let jumping = false

export class Player extends Actor {
    constructor() {
        super({
            width: 100,
            height: 200
        })

        /**
         * SpriteSheet settings (defining the SpriteSheet so that animations
         * can be drawn from it)
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

        /**
         * Animation setting (setting dimensions, selecting sheets and
         * animation speed)
         * @type {Animation}
         */

        const walk = Animation.fromSpriteSheet(walkSheet, range(0, 14), 50)
        this.graphics.add("walk", walk)

        const run = Animation.fromSpriteSheet(runSheet, range(0, 14), 50)
        this.graphics.add("run", run)

        const jump = Animation.fromSpriteSheet(jumpSheet, range(0, 14), 50)
        this.graphics.add("jump", jump)

        const walkSlow = Animation.fromSpriteSheet(walkSheet, range(0, 14), 120)
        this.graphics.add("walkslow", walkSlow)

        /**
         * Standard animation setting, scale and position
         */

        this.graphics.use("walkslow")
        this.scale.scaleEqual(0.4)
    }

    onInitialize(engine) {
        this.pos = new Vector(startX, startY)
        this.vel = new Vector(0, 0)
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = false
    }

    /**
     * Standard movement mechanics and keyboard controls
     */

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.jump()
        }
        if (engine.input.keyboard.isHeld(Input.Keys.D)) {
            this.graphics.use("run")
            this.vel = new Vector(runSpeed, 0)
            this.body.useGravity = false
        }

        if (engine.input.keyboard.isHeld(Input.Keys.A)) {
            this.graphics.use("walkslow")
            this.vel = new Vector(-runSpeed, 0)
            this.body.useGravity = false
        }

    }

    jump() {
        this.vel = new Vector(0, -1000)
        this.graphics.use("jump")
        this.body.useGravity = true
    }
}


