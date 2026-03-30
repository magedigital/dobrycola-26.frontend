import React from 'react';

import { appStore } from '@store/store.tsx';

import I from '../types.ts';

import { AppRouter } from '../../../../../../../index.tsx';
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
                        onClick={() => {
                            if (location.pageName) {
                                AppRouter.changePage({
                                    pageName: location.pageName,
                                    ids: location.pageIds,
                                });
                            } else if (location.popupName) {
                                appStore.getState().setPopup({ name: location.popupName });
                            }
                        }}
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
