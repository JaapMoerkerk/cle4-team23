/**
 * Settings file for general used variable settings
 * @type {{groundHeight: number, runSpeed: number, startY: number, startX: number}}
 */
import {Vector} from "excalibur";

export const Settings = {
    //General
    gravity: 3000,
    screenWidth: 1920,
    screenHeight: 1080,
    groundHeight: 60,

    //Player:
    startY: 600,
    startX: 200,
    runSpeed: 400,

    //Trashcan
    trashStartX: 2100,
    trashStartY: 980,
    trashIntervalMin: 1000,
    trashIntervalMax: 3500,
    trashSpeedMin: 600,
    trashSpeedMax: 900,
    trashDamage: 100,

    //Rocket
    rocketStartY: -500,
    rocketIntervalMin: 2500,
    rocketIntervalMax: 4500,
    rocketSpeedMin: 400,
    rocketSpeedMax: 900,
    rocketDamage: 200,

    //Healthbar
    healthbarWidth: 500,
    healthbarHeight: 50,

    //Medkit
    medkitStartY: -500,
    medkitInterval: 15000,
}