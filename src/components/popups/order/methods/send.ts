import { orderRequests } from '@api/requests/order.ts';
import { appStore } from '@store/store.tsx';

import { setError } from '../../../../views/root/components/errors/utils/errorHandler.ts';

import I from '../types.ts';

import { AppRouter } from '../../../../index.tsx';

const send: I['send'] = async function () {
    const { loadingKey, content, currentOrderIndex, isConfirm } = this.state;

    // sendGoal('profileOrderPrizeFinalBtn');

    if (!content || loadingKey || typeof currentOrderIndex !== 'number') {
        return;
    }

    if (!isConfirm) {
        setError({ text: 'Необходимо подтвердить заказ', type: 'error' });

        return;
    }

    const currentMerch = content.components.buy.merch.prizes[currentOrderIndex];

    if (!currentMerch) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send' });

    try {
        await orderRequests.send({ prize: currentMerch.code });

        if (window.Telegram) {
            window.Telegram.WebApp?.close();
        }

        appStore.getState().closePopup({ name: 'orderPopup', pushHistory: false });
        AppRouter.changePage({ pageName: 'profile-prizes' });

        setError({ text: 'Приз заказан', type: 'success' });
    } catch (e) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default send;
