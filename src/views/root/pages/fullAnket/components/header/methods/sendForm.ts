import { anketRequests } from '@api/requests/anket.ts';
import checkAuth from '@utils/checkAuth.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (d) {
    await anketRequests.send({ data: d });
    await checkAuth({ redirect: true });
};

export default sendForm;
