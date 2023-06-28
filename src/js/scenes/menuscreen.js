import {BaseAlign, Color, Font, FontUnit, Input, Label, Scene, TextAlign, Vector} from "excalibur";
import {Background} from "../classes/background.js";
import {Settings} from "../settings.js";

export class Menuscreen extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {

        const startMessage = new Label({
            text: "PRESS SPACE TO CONTINUE",
            pos: new Vector(Settings.screenWidth/2, Settings.screenHeight - 50),
            font: new Font({
                textAlign: TextAlign.Center,
                family: 'bahnschrift',
                color: Color.DarkGray,
                size: 60,
                unit: FontUnit.Px,
                bold: true
            })
        })

        const title = new Label({
            text: `PARKRUNNER 1943`,
            pos: new Vector(Settings.screenWidth/2, Settings.screenHeight/2 - 40),
            font: new Font({
                textAlign: TextAlign.Center,
                family: 'bahnschrift',
                color: Color.Red,
                size: 160,
                unit: FontUnit.Px,
                // bold: true,
                baseAlign: BaseAlign.Middle
            })
        })
        //
        // const settings = new Label({
        //     width: 190,
        //     height: 50,
        //     anchor: new Vector(0.002, 0.8),
        //     text: 'SETTINGS',
        //     pos: new Vector(
        //         Settings.screenWidth - 200,
        //         Settings.screenHeight - 20),
        //     font: new Font({
        //         family: 'impact',
        //         color: Color.White,
        //         size: 50,
        //         unit: FontUnit.Px
        //     })
        // });

        // Add the label actor to the scene
        const menuBackground = new Background('Background', 50)
        this.add(menuBackground)

        this.add(startMessage)
        this.add(title)
        // this.add(settings)
    }

    onPostUpdate(engine, delta) {
        if(engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            engine.goToScene("level1");
        }
    }
}
