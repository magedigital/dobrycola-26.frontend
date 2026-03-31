import { API } from '@api/api';
import { PrizeItemT, ResultPrizeT } from '@components/popups/raffle/types';
import request from '@utils/request';

import { RaffleDataT } from '../../views/root/pages/raffle/types';

async function start({ play, id }: { play: boolean; id: string }): Promise<RaffleDataT> {
    const r = await request<RaffleDataT>({
        method: 'POST',
        url: API.RAFFLE.START,
        data: {
            play,
            ...(play ? { guid: id } : {}),
        },
    });

    return r.data;
}

async function game({
    play,
}: {
    play: boolean;
}): Promise<{ prize: ResultPrizeT; prizeList: PrizeItemT[] }> {
    const r = await request<{ prize: ResultPrizeT; prizeList: PrizeItemT[] }>({
        method: 'POST',
        url: API.RAFFLE.GAME,
        data: {
            play,
        },
    });

    return r.data;
}

export const raffleRequests = {
    start,
    game,
};
