import React from 'react';

import Media from '@components/media/Media.tsx';
import { appStore } from '@store/store.tsx';
import sendGoal from '@utils/sendGoal.ts';

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

                            if (location.goal) {
                                sendGoal(location.goal);
                            }
                        }}
                    >
                        <img
                            src={require(`@media/${location.thumb}`)}
                            alt=""
                            className="indexMap__mapLocationThumb"
                        />
                        <div className="indexMap__mapLocationTitle">
                            <div
                                className="indexMap__mapLocationTitleInner _CLICK"
                                dangerouslySetInnerHTML={{ __html: location.title }}
                            />
                            <Media check={(d) => d === 'desktop'}>
                                {location.alert && (
                                    <div
                                        className="indexMap__mapLocationTitleAlert"
                                        dangerouslySetInnerHTML={{ __html: location.alert }}
                                    ></div>
                                )}
                            </Media>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default renderLocations;
