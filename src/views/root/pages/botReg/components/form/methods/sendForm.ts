import { authRequests } from '@api/requests/auth.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;
    const { setStep } = this.props;

    if (!form) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send' });

    try {
        const response = await authRequests.botRegistration({ login: form.login });

        await setStep('code', {
            login: form.login!,
            mailService: response.mailService,
        });
    } catch (e) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
