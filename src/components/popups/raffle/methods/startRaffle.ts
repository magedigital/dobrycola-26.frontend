import { raffleRequests } from '@api/requests/raffle.ts';

import { setError } from '../../../../views/root/components/errors/utils/errorHandler.ts';

import I from '../types.ts';

const startRaffle: I['startRaffle'] = async function (force) {
    const { inProcess, isComplete, isConfirm } = this.state;

    if ((inProcess || isComplete) && force !== true) {
        return;
    }

    if (!isConfirm) {
        setError({ text: 'Необходимо подтвердить участие', type: 'error' });

        return;
    }

    this.tryCounter = 0;
    this.allCounter = 0;

    await this.asyncSetState({ loadingKey: 'start' });

    try {
        const { prize: resultPrize } = await raffleRequests.game({ play: true });
        await this.asyncSetState({
            resultPrize,
            inProcess: true,
            isError: false,
            isComplete: false,
        });
        this.startTrying();
    } catch (e) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default startRaffle;
