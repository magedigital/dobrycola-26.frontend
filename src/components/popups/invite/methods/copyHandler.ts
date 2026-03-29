import copyInBuffer from '@utils/copyInBuffer.ts';

import I from '../types.ts';

import getLink from '../utils/getLink.ts';

const copyHandler: I['copyHandler'] = async function () {
    if (this.timers.copy) {
        clearTimeout(this.timers.copy);
    }

    try {
        await copyInBuffer(getLink());

        await this.asyncSetState({ isCopy: true });

        this.timers.copy = setTimeout(async () => {
            await this.asyncSetState({ isCopy: false });
        }, 3_000);
    } catch (e) {}
};

export default copyHandler;
