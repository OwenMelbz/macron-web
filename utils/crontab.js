import crontab from "crontab";
import {makeJob} from "./helpers";
import {v4} from "uuid";

let api;
let jobs = [];

const boot = async () => {
    if (api) {
        return api;
    }

    return new Promise((resolve, reject) => {
        crontab.load((err, _api) => {
            if (err) {
                return reject(err)
            }

            api = _api;

            return resolve(api);
        });
    })
}

export const getJobs = async () => {
    await boot();

    jobs = api.jobs().map(j => makeJob(j, v4()));

    return jobs;
}

export const placeholder = async () => {
    await boot();
    const a = api.create('echo "hello world"', '* * * * *', 'hello world');
    const b = makeJob(a, null);
    return b;
}
