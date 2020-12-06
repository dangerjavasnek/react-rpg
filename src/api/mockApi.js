/** @module api/mockApi */
import mockData from 'mockData';

const data = {
    player: { ...mockData.playerInfo },
    inventory: [ ...mockData.playerInventory ],
};

const updatePlayer = (player) => new Promise((resolve) => {
    data.player = { ...data.player, ...player };
    return resolve();
});

const player = {
    get: () => Promise.resolve(data.player),
    put: (player) => updatePlayer(player),
};

const inventory = {
    get: () => Promise.resolve(data.inventory),
    post: () => Promise.resolve(),
};

const mockApi = {
    player,
};

export default mockApi;
