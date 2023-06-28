import {Font, FontUnit, Label, Scene, TextAlign, Vector} from "excalibur";
import {Settings} from "../settings.js";
import {Resources} from "../resources.js";

export class Gameover extends Scene {
    onInitialize(engine) {
        const gameOverLabel = new Label({
            text: `Game Over`,
            textAlign: TextAlign.Center,
            pos: new Vector(250, 100),
            font: new Font({
                family: 'impact',
                size: 60,
                unit: FontUnit.Px
            })
        })
        const gameOverLabelVerhaal = new Label({
            text:
                        `31 maart 1943 Geallieerd vergissingsbombardement
                   op Rotterdam Amerikaanse vliegtuigen bombarderen
                   op 31 maart 1943 per vergissing een woonwijk van 
                   Rotterdam-west. Het doel is het havencomplex waar 
                   veel materiaal voor de ‘Kriegsmarine’ ligt 
                   opgeslagen. Er vallen ongeveer 400 doden en evenveel
                   gewonden. In totaal gaan 2661 woningen verloren.`,
            textAlign: TextAlign.Center,
            pos: new Vector(200, 150),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px
            })
        })
        this.add(gameOverLabel)
        this.add(gameOverLabelVerhaal)
    }

}