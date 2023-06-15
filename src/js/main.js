import '../css/style.css'
import {DisplayMode, Engine, Physics, Vector} from "excalibur"
import {ResourceLoader } from './resources.js'
import {Startscreen} from "./scenes/startscreen.js";

/**
 * Main start class
 *
 * The main class provides an initial setup in screen width/height,
 * display mode and loads/starts the first scene
 *
 * param: none
 */

const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

export class Main extends Engine {

    constructor() {
        super({ width: windowWidth, height: windowHeight, displayMode: DisplayMode.FillScreen }) //Fullscreen
        this.start(ResourceLoader).then(() => {
                this.add('startscreen', new Startscreen())
                this.goToScene('startscreen')
            })
    }
}

new Main()
