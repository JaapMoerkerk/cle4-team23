import {Actor, Vector, GraphicsGroup, vec} from "excalibur";
import { Resources } from "../resources.js";

export class Background extends Actor{

    offset

    constructor(backgroundName, backgroundSpeed) {
        super()
        this.backgroundName = backgroundName;
        this.backgroundSpeed = backgroundSpeed;
    }

        onInitialize(engine)
        {
            const background = Resources[this.backgroundName].toSprite();
            this.offset = background.width;

            const repeatSpriteGroup = new GraphicsGroup({
                members: [
                    {
                        graphic: background,
                        pos: new Vector(0, 0)
                    },
                    {
                        graphic: background,
                        pos: new Vector(background.width, 0)
                    }
                ]
            })

            this.graphics.anchor = new Vector(0, 0);
            this.graphics.add(repeatSpriteGroup);
            this.pos = new Vector(0, 0);
            this.vel = new Vector(-this.backgroundSpeed, 0);
        }

        onPostUpdate(engine, delta)
        {
            if (this.pos.x < -this.offset) {
                this.pos = new Vector(0, 0)
            }
        }
    }

