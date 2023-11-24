import { getTingPuns } from "@/utils/AppContext";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data, metadata } = await getTingPuns.execute({
      random: req.query["random"] !== undefined,
    });

    res.json({ data: { "ting-puns": data.tingPuns }, metadata });
  } else {
    res.status(405);
  }
}
