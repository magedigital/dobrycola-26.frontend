import { anketRequests } from '@api/requests/anket.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (data) {
    await anketRequests.send({ data });

    if (window.Telegram) {
        window.Telegram.WebApp?.close();
    }
};

export default sendForm;
