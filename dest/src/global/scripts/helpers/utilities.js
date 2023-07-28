"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.popupWindow = exports.whichTransitionEvent = exports.trapTabKey = exports.getFocusableElementBySelector = exports.getFocusableElement = exports.focusObjectGenerator = exports.uniqueId = void 0;
// eslint-disable-next-line import/no-extraneous-dependencies
const uuid_1 = require("uuid");
const uniqueId = (prefix) => {
    const prefixValue = (prefix === undefined ? 'nsw' : prefix);
    const uuid = (0, uuid_1.v4)();
    return `${prefixValue}-${uuid}`;
};
exports.uniqueId = uniqueId;
const focusObjectGenerator = (arr) => {
    const focusableElements = {
        all: arr,
        first: arr[0],
        last: arr[arr.length - 1],
        length: arr.length,
    };
    return focusableElements;
};
exports.focusObjectGenerator = focusObjectGenerator;
const getFocusableElement = (el) => {
    const elementArr = [].slice.call(el.querySelectorAll(`a[href],button:not([disabled]),
  area[href],input:not([disabled]):not([type=hidden]),
  select:not([disabled]),textarea:not([disabled]),
  iframe,object,embed,*:not(.is-draggabe)[tabindex],
  *[contenteditable]`));
    return (0, exports.focusObjectGenerator)(elementArr);
};
exports.getFocusableElement = getFocusableElement;
const getFocusableElementBySelector = (id, selectorArr) => {
    const elements = [];
    for (let i = 0; i < selectorArr.length; i += 1) {
        elements.push([].slice.call(document.querySelectorAll(`#${id} ${selectorArr[i]}`)));
    }
    const mergedElementArr = [].concat(...elements);
    return (0, exports.focusObjectGenerator)(mergedElementArr);
};
exports.getFocusableElementBySelector = getFocusableElementBySelector;
const trapTabKey = (event, focusObject) => {
    const { activeElement } = document;
    const focusableElement = focusObject;
    if (event.keyCode !== 9)
        return false;
    if (focusableElement.length === 1) {
        event.preventDefault();
    }
    else if (event.shiftKey && activeElement === focusableElement.first) {
        focusableElement.last.focus();
        event.preventDefault();
    }
    else if (!event.shiftKey && activeElement === focusableElement.last) {
        focusableElement.first.focus();
        event.preventDefault();
    }
    return true;
};
exports.trapTabKey = trapTabKey;
const whichTransitionEvent = () => {
    const el = document.createElement('fakeelement');
    const transitions = {
        transition: 'transitionend',
        OTransition: 'oTransitionEnd',
        MozTransition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
    };
    const found = Object.keys(transitions).filter((key) => el.style[key] !== undefined);
    return transitions[found[0]];
};
exports.whichTransitionEvent = whichTransitionEvent;
const popupWindow = (url, width, height) => {
    const y = window.top.outerHeight / 2 + window.top.screenY - (height / 2);
    const x = window.top.outerWidth / 2 + window.top.screenX - (width / 2);
    window.open(url, '', `toolbar=no,location=no,directories=no, status=no,
    menubar=no, scrollbars=no, resizable=no, copyhistory=no,
    width=${width}, height=${height}, top=${y}, left=${x}`);
};
exports.popupWindow = popupWindow;
