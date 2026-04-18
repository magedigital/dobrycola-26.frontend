import React from 'react';

import Default from '@components/default/Default.tsx';

import init from './methods/init.ts';
import location1Animate from './methods/location1Animate.ts';
import location3Animate from './methods/location3Animate.ts';
import location4Animate from './methods/location4Animate.ts';
import locationHoverHandler from './methods/locationHoverHandler.ts';
import scrollHandler from './methods/scrollHandler.ts';
import scrollToSection from './methods/scrollToSection.ts';
import setClips from './methods/setClips.ts';

import MapI from './types.ts';

import renderBacks from './renders/renderBacks.tsx';
import renderDecors from './renders/renderDecors.tsx';
import renderLocation1Decor from './renders/renderLocation1Decor.tsx';
import renderLocation2Decor from './renders/renderLocation2Decor.tsx';
import renderLocation3Decor from './renders/renderLocation3Decor.tsx';
import renderLocation4Decor from './renders/renderLocation4Decor.tsx';
import renderLocation5Decor from './renders/renderLocation5Decor.tsx';
import renderLocationBack from './renders/renderLocationBack.tsx';
import renderLocations from './renders/renderLocations.tsx';
import renderMap from './renders/renderMap.tsx';
import renderNav from './renders/renderNav.tsx';
import renderSections from './renders/renderSections.tsx';
import renderTop from './renders/renderTop.tsx';

class Map extends Default<MapI['props'], MapI['state']> implements MapI {
    parent: MapI['parent'];

    constructor(props: MapI['props']) {
        super(props);
        this.state = {
            currentSection: 'start',
        };

        this.scrollHandler = this.scrollHandler.bind(this);
        this.setClips = this.setClips.bind(this);

        this.parent = React.createRef();
    }

    currentSection = 'start' as const;

    init = init;

    scrollHandler = scrollHandler;
    scrollToSection = scrollToSection;

    locationHoverHandler = locationHoverHandler;
    location1Animate = location1Animate;
    location3Animate = location3Animate;
    location4Animate = location4Animate;

    setClips = setClips;

    renderDecors = renderDecors;
    renderTop = renderTop;
    renderMap = renderMap;
    renderNav = renderNav;
    renderLocations = renderLocations;
    renderLocationBack = renderLocationBack;
    renderLocation1Decor = renderLocation1Decor;
    renderLocation2Decor = renderLocation2Decor;
    renderLocation3Decor = renderLocation3Decor;
    renderLocation4Decor = renderLocation4Decor;
    renderLocation5Decor = renderLocation5Decor;
    renderBacks = renderBacks;
    renderSections = renderSections;

    render() {
        return (
            <div ref={this.parent} className="indexMap _SECTION">
                {this.renderDecors()}
                <div className="indexMap__inner">
                    {this.renderTop()}
                    {this.renderMap()}
                </div>
            </div>
        );
    }
}

export default Map;
