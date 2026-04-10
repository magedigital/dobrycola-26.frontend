import { chequeRequests } from '@api/requests/cheque.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;
    const { setStep, prize } = this.props;

    if (!form) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send' });

    try {
        await chequeRequests.order({ prize: prize.code });
        await setStep('final');
    } catch (e) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
