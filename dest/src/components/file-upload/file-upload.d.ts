export default FileUpload;
declare class FileUpload {
    static truncateString(str: any, num: any): any;
    constructor(element: any);
    element: any;
    input: any;
    label: any;
    multipleUpload: any;
    replaceFiles: any;
    filesList: boolean;
    init(): void;
    createFileList(): void;
    createFileItem(file: any): string;
    updateFileList(): void;
    removeFile(): void;
}
