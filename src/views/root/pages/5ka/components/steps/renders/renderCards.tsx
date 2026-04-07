import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import StringService from '@services/string/String.service.ts';

import I from '../types.ts';

import { fivekaSteps } from '../static/steps.ts';

const renderCards: I['renderCards'] = function () {
    return (
        <>
            <div className="fivekaSteps__cards">
                {(Object.keys(fivekaSteps) as (keyof typeof fivekaSteps)[]).map((s, i, ss) => {
                    const step = fivekaSteps[s];

                    return (
                        <div className="fivekaSteps__cardsItem" key={s}>
                            {i !== ss.length - 1 && (
                                <Icon name="5ka-card-arrow" className="fivekaSteps__cardsArrow" />
                            )}
                            <div className="fivekaSteps__card">
                                <div className="fivekaSteps__cardHead">
                                    <img
                                        src={require(`@media/5ka/${step.thumb}`)}
                                        alt=""
                                        className="fivekaSteps__cardThumb"
                                    />
                                </div>
                                <h3 className="fivekaSteps__cardTitle">{step.title}</h3>
                                <p
                                    className="fivekaSteps__cardText"
                                    dangerouslySetInnerHTML={{
                                        __html: new StringService().setSpaces(step.text),
                                    }}
                                ></p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <a href="#" className="fivekaSteps__rules">
                Полные правила участия
                <br />в акции сети «Пятёрочка»
            </a>
        </>
    );
};

export default renderCards;
