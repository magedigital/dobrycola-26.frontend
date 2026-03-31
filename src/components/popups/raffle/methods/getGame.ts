import { raffleRequests } from '@api/requests/raffle.ts';

import I from '../types.ts';

const getGame: I['getGame'] = async function () {
    try {
        const r = await raffleRequests.game({ play: false });
        const prizes = r.prizeList;

        await this.asyncSetState({ prizes, isInit: true });

        this.sliderInit();
    } catch (e) {}
};

export default getGame;
