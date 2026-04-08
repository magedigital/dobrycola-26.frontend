import PageI from '@components/page/types';
import Slider from '@services/slider/Slider';

type PropsT = {};

type StateT = {
    loadingKey?: string;
    isStart?: boolean;
    isComplete?: boolean;
    isResult?: boolean;
    isConfirm?: boolean;
    login?: string;
    prize?: {
        name: string;
        image: string;
    };
    items?: RaffleDataT['prizeThumbs'];
    curIndex?: number;
};

type SavedRafflePrizeT = {
    id: string;
    index: number;
    name: string;
    image: string;
    date: number;
};

type RaffleDataT = {
    prize: {
        name: string;
        image: string;
    };
    prizeThumbs: {
        title: string;
        thumb: string;
        code: string;
    }[];
};

interface RaffleI extends PageI<PropsT, StateT> {
    slider?: Slider;
    gameId: string;
    allCount: number;

    isStart?: boolean;
    rotateDeg: number;
    rotateSpeed: number;
    animationId?: number;
    fireId?: number;
    isRotateComplete?: boolean;

    startDur: number;
    resultDur: number;

    sliderInit(this: RaffleI): void;
    start(this: RaffleI): Promise<void>;
    startCarusel(this: RaffleI): void;
    startFires(this: RaffleI): void;

    startGame(this: RaffleI, d: { play: boolean }): Promise<void>;
    registration(this: RaffleI): Promise<void>;

    renderContent(this: RaffleI): React.ReactNode;
    renderHead(this: RaffleI): React.ReactNode;
    renderSlider(this: RaffleI): React.ReactNode;
    renderSpinner(this: RaffleI): React.ReactNode;
    renderFires(this: RaffleI): React.ReactNode;

    renderStartForm(this: RaffleI): React.ReactNode;
    renderResultForm(this: RaffleI): React.ReactNode;
}

export default RaffleI;
export type { RaffleDataT, SavedRafflePrizeT };
