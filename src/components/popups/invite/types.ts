import PopupI from '@components/popup/types';

type PropsT = {};

type StateT = {
    isCopy?: boolean;
};

interface CodePopupI extends PopupI<PropsT, StateT> {
    copyHandler(this: CodePopupI): Promise<void>;
}

export default CodePopupI;
