import { API } from '@api/api';
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

export const raffleRequests = {
    start,
};
