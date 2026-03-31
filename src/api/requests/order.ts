import { API } from '@api/api';
import request from '@utils/request';

import { RaffleDataT } from '../../views/root/pages/raffle/types';

async function send({ prize }: { prize: string }): Promise<RaffleDataT> {
    const r = await request<RaffleDataT>({
        method: 'POST',
        url: API.ORDER.SEND,
        data: {
            prize,
        },
    });

    return r.data;
}

export const orderRequests = {
    send,
};
