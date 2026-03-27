import PopupI from '@components/popup/types';
import { StoreT } from '@store/store';

import { codeFormSteps } from './static/steps';

type PropsT = {
    codePopup: StoreT['codePopup'];
};

type StateT = {
    currentStep: keyof typeof codeFormSteps;

    updateListRenderKey?: number;
};

interface CodePopupI extends PopupI<PropsT, StateT> {
    setStep(s: keyof typeof codeFormSteps): Promise<void>;

    renderStep(this: CodePopupI, id: keyof typeof codeFormSteps): React.ReactNode;
}

export default CodePopupI;
