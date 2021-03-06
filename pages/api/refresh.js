// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getJobs, getQueue} from "../../utils/crontab";
import {serialiseJob} from "../../utils/helpers";

export default async (req, res) => {
  try {
    const jobs = await getJobs(true);
    res.statusCode = 200;
    res.json(jobs);
  } catch (error) {
    res.statusCode = 500;
    res.json({
      error: error.message,
    })
  }
}
