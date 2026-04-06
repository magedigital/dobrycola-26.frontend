import { AnketDataT, anketRequests } from '@api/requests/anket.ts';
import { appStore } from '@store/store.tsx';
import checkAuth from '@utils/checkAuth.ts';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

import getSavedRaffle from '../../../../raffle/utils/getSavedRaffle.ts';

const sendForm: I['sendForm'] = async function (d) {
    const data: Partial<AnketDataT> = {
        firstName: d.firstName,
        lastName: d.lastName,
        thirdName: d.thirdName,
        phone: d.phone,
        agreement: !!d.agreement,
        mailing: d.mailing ? '1' : undefined,
        password1: d.password,
        password2: d.password2,
        referral: d.referral,
    };

    const { prize: rafflePrize } = getSavedRaffle();

    if (rafflePrize) {
        data.welcomeGameId = rafflePrize.id;
    }

    await anketRequests.send({ data });

    if (appStore.getState().authUser?.isFirstAnket) {
        sendGoal('regComplete');
    }

    await checkAuth({ redirect: true });
};

export default sendForm;
