// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {makeOrFindJob} from "../../utils/crontab";
import {serialiseJob} from "../../utils/helpers";

export default async (req, res) => {
    const payload = JSON.parse(req.body);
    const { job, jobs, error } = await makeOrFindJob(payload)

    if (error) {
        return res.json({ error });
    }

    res.json({
        job: serialiseJob(job),
        jobs: jobs.map(j => serialiseJob(j))
    })
}
