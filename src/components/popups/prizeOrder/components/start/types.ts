import EditorI from '@components/editor/types';

import { ProfileOrderT } from '../../../../../views/root/pages/profile/types';
import CodePopupI from '../../types';

type PropsT = {
    setStep: CodePopupI['setStep'];
    close: () => void;
    prize: ProfileOrderT;
};

type StateT = {
    form?: Partial<{ code: string }>;
};

interface StartI extends EditorI<PropsT, StateT> {
    sendForm(this: StartI): Promise<void>;
}

export default StartI;
