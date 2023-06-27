import {ImageSource, Loader, Sound} from 'excalibur'
import walkSheet from '../img/characters/player_spritesheet_walk_1x15.png'
import runSheet from '../img/characters/player_spritesheet_run_1x15.png'
import jumpSheet from '../img/characters/player_spritesheet_jump_1x15.png'
import backgroundImage from '../img/backgrounds/generative_background.png'
import rocket from '../img/objects/rocket.png'
import trash from '../img/objects/trashcan.png'
import medkit from '../img/objects/medkit.png'
import jump from '../sound/jump.mp3'
import music from '../sound/music.mp3'
import thanks from '../sound/thanks.mp3'
import explosion from '../img/objects/explosion_spritesheet.png'

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
    Rocket: new ImageSource(rocket),
    Medkit: new ImageSource(medkit),
    Explosion: new ImageSource(explosion),
    JumpSound: new Sound(jump),
    Music: new Sound(music),
    ThanksSound: new Sound(thanks)

    // rocket: new ImageSource(rocket)

}
const ResourceLoader = new Loader([
    Resources.PlayerWalk, Resources.PlayerRun,
    Resources.PlayerJump, Resources.Background,
    Resources.Trash, Resources.Rocket,
    Resources.JumpSound, Resources.Music,
    Resources.ThanksSound, Resources.Medkit,
    Resources.Explosion
])

export { Resources, ResourceLoader }