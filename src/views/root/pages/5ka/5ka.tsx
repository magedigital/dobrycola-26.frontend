import React from 'react';

import Page from '@components/page/Page.tsx';

import Header from './components/header/Header.tsx';

import FiveKaI from './types.ts';

class FiveKa extends Page<FiveKaI['props'], FiveKaI['state']> implements FiveKaI {
    parent: FiveKaI['parent'];

    constructor(props: FiveKaI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    mode = '5ka' as const;

    pageName = '5ka';

    render() {
        return this.renderPage({
            render: () => (
                <>
                    <Header />
                </>
            ),
        });
    }
}

export default FiveKa;
