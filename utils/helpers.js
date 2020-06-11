import {v4} from "uuid";


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

export const buildJob = (job, key) => ({
    job,
    key,
    name: job.comment() || job.render(),
});

export const serialiseJob = job => ({
    key: job.key,
    name: job.name,
    job: {
        comment: job.job.comment(),
        command: job.job.command(),
        minute: job.job.minute().toString(),
        hour: job.job.hour().toString(),
        dom: job.job.dom().toString(),
        month: job.job.month().toString(),
        dow: job.job.dow().toString(),
    }
})

export const placeholder = () => {
    return {
        "key": v4(),
        "name": "hello world",
        "job": {
            "comment": "hello world",
            "command": "echo 'hello world'",
            "minute": "*",
            "hour": "*",
            "dom": "*",
            "month": "*",
            "dow": "*"
        }
    }
}
