import '../css/style.css'
import {Color, DisplayMode, Engine, Line, Physics, Vector} from "excalibur"
import {ResourceLoader} from './resources.js'
import {Menuscreen} from "./scenes/menuscreen.js";
import {Settings} from "./settings.js";
import {Level1} from "./scenes/level1.js";
import {Gameover} from "./scenes/gameover.js";

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
        super({width: Settings.screenWidth, height: Settings.screenHeight, displayMode: DisplayMode.FitScreen})
        this.start(ResourceLoader).then(() => {
            this.addScene('menuScreen', new Menuscreen)
            this.addScene('gameover', new Gameover)
            this.addScene("level1", new Level1);
            this.goToScene('menuScreen')
        })
        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0, Settings.gravity)

        this.showDebug(true)
        ResourceLoader.suppressPlayButton = true
    }
}

new Main()
