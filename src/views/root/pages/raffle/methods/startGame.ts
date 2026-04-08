import { raffleRequests } from '@api/requests/raffle.ts';

import I, { SavedRafflePrizeT } from '../types.ts';

import getSavedRaffle from '../utils/getSavedRaffle.ts';

const startGame: I['startGame'] = async function ({ play }) {
    const { items = [] } = this.state;

    // if (0) {
    //     const curIndex =
    //         this.allCount - items.length - Math.floor((this.startDur + this.resultDur) / 300);
    //     console.log(curIndex);
    //     await this.asyncSetState({
    //         curIndex,
    //         prize: {
    //             image: 'https://dev.2025-summer.dobrycola-promo.srv08.ru/upload/iblock/7d3/jvf3jb2rh6umefpyny3rak7alpzq6wn4.png',
    //             name: 'Prize',
    //         },
    //     });

    //     return;
    // }

    const r = await raffleRequests.start({ play, id: this.gameId });
    const { prize, prizeThumbs } = r;

    if (play) {
        const curIndex =
            this.allCount - items.length - Math.floor((this.startDur + this.resultDur) / 300);

        const savedPrize: SavedRafflePrizeT = {
            id: this.gameId,
            image: prize.image,
            name: prize.name,
            date: new Date().getTime(),
            index: curIndex,
        };

        localStorage.setItem(getSavedRaffle().name, JSON.stringify(savedPrize));

        await this.asyncSetState({ curIndex, prize });

        return;
    }

    await this.asyncSetState({ items: prizeThumbs });
};

export default startGame;
