import React from 'react';

import I from '../types.ts';

import { mapSections } from '../static/locations.ts';

const renderSections: I['renderSections'] = function () {
    return (
        <>
            {(Object.keys(mapSections) as (keyof typeof mapSections)[]).map((k) => {
                const section = mapSections[k];

                return (
                    <div
                        className={this.getClass('indexMap__mapSection', this.setClass(k))}
                        key={k}
                        data-name={k}
                        data-ancor={k}
                    >
                        {k !== 'start' && (
                            <>
                                <img
                                    src={require(`@media/${section.thumb}`)}
                                    alt=""
                                    className="indexMap__mapSectionThumb"
                                />
                                {k === 'game' && (
                                    <>
                                        <img
                                            src={require('@media/banner-map-1-light-1.png')}
                                            alt=""
                                            className="indexMap__mapSectionLight _1"
                                        />
                                        <img
                                            src={require('@media/banner-map-1-light-2.png')}
                                            alt=""
                                            className="indexMap__mapSectionLight _2"
                                        />
                                    </>
                                )}
                                {k === 'partners' && (
                                    <>
                                        <img
                                            src={require('@media/banner-map-2-light-1.png')}
                                            alt=""
                                            className="indexMap__mapSectionLight _1"
                                        />
                                        <img
                                            src={require('@media/banner-map-2-light-2.png')}
                                            alt=""
                                            className="indexMap__mapSectionLight _2"
                                        />
                                    </>
                                )}
                                <div
                                    className="indexMap__mapSectionTitle _CLICK"
                                    dangerouslySetInnerHTML={{ __html: section.mapTitle }}
                                />
                            </>
                        )}
                    </div>
                );
            })}
        </>
    );
};

export default renderSections;
