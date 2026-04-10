import axios from 'axios';

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
        await authRequests.login({
            login,
            password: code,
            isCode: true,
            ...(appStore.getState().authUser?.status === 'EMAIL_CONFIRM_REQUIRED'
                ? { confirmEmail: true }
                : {}),
        });

        await checkAuth({ redirect: true });

        if (window.reachGoal) {
            try {
                window.reachGoal('Y2xpZW50SWQ9MjM3MCZjb3VudGVySWQ9MTc3MCZnb2FsSWQ9MTQzMA==');
            } catch (e) {}
        }

        if (window._tmr) {
            try {
                window._tmr.push({ type: 'reachGoal', id: 3752391, goal: 'Registration_ST_26' });
            } catch (error) {}
        }

        try {
            await axios.get('https://sync.opendsp.ru/match/sp?sadd=298');
        } catch (e) {}

        try {
            await axios.get('event-1-ad424.sync.sspnet.tech/sync');
        } catch (e) {}

        try {
            await axios.get('bu--s349.sync.t2.ru/api/v1/postback?request=sync');
        } catch (e) {}
    } catch (e) {
        const error = e as RequestErrorT;
        await this.asyncSetState({ error: { text: error?.errorText } });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
