import { contentRequests } from '@api/requests/content.ts';

import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { prizeOrderPopup } = this.props;
    const { code } = prizeOrderPopup;
    const content = await contentRequests.getContent({ name: 'profile' });
    const prize = content.components.extra5ka.prizes.find((p) => p.code === code);

    await this.asyncSetState({ prize, isInit: !!prize });
};

export default init;
