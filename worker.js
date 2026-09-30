const ALLOW = [
  "https://cymswj.github.io",
  "https://wanguo.shop",
  "https://www.wanguo.shop"
];

function cors(origin) {
  const ok = ALLOW.some(function (a) { return origin === a || (origin && origin.indexOf(a) === 0); });
  return {
    "Access-Control-Allow-Origin": ok ? origin : ALLOW[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
}

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const headers = cors(origin);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: headers });
    if (req.method !== "POST") return new Response("only POST", { status: 405, headers: headers });
    if (!env.DEEPSEEK_API_KEY) {
      return new Response(JSON.stringify({ error: { message: "worker missing key" } }), { status: 500, headers: Object.assign({ "Content-Type": "application/json" }, headers) });
    }
    let body;
    try { body = await req.json(); } catch (e) {
      return new Response(JSON.stringify({ error: { message: "bad json" } }), { status: 400, headers: Object.assign({ "Content-Type": "application/json" }, headers) });
    }
    const messages = Array.isArray(body.messages) ? body.messages.slice(-24) : [];
    if (!messages.length) {
      return new Response(JSON.stringify({ error: { message: "no messages" } }), { status: 400, headers: Object.assign({ "Content-Type": "application/json" }, headers) });
    }
    const payload = JSON.stringify({
      model: "deepseek-flash",
      messages: messages,
      stream: false,
      thinking: { type: "disabled" },
      max_tokens: 400
    });
    if (payload.length > 40000) {
      return new Response(JSON.stringify({ error: { message: "too long" } }), { status: 413, headers: Object.assign({ "Content-Type": "application/json" }, headers) });
    }
    const up = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + env.DEEPSEEK_API_KEY
      },
      body: payload
    });
    const text = await up.text();
    return new Response(text, { status: up.status, headers: Object.assign({ "Content-Type": "application/json" }, headers) });
  }
};
