import { contentRequests } from '@api/requests/content.ts';

import I from '../types.ts';

const pageInit: I['pageInit'] = async function (this: I) {
    const content = await contentRequests.getContent({ name: '5ka' });

    await this.asyncSetState({ content, isInit: true });
};

export default pageInit;
