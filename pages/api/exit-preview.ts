import { NextApiRequest, NextApiResponse } from "next";
import type { PageConfig } from "next/types";

// res.setPreviewData only exists in the nodejs runtime, setting the config here allows changing the global runtime
// option in next.config.mjs without breaking preview mode
export const config: PageConfig = { runtime: "nodejs" };

export default function exit(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData({});
  res.writeHead(307, { Location: "/" });
  res.end();
}
