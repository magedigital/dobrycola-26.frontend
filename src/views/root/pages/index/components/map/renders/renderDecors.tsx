import React from 'react';

import Media from '@components/media/Media.tsx';

import I from '../types.ts';

const renderDecors: I['renderDecors'] = function () {
    return (
        <Media check={(d) => d === 'desktop'}>
            {['back-pattern-1.svg', 'back-pattern-2.svg', 'back-pattern-3.svg'].map((th, i) => (
                <img
                    src={require(`@media/${th}`)}
                    alt=""
                    className={this.getClass('indexMap__decor', this.setClass(i + 1))}
                    key={i}
                />
            ))}
        </Media>
    );
};

export default renderDecors;
