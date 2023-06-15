import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import playerImage from '../img/characters/player.png'
import backgroundImage from '../img/backgrounds/park1943_cartoon.png'

/**
 * Resources class
 * @type {{Player: ImageSource, Background: ImageSource}}
 */

const Resources = {
    Player: new ImageSource(playerImage),
    Background: new ImageSource(backgroundImage)
}
const ResourceLoader = new Loader([
    Resources.Player, Resources.Background
])

export { Resources, ResourceLoader }