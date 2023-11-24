import { getTingPuns } from "@/utils/AppContext";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const response = await getTingPuns.execute();

    res.json({ data: { "ting-puns": response.data.tingPuns } });
  } else {
    res.status(405);
  }
}
