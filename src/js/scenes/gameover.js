import {Color, Font, FontUnit, Label, Scene, TextAlign, Vector} from "excalibur";
import {Settings} from "../settings.js";
import {Resources} from "../resources.js";
import {Background} from "../classes/background.js";

export class Gameover extends Scene {
    onInitialize(engine) {
        const gameOverLabel = new Label({
            text: `GAME OVER`,
            textAlign: TextAlign.Center,
            pos: new Vector(1920/2, 300),
            font: new Font({
                textAlign: TextAlign.Center,
                family: 'bahnschrift',
                size: 200,
                unit: FontUnit.Px,
                color: Color.Red
            })
        })
        const gameOverLabelVerhaal = new Label({
            text: `
            31 maart 1943.
                   _______________________________
                   
                   Geallieerd vergissingsbombardement op Rotterdam Amerikaanse 
                   vliegtuigen bombarderen op 31 maart 1943 per vergissing een woonwijk van 
                   Rotterdam-west. Het doel is het havencomplex waar veel materiaal voor 
                   de ‘Kriegsmarine’ ligt opgeslagen. Er vallen ongeveer 400 doden en evenveel
                   gewonden. In totaal gaan 2661 woningen verloren.`,
            pos: new Vector(1920/2 - 70, 450),
            font: new Font({
                textAlign: TextAlign.Center,
                family: 'bahnschrift',
                bold: true,
                color: Color.Black,
                size: 50,
                unit: FontUnit.Px,
            })
        })

        const background = new Background("Background", 20)
        this.add(background)
        this.add(gameOverLabel)
        this.add(gameOverLabelVerhaal)
        background.graphics.opacity = 0.5
    }

}