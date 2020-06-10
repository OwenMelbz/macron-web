// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {placeholder} from "../../utils/crontab";

export default async (req, res) => {
  try {
    res.statusCode = 200;
    res.json(await placeholder());
  } catch (error) {
    res.statusCode = 500;
    res.json({
      error,
    })
  }
}
