import { getTingPuns } from "@/utils/AppContext";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const tingPuns = await getTingPuns.execute();

    res.json({ data: { "ting-puns": tingPuns } });
  } else {
    res.status(405);
  }
}
