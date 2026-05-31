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
    let drawK = 0;
    let dur = 0;

    const setOptions = () => {
        drawK = 0.2 + Math.random() * 1.5;
        dur = 400 + drawK * (1000 / 3);
    };

    setOptions();

    const draw = () => {
        const ang = curProgress * 180;
        const y = -Math.sin((Math.PI * ang) / 180) * drawK;

        ballNode.style.transform = `translate(${curProgress * 320}%,${y * 150}%) rotate(${curProgress * 300}deg)`;
    };

    const start = () => {
        setOptions();
        setAnimate({
            duration: dur,
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
            getId: (i) => {
                this.animatesIds.loc17 = i;
            },
            callback: back,
        });
    };

    const back = () => {
        setOptions();
        setAnimate({
            duration: dur,
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
            getId: (i) => {
                this.animatesIds.loc17 = i;
            },
            callback: start,
        });
    };

    start();
};

export default location17Animate;
