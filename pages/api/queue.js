// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getQueue} from "../../utils/crontab";
import {serialiseJob} from "../../utils/helpers";

export default async (req, res) => {
  try {
    const jobs = await getQueue();
    res.statusCode = 200;
    res.json(jobs.map(j => serialiseJob(j)));
  } catch (error) {
    res.statusCode = 500;
    res.json({
      error: error.message,
    })
  }
}
