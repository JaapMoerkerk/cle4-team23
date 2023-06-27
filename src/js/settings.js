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
    runSpeed: 400,

    //Trashcan
    trashStartx: window.innerWidth + 100,
    trashStarty: window.innerHeight - 250,
    trashIntervalMin: 1000,
    trashIntervalMax: 3500,
    trashSpeedMin: 600,
    trashSpeedMax: 900,

    //Rocket
    rocketStarty: -500,
    rocketIntervalMin: 2500,
    rocketIntervalMax: 4500,
    rocketSpeedMin: 200,
    rocketSpeedMax: 700,

    //Healthbar
    healthbarWidth: 500,
    healthbarHeight: 50
}