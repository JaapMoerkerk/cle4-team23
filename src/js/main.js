import '../css/style.css'
import {Color, DisplayMode, Engine, Line, Physics, Vector} from "excalibur"
import {ResourceLoader} from './resources.js'
import {Startscreen} from "./scenes/startscreen.js";
import {Settings} from "./classes/settings.js";

/**
 * Main start class
 *
 * The main class provides an initial setup in screen width/height,
 * display mode and loads/starts the first scene. The variables above
 * set the later used window size and the physics.
 *
 * param: none
 */

export class Main extends Engine {

    constructor() {
        super({width: window.innerWidth, height: window.innerHeight, displayMode: DisplayMode.FillScreen}) //Fullscreen
        this.start(ResourceLoader).then(() => {
            this.add('startscreen', new Startscreen())
            this.goToScene('startscreen')
        })
        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0, Settings.gravity)

        this.showDebug(true)
    }
}

new Main()
