import React from 'react';

import Default from '@components/default/Default.tsx';

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

    render() {
        const { name, title, prizes } = this.props;

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
                                    <p className="fivekaPrizesBlock__prizeTitle">{prize.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default PrizesBlock;
