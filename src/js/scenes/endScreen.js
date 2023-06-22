import {Font, FontUnit, Label, Scene, Vector} from "excalibur";

export class EndScreen extends Scene {
    onInitialize(engine) {
        const gameOverLabel = new Label({
            text: `Game Over`,
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 50,
                unit: FontUnit.Px
            })
        })
        this.add(gameOverLabel)
    }

}