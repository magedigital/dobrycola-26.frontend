import EditorI from '@components/editor/types';

type PropsT = {};

type StateT = {};

interface RegPopupI extends EditorI<PropsT, StateT> {
    sendForm(this: RegPopupI, d: any): Promise<void>;

    renderContent(this: RegPopupI): React.ReactNode;
}

export default RegPopupI;
