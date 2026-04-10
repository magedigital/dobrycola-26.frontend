import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    return (
        <div className="fivekaHeader__content _COL">
            {[1, 2, 3, 4, 5, 6].map((k) => (
                <img
                    src={require(`@media/5ka/main-prize-5ka-element0${k}.png`)}
                    alt=""
                    className={this.getClass('fivekaHeader__contentDecor', this.setClass(k))}
                    key={k}
                />
            ))}
            <p className="fivekaHeader__contentSupport">Главный приз</p>
            <p className="fivekaHeader__contentSubTitle">поездка за</p>
            <div className="fivekaHeader__contentTitle"></div>
            <div className="fivekaHeader__contentInfo">
                <p className="fivekaHeader__contentInfoTitle">
                    на музыкальный фестиваль на&nbsp;двоих
                </p>
                <a
                    href="/upload/docs/rules-5ka.pdf#page=12"
                    className="fivekaHeader__contentInfoLink"
                    target="_blank"
                    rel="noreferrer"
                >
                    Подробнее о призе
                </a>
            </div>
        </div>
    );
};

export default renderContent;
