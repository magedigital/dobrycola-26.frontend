import { enums } from '@global/enums.ts';
import { games } from '@static/games.ts';
import { appStore } from '@store/store.tsx';
import checkAuth from '@utils/checkAuth.ts';
import { getCookie } from '@utils/cookies.ts';

import I, { GameDataT } from '../types.ts';

const initGame: I['initGame'] = function (app) {
    const { close, name } = this.props;

    if (!games[name]) {
        return;
    }

    const updateLayout = () => {
        app.resize(this.parent.current!.clientWidth, this.parent.current!.clientHeight);
    };

    updateLayout();

    window.addEventListener('load', updateLayout);
    window.addEventListener('resize', updateLayout);

    window.JWT = getCookie(enums.ACCESS_TOKEN);

    const data: GameDataT = {
        gameData: {
            id: name,
            request1: { url: '/api/TentGame', method: 'POST' },
            request2: { url: '/api/TentGame', method: 'POST' },
        },
        gameIndex: games[name].index,
        closeHandler: close,
        registerHandler: () => {
            appStore.getState().setPopup({ name: 'regPopup' });
        },
        signUpHandler: () => {
            appStore.getState().setPopup({ name: 'loginPopup' });
        },
        gameStartHandler: () => undefined,
        gameFinishHandler: async () => {
            await checkAuth({});
        },
        switchToMobileWidth: 480,
        userNotAuthorized: !window.JWT,
        activityIsOver: false,
        codeNotRegistered: false,
    };

    app.setData(data);

    this.unmountHandlers.all = () => {
        window.removeEventListener('load', updateLayout);
        window.removeEventListener('resize', updateLayout);
    };
};

export default initGame;
