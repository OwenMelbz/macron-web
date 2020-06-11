// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getJobs, deleteJob} from "../../utils/crontab";

export default async (req, res) => {
    const key = req.body;

    try {
        await deleteJob(key);
        const jobs = await getJobs();
        res.json(jobs)
    } catch (e) {
        res.json([])
    }
}
