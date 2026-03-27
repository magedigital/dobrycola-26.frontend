import { setError } from '../../../components/errors/utils/errorHandler.ts';

import I from '../types.ts';

const start: I['start'] = async function () {
    const { isConfirm } = this.state;

    if (this.isStart) {
        return;
    }

    if (!isConfirm) {
        setError({ text: 'Необходимо отметить согласие', type: 'error' });
        return;
    }

    this.isStart = true;
    await this.asyncSetState({ loadingKey: 'start' });

    try {
        await this.startGame({ play: true });
        await this.asyncSetState({ isStart: true, loadingKey: undefined });

        this.startCarusel();

        this.intervals.slider = setInterval(() => {
            this.slider!.buttonHandler({ dir: 'next' });
        }, 300);
    } catch (e) {
        await this.asyncSetState({ loadingKey: undefined });
    }
};

export default start;
