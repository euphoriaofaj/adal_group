function toRequestBody(req: any): BodyInit | undefined {
  if (req.method === "GET" || req.method === "HEAD") return undefined;
  if (req.body == null) return undefined;
  if (typeof req.body === "string") return req.body;
  return JSON.stringify(req.body);
}

export default async function handler(req: any, res: any) {
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const protocol = (req.headers["x-forwarded-proto"] as string | undefined) || "https";
  const url = `${protocol}://${host}${req.url}`;

  const request = new Request(url, {
    method: req.method,
    headers: req.headers as HeadersInit,
    body: toRequestBody(req),
  });

  const mod = await import("../dist/server/server.js");
  const response = await mod.default.fetch(request);

  res.status(response.status);
  response.headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") {
      const current = res.getHeader("set-cookie");
      if (!current) {
        res.setHeader("set-cookie", value);
      } else if (Array.isArray(current)) {
        res.setHeader("set-cookie", [...current, value]);
      } else {
        res.setHeader("set-cookie", [String(current), value]);
      }
    } else {
      res.setHeader(key, value);
    }
  });

  const buffer = Buffer.from(await response.arrayBuffer());
  res.send(buffer);
}
