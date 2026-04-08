import React from 'react';

import Default from '@components/default/Default.tsx';
import Icon from '@components/icon/Icon.tsx';

import init from './methods/init.ts';
import sliderInit from './methods/sliderInit.ts';

import PrizesBlockI from './types.ts';

class PrizesBlock
    extends Default<PrizesBlockI['props'], PrizesBlockI['state']>
    implements PrizesBlockI
{
    parent: PrizesBlockI['parent'];

    constructor(props: PrizesBlockI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    sliderInit = sliderInit;

    render() {
        const { name, title, prizes, mode } = this.props;

        return (
            <div
                ref={this.parent}
                className={this.getClass('fivekaPrizesBlock _FULL', this.setClass(name))}
            >
                {name === 'legend' && (
                    <>
                        {[1, 2, 3, 4].map((k) => (
                            <img
                                src={require(`@media/5ka/weekly-decor-${k}.png`)}
                                alt=""
                                className={this.getClass(
                                    'fivekaPrizesBlock__decor',
                                    this.setClass(k),
                                )}
                                key={k}
                            />
                        ))}
                    </>
                )}
                {name === 'school' && (
                    <>
                        {[5, 6, 7, 8].map((k) => (
                            <img
                                src={require(`@media/5ka/weekly-decor-${k + 8}.png`)}
                                alt=""
                                className={this.getClass(
                                    'fivekaPrizesBlock__decor',
                                    this.setClass(k),
                                )}
                                key={k}
                            />
                        ))}
                    </>
                )}
                <div className="fivekaPrizesBlock__inner _COL _FULL">
                    {name === 'school' && (
                        <>
                            {[1, 2, 3, 4].map((k) => (
                                <img
                                    src={require(`@media/5ka/weekly-decor-${k + 8}.png`)}
                                    alt=""
                                    className={this.getClass(
                                        'fivekaPrizesBlock__decor',
                                        this.setClass(k),
                                    )}
                                    key={k}
                                />
                            ))}
                        </>
                    )}
                    {name === 'legend' && (
                        <>
                            {[5, 6, 7, 8].map((k) => (
                                <img
                                    src={require(`@media/5ka/weekly-decor-${k}.png`)}
                                    alt=""
                                    className={this.getClass(
                                        'fivekaPrizesBlock__decor',
                                        this.setClass(k),
                                    )}
                                    key={k}
                                />
                            ))}
                        </>
                    )}
                    <h4 className="fivekaPrizesBlock__title">
                        {'"'}
                        {title}
                        {'"'}
                    </h4>
                    {mode === 'desktop' && (
                        <div className="fivekaPrizesBlock__prizes">
                            {prizes.map((prize, i) => (
                                <div className="fivekaPrizesBlock__prizesItem" key={i}>
                                    <div className="fivekaPrizesBlock__prize">
                                        <div className="fivekaPrizesBlock__prizeHead">
                                            <img
                                                src={prize.thumb}
                                                alt=""
                                                className="fivekaPrizesBlock__prizeThumb"
                                            />
                                        </div>
                                        <p className="fivekaPrizesBlock__prizeTitle">
                                            {prize.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {mode === 'mobile' && (
                        <div className="fivekaPrizesBlock__slider">
                            {(['prev', 'next'] as const).map((k) => (
                                <div
                                    className={this.getClass(
                                        'fivekaPrizesBlock__sliderButton',
                                        this.setClass(k),
                                    )}
                                    key={k}
                                >
                                    <Icon
                                        name={k === 'prev' ? 'arrow-prev-long' : 'arrow-next-long'}
                                    />
                                </div>
                            ))}
                            <div className="fivekaPrizesBlock__sliderInner">
                                <div className="fivekaPrizesBlock__sliderItems">
                                    {prizes.map((prize, i) => (
                                        <div className="fivekaPrizesBlock__sliderItem" key={i}>
                                            <div className="fivekaPrizesBlock__prize">
                                                <div className="fivekaPrizesBlock__prizeHead">
                                                    <img
                                                        src={prize.thumb}
                                                        alt=""
                                                        className="fivekaPrizesBlock__prizeThumb"
                                                    />
                                                </div>
                                                <p className="fivekaPrizesBlock__prizeTitle">
                                                    {prize.title}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default PrizesBlock;
