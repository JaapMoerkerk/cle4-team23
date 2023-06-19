import { Resources } from "../resources.js";
import { Actor, CollisionType, Engine, Input, Loader, Physics, Vector } from "excalibur";

const startHeight = 660;
const startHeight = 460;
const startWidth = 200;


export class Trash extends Actor {
    constructor() {
        super({
            x: startWidth,
            y: startHeight,
            width: 50,
            height: 50,
        });
    }
}