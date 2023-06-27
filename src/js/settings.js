/**
 * Settings file for general used variable settings
 * @type {{groundHeight: number, runSpeed: number, startY: number, startX: number}}
 */
import {Vector} from "excalibur";

export const Settings = {
    //General
    gravity: 3000,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    groundHeight: 200,

    //Player:
    startY: 500,
    startX: 200,
    runSpeed: 200,

    //Obstacle
    trashStartx: window.innerWidth + 100,
    trashStarty: window.innerHeight - 250,
    trashIntervalMin: 2000,
    trashIntervalMax: 4000,
    trashSpeedMin: 600,
    TrashSpeedMax: 900,

    rocketStarty: window.innerHeight - 500,
    rocketSpeed: 100
}