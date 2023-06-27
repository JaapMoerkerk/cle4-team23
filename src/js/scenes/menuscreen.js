import {Color, Font, FontUnit, Input, Label, Scene, Vector as textAlign, Vector} from "excalibur";
import { Level1 } from "./level1.js";
import {Background} from "../classes/background.js";
import {Settings} from "../settings.js";

export class Menuscreen extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {

        const level1 = new Level1();
        engine.addScene("level1", level1);

        const startMessage = new Label({
            text: "PRESS SPACE TO CONTINUE",
            pos: new Vector(0, Settings.screenHeight - 200),
            font: new Font({
                family: 'impact',
                color: Color.Cyan,
                size: 50,
                unit: FontUnit.Px
            })
        })

        const title = new Label({
            text: "Parkrunner 1943",
            pos: new Vector(220, Settings.screenHeight/2 - 100),
            font: new Font({
                family: 'impact',
                color: Color.Red,
                size: 160,
                unit: FontUnit.Px
            })
        })

        startMessage.pos.x = Settings.screenWidth/2 - startMessage.getTextWidth()*2

        const settings = new Label({
            width: 190,
            height: 50,
            anchor: new Vector(0.002, 0.8),
            text: 'SETTINGS',
            pos: new Vector(
                Settings.screenWidth - 200,
                Settings.screenHeight - 20),
            font: new Font({
                family: 'impact',
                color: Color.White,
                size: 50,
                unit: FontUnit.Px
            })
        });

        // Event listener for start button click
        settings.on("pointerup", () => {
            //Go to settings scene
        });

        // Add the label actor to the scene
        const menuBackground = new Background('Background', 50)
        this.add(menuBackground)

        this.add(startMessage)
        this.add(title)
        this.add(settings)
    }

    onPostUpdate(engine, delta) {
        if(engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            engine.goToScene("level1");
        }
    }
}
