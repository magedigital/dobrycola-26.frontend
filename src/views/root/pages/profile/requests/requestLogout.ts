import { authRequests } from '@api/requests/auth.ts';
import { logoutHandler } from '@utils/checkAuth.ts';

import I from '../types.ts';

const requestLogout: I['requestLogout'] = async function () {
    await this.asyncSetState({ loadingKey: 'logout' });

    try {
        await authRequests.logout();
        await logoutHandler();
    } catch (error) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default requestLogout;
