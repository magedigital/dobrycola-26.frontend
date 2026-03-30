import DefaultI from '@components/default/types';
import { StoreT } from '@store/store';

import { regSteps } from './static/steps';

type PropsT = {
    device: StoreT['device'];
};

type StateT = {
    currentStep: keyof typeof regSteps;
    updateListRenderKey?: number;
};

interface RegPopupI extends DefaultI<PropsT, StateT> {
    login?: string;
    mailService?: string;

    setStep(
        s: keyof typeof regSteps,
        data?: { login: string; mailService?: string },
    ): Promise<void>;

    renderStep(this: RegPopupI, s: keyof typeof regSteps): React.ReactNode;
}

export default RegPopupI;
