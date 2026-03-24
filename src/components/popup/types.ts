import EditorI from '@components/editor/types';
import { PopupsT } from '@store/popups';

type PropsT = {
    isInit?: boolean;
};

type StateT = {
    isHeightMin?: boolean;
    isInit?: boolean;
    isMenuShow?: boolean;
};

type RenderContentT = (data: { id?: string }) => React.ReactNode;

interface PopupI<P = {}, S = {}> extends EditorI<PropsT & P, StateT & S> {
    name: keyof PopupsT;
    isHeightMin?: boolean;

    close(): void;
    closeCallback?: () => void;

    setMenuState(this: PopupI, s: boolean): Promise<void>;

    resizeHandler(this: PopupI): Promise<void>;
    setResize: () => void;

    renderClose(this: PopupI): React.ReactNode;
    renderPopup(
        this: PopupI,
        data: { render: RenderContentT; id?: string; canClose?: boolean },
    ): React.ReactNode;
    renderContent: RenderContentT;
}

export default PopupI;
export type { RenderContentT as PopupRenderContentT };
