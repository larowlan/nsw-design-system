export default SiteSearch;
declare class SiteSearch {
    constructor(element: any);
    triggerButton: any;
    originalButton: Element | null;
    targetElement: HTMLElement | null;
    searchInput: Element | null;
    pressed: boolean;
    init(): void;
    controls(): void;
    showHide(): void;
}
