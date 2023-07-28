export default Accordion;
declare class Accordion {
    constructor(element: any);
    accordionHeadingClass: string;
    accordion: any;
    headings: any;
    expandAllBtn: any;
    collapseAllBtn: any;
    buttons: any[];
    content: any[];
    toggleEvent: (e: any) => void;
    expandAllEvent: (e: any) => void;
    collapseAllEvent: (e: any) => void;
    init(): void;
    setUpDom(): void;
    controls(): void;
    getTargetContent(element: any): any;
    setAccordionState(element: any, state: any): void;
    toggle(e: any): void;
    expandAll(): void;
    collapseAll(): void;
}
