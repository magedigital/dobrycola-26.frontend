import React from 'react';

import Media from '@components/media/Media.tsx';

import I from '../types.ts';

const renderBacks: I['renderBacks'] = function () {
    return (
        <div className="indexMap__mapBacks">
            <Media check={(d) => d === 'desktop'}>
                {['map-leto-01.jpg', 'map-leto-02.jpg', 'map-leto-03.jpg'].map((t, i) => (
                    <div className="indexMap__mapBack" key={i}>
                        <img
                            src={require(`@media/${t}`)}
                            alt=""
                            className="indexMap__mapBackThumb"
                        />
                    </div>
                ))}
            </Media>
            <Media check={(d) => d === 'mobile'}>
                {['map-leto-01-mob.jpg', 'map-leto-02-mob.jpg', 'map-leto-03-mob.jpg'].map(
                    (t, i) => (
                        <div className="indexMap__mapBack" key={i}>
                            <img
                                src={require(`@media/${t}`)}
                                alt=""
                                className="indexMap__mapBackThumb"
                            />
                        </div>
                    ),
                )}
            </Media>
        </div>
    );
};

export default renderBacks;
