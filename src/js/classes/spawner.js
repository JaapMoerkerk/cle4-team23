import { Actor, Random, Timer } from "excalibur";
import { Trash } from "./trash.js";

export class Spawner extends Actor {
    constructor(gameinstance) {
        super();
        this.random = new Random(1337);
        this.gameinstance = gameinstance
    }

    onInitialize(engine) {
        this.timer = new Timer({
            fcn: () => this.spawn(engine),
            interval: this.getRandomInterval(),
            repeats: true
        });

        engine.currentScene.add(this.timer);
        this.timer.start();
    }

    spawn(engine) {
        console.log("spawn");
        const Trash1 = new Trash(
            this.random.integer(0, 800),
            this.random.integer(0, 600),
            this.gameinstance
        );
        engine.currentScene.add(Trash1);

        this.timer.interval = this.getRandomInterval();
    }

    getRandomInterval() {
        return this.random.integer(5000, 10000);
    }
}
