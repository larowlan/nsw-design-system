export default GlobalAlert;
declare class GlobalAlert {
    constructor(element: any);
    messageElement: any;
    closeButton: any;
    closeMessageEvent: (e: any) => void;
    init(): void;
    controls(): void;
    closeMessage(): void;
}
