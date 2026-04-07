import { authRequests } from '@api/requests/auth.ts';
import { appStore } from '@store/store.tsx';
import checkAuth from '@utils/checkAuth.ts';
import { RequestErrorT } from '@utils/request.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (code) {
    const { login } = this.props;

    if (!login) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        await authRequests.botLogin({ login, password: code, isCode: true });

        await checkAuth({ redirect: true });

        if (appStore.getState().authUser?.status !== 'ANKET_REQUIRED') {
            if (window.Telegram?.WebApp) {
                window.Telegram.WebApp.close();
            }
        }
    } catch (e) {
        const error = e as RequestErrorT;
        await this.asyncSetState({ error: { text: error?.errorText } });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
