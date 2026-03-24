import { contentRequests } from '@api/requests/content.ts';

import I from '../types.ts';

const getContent: I['getContent'] = async function () {
    try {
        const content = await contentRequests.getContent({ name: 'main' });
        await this.asyncSetState({ content, isInit: true });
    } catch (e) {}
};

export default getContent;
