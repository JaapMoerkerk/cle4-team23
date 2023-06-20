import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import walkSheet from '../img/characters/player_spritesheet_walk_1x15_cropped.png'
import runSheet from '../img/characters/player_spritesheet_run_1x15.png'
import jumpSheet from '../img/characters/player_spritesheet_jump_1x15.png'
import backgroundImage from '../img/backgrounds/park1943_present_long.png'
import trash from "../img/objects/TrashCan.png"
// import rocket from "./img/rocket.png"

/**
 * Resources loader
 * @type {{Player: ImageSource, Background: ImageSource}}
 */

const Resources = {
    PlayerWalk: new ImageSource(walkSheet),
    PlayerRun: new ImageSource(runSheet),
    PlayerJump: new ImageSource(jumpSheet),
    Background: new ImageSource(backgroundImage),
    Trash: new ImageSource(trash),
    // rocket: new ImageSource(rocket)

}
const ResourceLoader = new Loader([
    Resources.PlayerWalk, Resources.PlayerRun,
    Resources.PlayerJump, Resources.Background,
    Resources.Trash,
    // Resources.rocket
])

export { Resources, ResourceLoader }