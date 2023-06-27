import {Actor, Animation, Color, Physics, range, Rectangle, SpriteSheet, Vector} from "excalibur";
import {Settings} from "../settings.js";
import {Resources} from "../resources.js";

export class Healthbar extends Actor {
    backgroundrectangle
    healthrectangle
    engine
    player
    explosion

    constructor(engine) {
        super()
        this.engine = engine
        this.player = null

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

    onInitialize(engine) {
        this.engine = engine

        this.explosion = new Actor({
            pos: this.player.pos.clone(),
            anchor: Vector.Half,
            width: 100,
            height: 100,
        })

        const explosionSheet = SpriteSheet.fromImageSource({
            image: Resources.Explosion,
            grid: {
                rows: 1,
                columns: 12,
                spriteHeight: 96,
                spriteWidth: 96
            }
        })

        const explosionAnimation = Animation.fromSpriteSheet(explosionSheet, range(0, 11), 20)
        this.explosion.graphics.add("explosion", explosionAnimation)

        this.explosion.visible = false
        engine.add(this.explosion)
    }

    resetHealth() {
        this.healthrectangle.width += 100
    }

    loseHealth(damage) {
        if (damage === 200 && this.healthrectangle.width === 100) {
            this.healthrectangle.width = 0
        }else {
            this.healthrectangle.width -= damage
        }

        if (this.healthrectangle.width <= 0) {
            // Show the explosion at the player's position
            this.explosion.pos = this.player.pos.clone();
            this.explosion.visible = true;
            this.explosion.graphics.use("explosion");

            // Hide the player
            this.player.kill()
            setTimeout(() => {
                this.engine.goToScene('gameover');
            }, 2000);
        }
    }
}