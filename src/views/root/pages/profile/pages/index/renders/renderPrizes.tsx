import React from 'react';

import Link from '@components/link/Link.tsx';
import { games } from '@static/games.ts';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

const renderPrizes: I['renderPrizes'] = function () {
    return (
        <div className="profile__block _prizes _FULL_W _COL _COL_H_CENTER">
            <div className="profile__blockHead _COL _COL_H_CENTER">
                <h3 className="profile__blockTitle _TITLE _profile _back">
                    Играй и участвуй в&nbsp;розыгрыше специальных призов
                </h3>
            </div>
            <div className="profile__blockPrizes">
                {(Object.keys(games) as (keyof typeof games)[]).map((name, key) => {
                    const game = games[name];

                    return (
                        <Link
                            className="profile__blockPrize _COL _COL_H_CENTER"
                            key={key}
                            pageName="gameInner"
                            ids={{ 1: name.toString() }}
                            callback={() => {
                                if (name === 'TAP') {
                                    sendGoal('profileFest');
                                } else if (name === 'DJ') {
                                    sendGoal('profileDjlightup');
                                } else if (name === 'VIBE') {
                                    sendGoal('profileVibe');
                                }
                            }}
                        >
                            <div className="profile__blockPrizeHead">
                                <img
                                    src={require(`@media/${game.thumb}`)}
                                    className="profile__blockPrizeImage"
                                />
                            </div>
                            <div className="profile__blockPrizeContent">{game.title}</div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default renderPrizes;
