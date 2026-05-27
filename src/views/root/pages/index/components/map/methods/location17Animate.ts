import setAnimate from '@utils/setAnimate.ts';

import I from '../types.ts';

const location17Animate: I['location17Animate'] = function () {
    const locationNode = this.parent.current!.querySelector<HTMLElement>(
        `.indexMap__mapLocation[data-location="17"]`,
    );

    if (!locationNode) {
        return;
    }

    const timerId = 'lights-17';
    const ballNode = locationNode.querySelector<HTMLElement>('.indexMap__mapLocation17Ball')!;
    const startManNode = locationNode.querySelector<HTMLElement>('.indexMap__mapLocation17Man._6')!;
    const endManNode = locationNode.querySelector<HTMLElement>('.indexMap__mapLocation17Man._7')!;

    clearTimeout(this.timers[timerId]);

    let curProgress = 0;
    let curDir: 'start' | 'end' = 'start';

    const draw = () => {
        const ang = curProgress * 180;
        const y = -Math.sin((Math.PI * ang) / 180);

        ballNode.style.transform = `translate(${curProgress * 320}%,${y * 150}%) rotate(${curProgress * 300}deg)`;
    };

    const start = () => {
        setAnimate({
            duration: 1_000,
            timing: (t) => t,
            draw: (p) => {
                curProgress = p;
                draw();

                if (p > 0.88 && curDir === 'start') {
                    startManNode.classList.remove('_trash');
                    endManNode.classList.add('_trash');
                    curDir = 'end';
                }
            },
            callback: back,
        });
    };

    const back = () => {
        setAnimate({
            duration: 1_000,
            timing: (t) => t,
            draw: (p) => {
                curProgress = 1 - p;
                draw();

                if (p > 0.88 && curDir === 'end') {
                    startManNode.classList.add('_trash');
                    endManNode.classList.remove('_trash');
                    curDir = 'start';
                }
            },
            callback: start,
        });
    };

    start();
};

export default location17Animate;
