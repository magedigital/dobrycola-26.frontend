import I from '../types.ts';

const startFires: I['startFires'] = function () {
    const firesNode = this.parent.current!.querySelector<HTMLElement>('.raffle__fires');
    const canvas = firesNode?.querySelector('canvas');

    if (!firesNode || !canvas) {
        return;
    }

    const ctx = canvas.getContext('2d')!;

    const width = firesNode.offsetWidth;
    const height = firesNode.offsetHeight;
    const padding = width / 3.5;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    canvas.width = width;
    canvas.height = height;

    const items: Record<
        string,
        {
            size: number;
            angel: number;
            diffAngel: number;
            speed: number;
            opacity: number;
            x: number;
            y: number;
            diff: number;
        }
    > = {};

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    const getPosition = (ang: number, d: number): { x: number; y: number } => {
        const x = Math.cos(ang) * d * (halfWidth - padding) + halfWidth;
        const y = Math.sin(ang) * d * (halfHeight - padding) + halfHeight;

        return { x, y };
    };

    let angel = 0;
    let step = 0;

    while (angel < 360) {
        angel += 4;
        step += 1;

        const radAngel = angel * (Math.PI / 180);
        const opacity = Math.random() / (10 / 9) + 0.1;
        const diff = Math.random() / (10 / 5) + 0.8;
        const size = Math.random() * 2 + 1;
        const speed = Math.random() + 1;
        const { x, y } = getPosition(radAngel, diff);

        items[step] = {
            size,
            angel: radAngel,
            diffAngel: 0,
            speed,
            opacity,
            diff,
            x,
            y,
        };
    }

    const draw = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.restore();

        Object.keys(items).forEach((k) => {
            const item = items[k];
            let opacity = item.opacity;

            if (item.diff > 1.8) {
                item.diff = 1;
            }

            if (item.diff > 1.6) {
                opacity = opacity * (1.8 - item.diff) * (10 / 2);
            }

            if (item.diff < 1.2) {
                opacity -= opacity * (1.2 - item.diff) * (10 / 2);
            }

            item.diff += 0.005 * item.speed;
            item.diffAngel -= 0.0032;

            const pos = getPosition(item.angel + item.diffAngel, item.diff);
            const { x, y } = pos;

            const { size } = item;

            ctx.beginPath();
            ctx.arc(x, y, size, 0, 2 * Math.PI, false);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.fill();
        });

        this.fireId = requestAnimationFrame(draw);
    };

    this.fireId = requestAnimationFrame(draw);
};

export default startFires;
