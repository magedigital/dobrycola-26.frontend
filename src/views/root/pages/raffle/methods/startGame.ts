import { raffleRequests } from '@api/requests/raffle.ts';

import I, { SavedRafflePrizeT } from '../types.ts';

import getSavedRaffle from '../utils/getSavedRaffle.ts';

const startGame: I['startGame'] = async function ({ play }) {
    const r = await raffleRequests.start({ play, id: this.gameId });
    const { prize, prizeThumbs } = r;

    if (play) {
        const curIndex = Math.floor((this.startDur + this.resultDur) / 300) + 2;

        const savedPrize: SavedRafflePrizeT = {
            id: this.gameId,
            image: prize.image,
            name: prize.name,
            date: new Date().getTime(),
            index: curIndex,
        };

        if (0) {
            localStorage.setItem(getSavedRaffle().name, JSON.stringify(savedPrize));
        }

        await this.asyncSetState({ curIndex, prize });
    }

    await this.asyncSetState({ items: prizeThumbs });
};

export default startGame;
