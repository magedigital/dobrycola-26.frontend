import axios from 'axios';

import { authRequests } from '@api/requests/auth.ts';
import { enums } from '@global/enums.ts';
import checkAuth from '@utils/checkAuth.ts';
import { checkPixel } from '@utils/checkPixel.ts';
import { getCookie } from '@utils/cookies.ts';
import { RequestErrorT } from '@utils/request.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;

    if (!form) {
        return;
    }

    if (getCookie(enums.ACCESS_TOKEN)) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        await authRequests.login({
            login: form.login,
            password: form.password,
        });
        await checkAuth({ redirect: true });

        if (checkPixel()) {
            try {
                await axios.get('bu--s351.sync.t2.ru/api/v1/postback?request=sync');
            } catch (e) {}
        }
    } catch (e) {
        const error = e as RequestErrorT;

        await this.asyncSetState({ error: { text: error?.errorText } });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
