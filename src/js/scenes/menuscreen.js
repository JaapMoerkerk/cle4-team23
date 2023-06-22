import {Font, FontUnit, Label, Scene, Vector} from "excalibur";
import { Level1 } from "./level1.js";

export class menuScreen extends Scene {
    constructor(engine) {
        super();
        this.engine = engine;
    }

    onInitialize(engine) {
        console.log('menuScreen onInitialize() called');

        // Initialize scene actors
        const label = new Label({
            width: 100,
            height: 100,
            anchor: new Vector(0, 0),
            text: 'Start',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 50,
                unit: FontUnit.Px
            })
        });

        // Event listener for start button click
        label.on("pointerup", () => {
            console.log('Start label clicked');
            const level1 = new Level1(this.engine);
            engine.addScene("level1", level1);
            engine.goToScene("level1");
        });

        // Add the label actor to the scene
        this.add(label);

        console.log('menuScreen initialization completed');
    }

    onPostUpdate(engine, delta) {

    }
}
