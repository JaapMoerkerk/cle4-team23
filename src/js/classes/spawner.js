import {Actor, Random, Timer} from "excalibur";
import {Trash} from "./trash.js";
import {Settings} from "../settings.js";
import {Rocket} from "./rocket.js";
import {Medkit} from "./medkit.js";

export class Spawner extends Actor {
    constructor() {
        super()
        this.random = new Random()
    }

    onInitialize(engine) {
        this.trashTimer = new Timer({
            fcn: () => this.spawnTrash(engine),
            interval: this.getRandomInterval(
                Settings.trashIntervalMin,
                Settings.trashIntervalMax
            ),
            repeats: true
        });
        engine.currentScene.add(this.trashTimer)

        this.rocketTimer = new Timer({
            fcn: () => this.spawnRocket(engine),
            interval: this.getRandomInterval(
                Settings.rocketIntervalMin,
                Settings.rocketIntervalMax
            ),
            repeats: true
        });
        engine.currentScene.add(this.rocketTimer)

        this.medkitTimer = new Timer({
            fcn: () => this.spawnMedkit(engine),
            interval: Settings.medkitInterval,
            repeats: true
        });
        engine.currentScene.add(this.medkitTimer)

        this.trashTimer.start()
        this.rocketTimer.start()
        this.medkitTimer.start()
    }

    spawnTrash(engine) {
        const trash = new Trash(
            this.random.integer(Settings.trashSpeedMin, Settings.trashSpeedMax)
        )
        engine.currentScene.add(trash)
    }

    spawnRocket(engine) {
        const rocketLeft = new Rocket(
            this.random.integer(100, Settings.screenWidth / 2 - 100),
            this.random.integer(Settings.rocketSpeedMin, Settings.rocketSpeedMax)
        )
        const rocketRight = new Rocket(
            this.random.integer(Settings.screenWidth / 2, Settings.screenWidth - 200),
            this.random.integer(Settings.rocketSpeedMin, Settings.rocketSpeedMax)
        )
        engine.currentScene.add(rocketLeft)
        engine.currentScene.add(rocketRight)
    }

    spawnMedkit(engine){
        const medkit = new Medkit(
            this.random.integer(100, Settings.screenWidth - 200)
        )
        engine.currentScene.add(medkit)
    }

    getRandomInterval(rangeMin, rangeMax) {
        return this.random.integer(rangeMin, rangeMax)
    }
}
