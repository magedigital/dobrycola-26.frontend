import { contentRequests } from '@api/requests/content.ts';

import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { orderPopup } = this.props;
    const { current } = orderPopup;

    if (typeof current === 'number') {
        await this.asyncSetState({ currentOrderIndex: current });
    }

    const content = await contentRequests.getContent({ name: 'profile' });

    await this.asyncSetState({ content, isInit: true });

    this.sliderInit();

    this.unmountHandlers.all = () => {
        if (this.slider) {
            this.slider.destroy();
        }
    };
};

export default init;
