import axios from 'axios';

import { codeRequests } from '@api/requests/code.ts';
import { checkPixel } from '@utils/checkPixel.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;
    const { setStep } = this.props;

    if (!form) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send' });

    if (checkPixel() && window.utms?.includes('yabbi')) {
        try {
            await axios.get('bu--s350.sync.t2.ru/api/v1/postback?request=sync');
        } catch (e) {}
    }

    try {
        await codeRequests.reg({ code: form.code! });
        await setStep('final');
    } catch (e) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
