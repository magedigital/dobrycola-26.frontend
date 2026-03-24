import copyInBuffer from '@utils/copyInBuffer.ts';

import I from '../types.ts';

const copyHandler: I['copyHandler'] = async function () {
    const { authUser } = this.props;

    if (this.timers.copy) {
        clearTimeout(this.timers.copy);
    }

    try {
        await copyInBuffer(authUser!.userId);

        await this.asyncSetState({ isCopy: true });

        // sendGoal('inviteFriendCopyBtn');

        this.timers.copy = setTimeout(async () => {
            await this.asyncSetState({ isCopy: false });
        }, 3_000);
    } catch (error) {}
};

export default copyHandler;
