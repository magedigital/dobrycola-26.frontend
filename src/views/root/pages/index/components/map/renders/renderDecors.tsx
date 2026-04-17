import React from 'react';

import Media from '@components/media/Media.tsx';

import I from '../types.ts';

const renderDecors: I['renderDecors'] = function () {
    return (
        <Media check={(d) => d === 'desktop'}>
            <img
                src={require(`@media/back-pattern-1.svg`).default}
                alt=""
                className={this.getClass('indexMap__decor _1')}
            />
            <div className="indexMap__decor _2"></div>
            <div className="indexMap__circle">
                <div className="indexMap__circleItem _1"></div>
                <div className="indexMap__circleItem _2"></div>
                <div className="indexMap__circleItem _3"></div>
                <div className="indexMap__circleItem _4"></div>
            </div>
        </Media>
    );
};

export default renderDecors;
