import {Resources} from "../resources.js";
import {Actor, Animation, CollisionType, Input, Physics, range, SpriteSheet, Vector} from "excalibur";
import {Settings} from "../settings.js"

/**
 * Main character (player) class
 *
 * New instance creates the main player
 * Super constructs hitbox
 *
 * param:
 */

export class Player extends Actor {
    constructor() {
        super({
            width: 140,
            height: 510,
            anchor: new Vector(0.15, 0),
        })
        this.speed = 0
        this.isJumping = false

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

        this.graphics.use("walk")
        this.scale.scaleEqual(0.4)
    }

    onInitialize(engine) {
        this.pos = new Vector(Settings.startX, Settings.startY)
        this.vel = new Vector(this.speed, 0)
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true
    }

    /**
     * Standard movement mechanics and keyboard controls
     */

    onPreUpdate(engine, delta) {
        this.vel.x = this.speed
        if(this.isJumping){
            return
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.vel = new Vector(0, -1000)
            this.isJumping = true
            Resources.JumpSound.play(1)
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.D)) {
            this.graphics.use('run')
            if (this.speed <= 0){
                this.speed = Settings.runSpeed
            }
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.A)) {
            this.graphics.use('walkslow')
            if (this.speed >= 0){
                this.speed = -Settings.runSpeed
            }
        }
    }

    onPostUpdate(engine, delta) {
        if (this.isJumping){
            this.graphics.use('jump')
        }

        if (this.isJumping && this.pos.y >= 330){
            this.isJumping = false
            this.graphics.use('walk')
        }

        if (engine.input.keyboard.wasReleased(Input.Keys.D) || engine.input.keyboard.wasReleased((Input.Keys.A))){
            this.speed = 0
            this.graphics.use('walk')
        }
    }
}


