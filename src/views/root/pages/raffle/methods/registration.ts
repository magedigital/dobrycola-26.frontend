import { authRequests } from '@api/requests/auth.ts';

import I from '../types.ts';

const registration: I['registration'] = async function () {
    const { login } = this.state;

    await this.asyncSetState({ loadingKey: 'reg' });

    try {
        await authRequests.registration({ login, mode: 'registration' });
    } catch (e) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default registration;
