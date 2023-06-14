import '../css/style.css'
import {Actor, DisplayMode, Engine, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Startscreen} from "./scenes/startscreen.js";

const windowWidth = window.innerWidth       //Slaat de grote op van het scherm bij opstarten
const windowHeight = window.innerHeight     //en gebruikt dit voor fullscreen.

export class Main extends Engine {

    constructor() {
        super({ width: windowWidth, height: windowHeight, displayMode: DisplayMode.FillScreen }) //Fullscreen
        this.start(ResourceLoader).then(() => {
                this.add('startscreen', new Startscreen()) //Load start screen
                this.goToScene('startscreen')                  //Go to start screen
            })
    }
}


new Main()
