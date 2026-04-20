import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';
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
                        data-location={k}
                        onMouseEnter={this.locationHoverHandler.bind(this, k, 'hover')}
                        onMouseLeave={this.locationHoverHandler.bind(this, k, 'leave')}
                    >
                        <Lazy>
                            {this.renderLocationBack(k)}
                            {k === '1' && this.renderLocation1Decor()}
                            {k === '2' && this.renderLocation2Decor()}
                            {k === '3' && this.renderLocation3Decor()}
                            {k === '4' && this.renderLocation4Decor()}
                            {k === '5' && this.renderLocation5Decor()}
                            {k === '6' && this.renderLocation6Decor()}
                            {k === '7' && this.renderLocation7Decor()}
                            {k === '8' && this.renderLocation8Decor()}
                            {k === '9' && this.renderLocation9Decor()}
                            {k === '10' && this.renderLocation10Decor()}
                            <img
                                src={require(`@media/${location.thumb}`)}
                                alt=""
                                className="indexMap__mapLocationThumb"
                            />
                        </Lazy>

                        <div className="indexMap__mapLocationTitle">
                            <div
                                className="indexMap__mapLocationTitleInner _CLICK"
                                dangerouslySetInnerHTML={{ __html: location.title }}
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
                            />
                            {location.alert && (
                                <div
                                    className="indexMap__mapLocationTitleAlert"
                                    dangerouslySetInnerHTML={{ __html: location.alert }}
                                />
                            )}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default renderLocations;
