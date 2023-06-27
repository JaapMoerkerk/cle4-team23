import {Actor, CollisionType, Color, Physics, Rectangle, Vector} from "excalibur";
import {Settings} from "../settings.js";

export class Healthbar extends Actor {
    backgroundrectangle
    healthrectangle
    engine

    constructor(engine) {
        super()
        this.engine = engine
        this.player = null
        this.ground = null

        this.pos = new Vector(
            (Settings.screenWidth / 2) - (Settings.healthbarWidth / 2),
            50
        )
        //Red healthbar
        this.healthrectangle = new Rectangle({
            width: Settings.healthbarWidth,
            height: Settings.healthbarHeight,
            color: Color.Red,
        })

        //Black bar for underneath
        this.backgroundrectangle = new Rectangle({
            width: Settings.healthbarWidth,
            height: Settings.healthbarHeight,
            color: Color.DarkGray,
        })
        this.graphics.anchor = Vector.Zero

        this.graphics.add(this.backgroundrectangle)
        this.graphics.add(this.healthrectangle)
    }

    setPlayer(player) {
        this.player = player;
    }

    setGround(ground) {
        this.ground = ground
    }

    onInitialize(engine) {
        this.engine = engine
    }

    resetHealth() {
        this.healthrectangle.width = Settings.healthbarWidth
    }

    loseHealth(damage) {
        this.healthrectangle.width = this.healthrectangle.width - damage

        if (this.healthrectangle.width <= 0) {
            this.player.isDead = true
            // this.player.graphics.use('dead')
            Physics.gravity.y = 400
            this.ground.kill()
            setTimeout(() => {
                this.engine.goToScene('gameover');
            }, 2000);
        }
    }
}