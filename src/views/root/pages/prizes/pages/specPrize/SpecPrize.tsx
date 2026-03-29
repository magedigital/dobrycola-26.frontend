import React from 'react';

import Button from '@components/button/Button.tsx';
import Default from '@components/default/Default.tsx';
import Media from '@components/media/Media.tsx';

import SpecPrizeI from './types.ts';

class SpecPrize extends Default<SpecPrizeI['props'], SpecPrizeI['state']> implements SpecPrizeI {
    parent: SpecPrizeI['parent'];

    constructor(props: SpecPrizeI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <div ref={this.parent} className="prizesPage _FULL_W _COL _COL_H_CENTER">
                {/* <CustomHead title="Призы - Специальный приз в игровых локациях" /> */}

                <div className="prizesPage__head _COL _COL_H_CENTER">
                    <h3 className="prizesPage__headTitle">
                        СПЕЦИАЛЬНЫЙ ПРИЗ <br className="_MOBILE" />в игровых локациях
                    </h3>
                    <p className="prizesPage__headDescription">
                        Для участия в розыгрыше попади <br className="_MOBILE" />
                        в&nbsp;<b>ТОП-500</b> игроков недели
                    </p>
                </div>
                <div className="prizesPage__content _FULL_W _COL _COL_H_CENTER">
                    <div className="prizesPage__spec">
                        <div className="prizesPage__specBanner">Сертификат на 4000₽</div>
                    </div>
                    <div className="prizesPage__button">
                        <Button
                            className="_purple"
                            onClick={() => {
                                // changePage({ pageName: 'index', query: { ancor: 'games' } });
                            }}
                        >
                            <Media check={(d) => d === 'desktop'}>Перейти К игровым локациям</Media>
                            <Media check={(d) => d === 'mobile'}>К игровым локациям</Media>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpecPrize;
