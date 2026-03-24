import DefaultI from '@components/default/types';

import { mapSections } from './static/locations';

type PropsT = {};

type StateT = {
    currentSection: keyof typeof mapSections;
};

interface MapI extends DefaultI<PropsT, StateT> {
    currentSection: keyof typeof mapSections;

    scrollHandler(this: MapI): Promise<void>;
    scrollToSection(this: MapI, n: keyof typeof mapSections): void;

    renderDecors(this: MapI): React.ReactNode;
    renderTop(this: MapI): React.ReactNode;
    renderNav(this: MapI): React.ReactNode;
    renderMap(this: MapI): React.ReactNode;
    renderLocations(this: MapI): React.ReactNode;
    renderBacks(this: MapI): React.ReactNode;
    renderSections(this: MapI): React.ReactNode;
}

export default MapI;
