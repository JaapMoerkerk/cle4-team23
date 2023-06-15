import '../css/style.css'
import {DisplayMode, Engine} from "excalibur"
import {ResourceLoader } from './resources.js'
import {Startscreen} from "./scenes/startscreen.js";
import {player} from  "./classes/player.js"

/**
 * Main start class
 *
 * The main class provides an initial setup in screen width/height,
 * display mode and loads/starts the first scene
 *
 * param: none
 */

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
