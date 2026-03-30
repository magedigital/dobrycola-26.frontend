import React from 'react';

import Game from '@components/game/Game.tsx';
import Page from '@components/page/Page.tsx';
import Pages from '@components/pages/Pages.tsx';
import { games } from '@static/games.ts';

import GamesI from './types.ts';

import { AppRouter } from '../../../../index.tsx';

class Games extends Page<GamesI['props'], GamesI['state']> implements GamesI {
    parent: GamesI['parent'];

    constructor(props: GamesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();

        this.unmountHandlers.all = () => {
            if (window.deactivateGameApp) {
                window.deactivateGameApp();
            }
        };
    }

    mode = 'inner' as const;

    render() {
        return this.renderPage({
            render: () => (
                <div className="profile _games">
                    <Pages
                        pagesClass="profile__games"
                        itemClass="profile__game"
                        context={this}
                        pages={{
                            gameInner: {
                                render(d) {
                                    return <Game name={d.id as keyof typeof games} />;
                                },
                            },
                        }}
                        filter={(name) => AppRouter.pages[name].parentName === 'game'}
                        parentName="game"
                    />
                </div>
            ),
            className: '_game',
            withClose: false,
        });
    }
}

export default Games;
