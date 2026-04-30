import { contentRequests } from '@api/requests/content.ts';

import I from '../types.ts';

const getContent: I['getContent'] = async function () {
    try {
        const content = await contentRequests.getContent({ name: 'profile' });

        if (window.profileDataPromise) {
            await window.profileDataPromise;
        }

        await this.asyncSetState({
            content,
            pagesRenderKey: new Date().getTime().toString(),
            isInit: true,
        });
    } catch (e) {}
};

export default getContent;
