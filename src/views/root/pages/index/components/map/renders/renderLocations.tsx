import React from 'react';

import I from '../types.ts';

import { mapLocations } from '../static/locations.ts';

const renderLocations: I['renderLocations'] = function () {
    return (
        <>
            {Object.keys(mapLocations).map((k) => {
                const location = mapLocations[k];

                return (
                    <div
                        className={this.getClass('indexMap__mapLocation', this.setClass(k))}
                        key={k}
                    >
                        <img
                            src={require(`@media/${location.thumb}`)}
                            alt=""
                            className="indexMap__mapLocationThumb"
                        />
                        <div
                            className="indexMap__mapLocationTitle _CLICK"
                            dangerouslySetInnerHTML={{ __html: location.title }}
                        />
                    </div>
                );
            })}
        </>
    );
};

export default renderLocations;
