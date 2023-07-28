export default Dialog;
declare class Dialog {
    constructor(element: any);
    dialog: any;
    dialogWrapper: any;
    openBtn: NodeListOf<Element>;
    closeBtn: any;
    focusableEls: any;
    body: HTMLElement;
    openEvent: (e: any) => void;
    closeEvent: (e: any) => void;
    clickEvent: (e: any) => void;
    trapEvent: (e: any) => void;
    init(): void;
    controls(): void;
    openDialog(): void;
    closeDialog(): void;
    clickDialog(e: any): void;
    trapFocus(e: any): void;
}
