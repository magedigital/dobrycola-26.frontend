import { appStore } from '@store/store.tsx';

import I from '../types.ts';

const scriptSrc = 'js/main.29bc6fef.js';
const styleSrc = 'css/main.35876ac6.css';
const root = '/_game/static';
const fonts = [
    'https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap',
    'https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Onest:wght@100..900&display=swap',
];

const init: I['init'] = async function (this: I) {
    const { callback } = this.props;

    window.onAppReadyHandler = this.initGame.bind(this);
    window.getAppRoot = () => this.parent.current!;

    this.parent.current!.setAttribute('oninit', 'onAppReadyHandler');

    if (appStore.getState().isGameInit) {
        if (window.deactivateGameApp) {
            window.deactivateGameApp();
        }
        if (window.activateGameApp) {
            window.activateGameApp();
        }

        return;
    }

    const link = document.createElement('link');

    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', `${root}/${styleSrc}`);

    document.head.appendChild(link);

    const script = document.createElement('script');

    script.onload = async () => {
        if (window.activateGameApp) {
            window.activateGameApp();
        }

        appStore.getState().gameInit();
        await this.asyncSetState({ isInit: true });

        if (callback) {
            callback();
        }
    };

    script.src = `${root}/${scriptSrc}`;

    document.head.appendChild(script);

    fonts.forEach((font) => {
        const l = document.createElement('link');

        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', font);

        document.head.appendChild(l);
    });
};

export default init;
