import React from 'react';

import StringService from '@services/string/String.service.ts';
import { games } from '@static/games.ts';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';

const renderGames: I['renderGames'] = function () {
    const { setState } = this.props;

    return (
        <div className="menu__games">
            <h3 className="menu__gamesTitle">
                Играй и участвуй в&nbsp;розыгрыше специальных призов
            </h3>
            <div className="menu__gamesItems">
                {(Object.keys(games) as (keyof typeof games)[]).map((n) => {
                    const game = games[n];

                    return (
                        <div
                            className="menu__gamesItem _CLICK"
                            key={n}
                            onClick={() => {
                                AppRouter.changePage({ pageName: 'gameInner', ids: { 1: n } });
                                setState(false);

                                if (n === 'DJ') {
                                    sendGoal('menuDjlightup');
                                } else if (n === 'TAP') {
                                    sendGoal('menuFest');
                                } else if (n === 'VIBE') {
                                    sendGoal('menuVibe');
                                }
                            }}
                        >
                            <div className="menu__gamesItemHead">
                                <img
                                    src={require(`@media/${game.thumb}`)}
                                    alt=""
                                    className="menu__gamesItemThumb"
                                />
                            </div>
                            <p
                                className="menu__gamesItemTitle"
                                dangerouslySetInnerHTML={{
                                    __html: new StringService().setSpaces(game.title),
                                }}
                            ></p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default renderGames;
