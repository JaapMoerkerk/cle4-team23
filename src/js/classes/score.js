import {Color, Engine, Font, FontUnit, Label, Vector} from "excalibur";

export class Score extends Engine {
    onInitialize(engine) {
        this.score = 0
        console.log('score telt')
        this.mylabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.Red
            })
        })
        this.add(this.mylabel)
    }

    updateScore(){
        this.score++
        this.mylabel.text = `Score: ${this.score}`
        console.log("${this,score}")
    }
}
