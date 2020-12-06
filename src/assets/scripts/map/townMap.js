/**
* environment script for map
* mapId = 'town'
* scriptKey = 'TownMap'
*/

/**
* an environment script is a script that accompanies a playable map
*
* this script accepts the mobx rootStore as a constructor argument to grant the
* script access to the rest of the game data
*/
class EnvironmentScript {
    /** initialize the rootStore to gain access to the rest of the game data */
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    /**
    * the script's update method is called on every iteration of the game's clock
    */
    update = () => {
        const playerX = this.rootStore.player.x;
        const playerUpperX = this.rootStore.player.x + this.rootStore.player.width;
        const playerY = this.rootStore.player.y;
        const playerUpperY = this.rootStore.player.y + (this.rootStore.player.height / 2);
        const houseEntry = this.rootStore.map.tiles.filter((t) => t.id === 'house-entry')[0];
        if (houseEntry && houseEntry.conflictsWith(playerX, playerUpperX, playerY, playerUpperY)) this.enterHouse();
    }

    /**
    * change the active map to one with the id 'house'
    */
    enterHouse = () => {
        this.rootStore.map.init('house');
        this.rootStore.player.setXY(300, 25);
    }
}

export default EnvironmentScript;
