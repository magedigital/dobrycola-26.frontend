import PopupI from '@components/popup/types';
import { StoreT } from '@store/store';

import { ProfileOrderT } from '../../../views/root/pages/profile/types';
import { prizeOrderFormSteps } from './static/steps';

type PropsT = {
    prizeOrderPopup: StoreT['prizeOrderPopup'];
};

type StateT = {
    currentStep: keyof typeof prizeOrderFormSteps;
    prize?: ProfileOrderT;

    updateListRenderKey?: number;
};

interface PrizeOrderPopupI extends PopupI<PropsT, StateT> {
    setStep(s: keyof typeof prizeOrderFormSteps): Promise<void>;

    renderStep(this: PrizeOrderPopupI, id: keyof typeof prizeOrderFormSteps): React.ReactNode;
}

export default PrizeOrderPopupI;
