import { enums } from '@global/enums.ts';
import checkAuth from '@utils/checkAuth.ts';
import { getCookie, setCookie } from '@utils/cookies.ts';

import I from '../types.ts';

window.visibillityHandlers = {};

const init: I['init'] = async function () {
    const rootJWT = document.querySelector('#root')!.getAttribute('data-jwt');

    if (rootJWT) {
        setCookie(enums.ACCESS_TOKEN, rootJWT);
    }

    window.userAuthorized = !!getCookie(enums.ACCESS_TOKEN);

    this.resizeHandler(true);

    document.body.style.setProperty('--mediaM', `${window.mediaM}px`);

    window.addEventListener('resize', () => {
        this.resizeHandler();
    });

    this.popupsHandler(true);

    document.addEventListener('mouseenter', () => {
        Object.keys(window.visibillityHandlers).forEach((k) => {
            window.visibillityHandlers[k](true);
        });
    });

    document.addEventListener('mouseleave', () => {
        Object.keys(window.visibillityHandlers).forEach((k) => {
            window.visibillityHandlers[k](false);
        });
    });

    (document.addEventListener as CustomListenerT)('changePage', this.changePageListener);

    checkAuth({});
};

export default init;
