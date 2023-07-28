export default Navigation;
declare class Navigation {
    openNavButton: Element | null;
    closeNavButtons: NodeListOf<Element>;
    openSubNavButtons: NodeListOf<Element>;
    closeSubNavButtons: NodeListOf<Element>;
    mainNavElement: HTMLElement | null;
    isMegaMenuElement: boolean;
    transitionEvent: any;
    mobileToggleMainNavEvent: (e: any) => void;
    mobileToggleSubNavEvent: () => void;
    mobileShowMainTransitionEndEvent: (e: any) => void;
    mobileHideMainTransitionEndEvent: (e: any) => void;
    showSubNavTransitionEndEvent: (e: any) => void;
    mobileTrapTabKeyEvent: (e: any) => void;
    mobileSubNavTrapTabKeyEvent: (e: any) => void;
    desktopButtonClickEvent: (e: any) => void;
    desktopButtonKeydownEvent: (e: any) => void;
    checkFocusEvent: (e: any) => void;
    escapeCloseEvent: (e: any) => void;
    outsideClickEvent: (e: any) => void;
    openSubNavElements: any[];
    breakpoint: MediaQueryList;
    body: HTMLElement;
    init(): void;
    addOutsideClickListener(): void;
    removeOutsideClickListener(): void;
    handleOutsideClick(event: any): void;
    responsiveCheck(e: any): void;
    tearDownNavControls(): void;
    setUpMobileControls(): void;
    mobileMainNavTrapTabs(e: any): void;
    setUpNavControls(listItems: any): void;
    mobileShowMainNav({ propertyName }: {
        propertyName: any;
    }): void;
    mobileHideMainNav({ propertyName }: {
        propertyName: any;
    }): void;
    mobileToggleMainNav(e: any): void;
    buttonClickDesktop(e: any): void;
    buttonKeydownDesktop(e: any): void;
    escapeClose(e: any): void;
    saveElements(e: any): void;
    showSubNav({ propertyName }: {
        propertyName: any;
    }): void;
    closeSubNav(): void;
    openSubNav(): void;
    toggleSubNavDesktop(): void;
    checkIfContainsFocus(e: any): void;
    whichSubNavLatest(): any;
    trapkeyEventStuff(e: any): void;
}
