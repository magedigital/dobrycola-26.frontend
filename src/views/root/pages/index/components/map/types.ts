import DefaultI from '@components/default/types';

import { mapSections } from './static/locations';

type PropsT = {};

type StateT = {
    currentSection: keyof typeof mapSections;
};

interface MapI extends DefaultI<PropsT, StateT> {
    currentSection: keyof typeof mapSections;

    scrollHandler(this: MapI): Promise<void>;
    scrollToSection(this: MapI, n: keyof typeof mapSections, d?: number): void;

    locationHoverHandler(this: MapI, k: string, action: 'hover' | 'leave'): void;
    location1Animate(this: MapI): void;
    location3Animate(this: MapI): void;
    location4Animate(this: MapI): void;

    setClips(this: MapI): void;

    renderDecors(this: MapI): React.ReactNode;
    renderTop(this: MapI): React.ReactNode;
    renderNav(this: MapI): React.ReactNode;
    renderMap(this: MapI): React.ReactNode;
    renderLocations(this: MapI): React.ReactNode;
    renderLocationBack(this: MapI, k: string): React.ReactNode;
    renderLocation1Decor(this: MapI): React.ReactNode;
    renderLocation2Decor(this: MapI): React.ReactNode;
    renderLocation3Decor(this: MapI): React.ReactNode;
    renderLocation4Decor(this: MapI): React.ReactNode;
    renderLocation5Decor(this: MapI): React.ReactNode;
    renderBacks(this: MapI): React.ReactNode;
    renderSections(this: MapI): React.ReactNode;
}

export default MapI;
