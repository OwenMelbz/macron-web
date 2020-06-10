import { message } from 'antd';
import {useState} from "react";

export const waitFor = seconds =>
    new Promise(resolve => setTimeout(resolve, seconds * 1000));

export const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};

export const emojiUrl = emoji => {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.height = 64;
    canvas.width = 64;

    // Get the canvas context
    const context = canvas.getContext('2d');
    context.font = '64px serif';
    context.fillText(emoji, 0, 64);

    // Get the custom URL
    return canvas.toDataURL();
};

export const makeJob = (j, key) => ({
    job: {
        comment: j.comment(),
        minute: j.minute().toString(),
        hour: j.hour().toString(),
        dom: j.dom().toString(),
        month: j.month().toString(),
        dow: j.dow().toString(),
        command: j.command().toString(),
    },
    key,
    name: j.comment() || j.render(),
    selected: false,
});
