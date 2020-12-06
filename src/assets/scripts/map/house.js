/**
* environment script for map
* mapId = 'house'
* scriptKey = 'HouseMap'
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
        const playerUpperY = this.rootStore.player.y + this.rootStore.player.height;
        const houseEntry = this.rootStore.map.tiles.filter((t) => t.id === 'house-exit')[0];
        if (houseEntry && houseEntry.conflictsWith(playerX, playerUpperX, playerY, playerUpperY)) this.enterTown();
    }

    /**
    * change the active map to one with the id 'town'
    */
    enterTown = () => {
        this.rootStore.map.init('town');
        this.rootStore.player.setXY(425, 240);
    }
}

export default EnvironmentScript;
