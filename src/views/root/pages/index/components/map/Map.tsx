import React from 'react';

import Default from '@components/default/Default.tsx';

import init from './methods/init.ts';
import scrollHandler from './methods/scrollHandler.ts';
import scrollToSection from './methods/scrollToSection.ts';

import MapI from './types.ts';

import renderBacks from './renders/renderBacks.tsx';
import renderDecors from './renders/renderDecors.tsx';
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

        this.parent = React.createRef();
    }

    currentSection = 'start' as const;

    init = init;

    scrollHandler = scrollHandler;
    scrollToSection = scrollToSection;

    renderDecors = renderDecors;
    renderTop = renderTop;
    renderMap = renderMap;
    renderNav = renderNav;
    renderLocations = renderLocations;
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
