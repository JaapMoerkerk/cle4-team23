import {Graphic, GraphicsGroup, GraphicsLayer, Scene, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Background} from "../classes/background.js";

export class Startscreen extends Scene{
    constructor() {
        super()
    }

    onInitialize(engine) {
        console.log("Startscherm")
        const background1 = new Background("Background", 10)
        this.add(background1)
    }

}


