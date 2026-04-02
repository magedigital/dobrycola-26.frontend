import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

const send: I['send'] = async function () {
    const { inProcess } = this.state;

    if (inProcess) {
        return;
    }

    sendGoal('profileRaffleBtn');

    await this.asyncSetState({ loadingKey: 'send' });
    await this.startRaffle();
    await this.asyncSetState({ loadingKey: undefined });
};

export default send;
