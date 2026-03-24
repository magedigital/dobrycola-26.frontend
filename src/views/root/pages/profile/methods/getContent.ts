import { authRequests } from '@api/requests/auth.ts';
import { contentRequests } from '@api/requests/content.ts';

import I from '../types.ts';

const getContent: I['getContent'] = async function () {
    try {
        const data = await authRequests.getInfo();
        const content = await contentRequests.getContent({ name: 'profile' });

        await this.asyncSetState({
            data,
            content,
            pagesRenderKey: new Date().getTime().toString(),
        });
    } catch (e) {}
};

export default getContent;
