import {Color, Label, Actor, Vector, Font} from "excalibur";

export class Score extends Actor {
    constructor() {
        super({
            pos: new Vector(10, 10)
        });

        this.score = 0;

        this.scoreLabel = new Label({
            pos: new Vector(50, 50),
            text: `Score: ${this.score}`,
            color: Color.Red,
            font: new Font({
                family: 'impact',
                size: 40
            })
        });
        this.addChild(this.scoreLabel);
    }

    onInitialize(engine) {
        setInterval(() => {
            this.score++;
            this.scoreLabel.text = `Score: ${this.score}`;
        }, 1000);
    }
}

