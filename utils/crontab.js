import crontab from "crontab";
import {buildJob, serialiseJob} from "./helpers";
import {v4} from "uuid";

let api = null;
let jobs = [];

const boot = async (reset) => {
    // if (api && !reset) {
    //     return api;
    // }

    return new Promise((resolve, reject) => {
        crontab.load((err, _api) => {
            if (err) {
                return reject(err)
            }

            api = _api;

            jobs = api.jobs().map(j => buildJob(j, v4()));

            return resolve(api);
        });
    })
}

export const getJobs = async (reset) => {
    if (reset) {
        await boot(reset);
    }

    return jobs.map(job => {
        return serialiseJob(job);
    });
}

export const getQueue = async () => {
    // await boot();

    return api.jobs().map(j => buildJob(j, v4()));
}

export const makeJob = async (data) => {
    // await boot();

    const newJob = api.create(data.command, data.interval, data.comment);

    if (!newJob || !newJob.isValid()) {
      return {
          error: 'Invalid cron syntax',
      }
    }

    return buildJob(newJob, data.key)
}

export const deleteJob = async key => {
    return new Promise(async (resolve) => {
        const job = jobs.find(job => job.key === key);
        jobs = jobs.filter(job => job.key !== key);

        api.remove(job.job);

        api.save(() => {
            resolve({
                job,
                jobs,
            });
        });
    })
}

export const makeOrFindJob = data => {
    // console.log(api);
    return new Promise(async (resolve, reject) => {
        // await boot();

        const existing = jobs.find(job => job.key === data.key);
        // console.log(jobs)
        if (existing) {
            api.remove(existing.job);
            jobs = jobs.filter(job => job.key !== data.key);
        }

        const job = await makeJob(data);

        jobs.push(job);

        api.save(() => {
            resolve({
                job,
                jobs,
            });
        });
    })
}
