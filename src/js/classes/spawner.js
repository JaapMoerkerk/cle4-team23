import { Actor, Random, Timer } from "excalibur";
import { Trash } from "./trash.js";
import {Settings} from "../settings.js";
import {Rocket} from "./rocket.js";

export class Spawner extends Actor {
    constructor(trashBool) {
        super()
        this.random = new Random(5555);
        this.trashBool = trashBool
    }

    onInitialize(engine) {
        this.timer = new Timer({
            fcn: () => this.spawn(engine),
            interval: this.getRandomInterval(),
            repeats: true
        });
        engine.currentScene.add(this.timer)
        this.timer.start()
    }

    spawn(engine) {
        if (this.trashBool) {
            const trash = new Trash(
                this.random.integer(Settings.trashSpeedMin, Settings.trashSpeedMax)
            )
            engine.currentScene.add(trash)
        }

        if (!this.trashBool) {
            const rocket = new Rocket()
            engine.currentScene.add(rocket)
        }
    }

    getRandomInterval() {
        return this.random.integer(Settings.trashIntervalMin, Settings.trashIntervalMax);
    }
}
