"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLink = exports.Toggletip = exports.Tooltip = exports.Select = exports.FileUpload = exports.Filters = exports.Dialog = exports.GlobalAlert = exports.Tabs = exports.Accordion = exports.Navigation = exports.SiteSearch = exports.initSite = void 0;
const header_1 = __importDefault(require("./components/header/header"));
exports.SiteSearch = header_1.default;
const main_nav_1 = __importDefault(require("./components/main-nav/main-nav"));
exports.Navigation = main_nav_1.default;
const accordion_1 = __importDefault(require("./components/accordion/accordion"));
exports.Accordion = accordion_1.default;
const dialog_1 = __importDefault(require("./components/dialog/dialog"));
exports.Dialog = dialog_1.default;
const filters_1 = __importDefault(require("./components/filters/filters"));
exports.Filters = filters_1.default;
const file_upload_1 = __importDefault(require("./components/file-upload/file-upload"));
exports.FileUpload = file_upload_1.default;
const tabs_1 = __importDefault(require("./components/tabs/tabs"));
exports.Tabs = tabs_1.default;
const global_alert_1 = __importDefault(require("./components/global-alert/global-alert"));
exports.GlobalAlert = global_alert_1.default;
const select_1 = __importDefault(require("./components/select/select"));
exports.Select = select_1.default;
const tooltip_1 = __importDefault(require("./components/tooltip/tooltip"));
exports.Tooltip = tooltip_1.default;
const toggletip_1 = __importDefault(require("./components/tooltip/toggletip"));
exports.Toggletip = toggletip_1.default;
const link_1 = __importDefault(require("./components/link/link"));
exports.ExternalLink = link_1.default;
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
if (!Element.prototype.closest) {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function closest(s) {
        const el = this;
        let ancestor = this;
        if (!document.documentElement.contains(el))
            return null;
        do {
            if (ancestor.matches(s))
                return ancestor;
            ancestor = ancestor.parentElement;
        } while (ancestor !== null);
        return null;
    };
}
function initSite() {
    // Header Search
    const openSearchButton = document.querySelectorAll('.js-open-search');
    const closeSearchButton = document.querySelectorAll('.js-close-search');
    const accordions = document.querySelectorAll('.js-accordion');
    const dialogs = document.querySelectorAll('.js-dialog');
    const fileUpload = document.querySelectorAll('.js-file-upload');
    const filters = document.querySelectorAll('.js-filters');
    const tabs = document.querySelectorAll('.js-tabs');
    const globalAlert = document.querySelectorAll('.js-global-alert');
    const multiSelect = document.querySelectorAll('.js-multi-select');
    const tooltip = document.querySelectorAll('.js-tooltip');
    const toggletip = document.querySelectorAll('.js-toggletip');
    const link = document.querySelectorAll('.js-link');
    openSearchButton.forEach((element) => {
        new header_1.default(element).init();
    });
    closeSearchButton.forEach((element) => {
        new header_1.default(element).init();
    });
    // Navigation
    new main_nav_1.default().init();
    accordions.forEach((element) => {
        new accordion_1.default(element).init();
    });
    dialogs.forEach((element) => {
        new dialog_1.default(element).init();
    });
    if (fileUpload) {
        fileUpload.forEach((element) => {
            new file_upload_1.default(element).init();
        });
    }
    if (filters) {
        filters.forEach((element) => {
            new filters_1.default(element).init();
        });
    }
    if (tabs) {
        tabs.forEach((element) => {
            new tabs_1.default(element).init();
        });
    }
    if (globalAlert) {
        globalAlert.forEach((element) => {
            new global_alert_1.default(element).init();
        });
    }
    if (multiSelect) {
        multiSelect.forEach((element) => {
            new select_1.default(element).init();
        });
    }
    if (tooltip) {
        tooltip.forEach((element) => {
            new tooltip_1.default(element).init();
        });
    }
    if (toggletip) {
        toggletip.forEach((element) => {
            new toggletip_1.default(element).init();
        });
    }
    if (link) {
        link.forEach((element) => {
            new link_1.default(element).init();
        });
    }
}
exports.initSite = initSite;
