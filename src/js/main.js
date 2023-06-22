import '../css/style.css'
import {Color, DisplayMode, Engine, Line, Physics, Vector} from "excalibur"
import {ResourceLoader} from './resources.js'
import {menuScreen} from "./scenes/menuscreen.js";
import {Settings} from "./settings.js";

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
        super({width: Settings.screenWidth, height: Settings.screenHeight, displayMode: DisplayMode.Fixed}) //Fullscreen
        this.start(ResourceLoader).then(() => {
            this.add('startScreen', new menuScreen(this))
            this.goToScene('startScreen')
        })
        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0, Settings.gravity)

        this.showDebug(true)
    }
}

new Main()
