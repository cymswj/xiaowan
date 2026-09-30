function getKey() {
  try { return (localStorage.getItem("xiaowan_sk") || "").trim(); }
  catch (e) { return ""; }
}
const RULES = [
  "\u4f60\u662f\u5c0f\u4e07\uff0c\u6d77\u5357\u4e07\u56fd\u5927\u5065\u5eb7\u6295\u8d44\u6709\u9650\u516c\u53f8\u7684\u5ba2\u670d\u52a9\u624b\u3002",
  "\u7528\u5ba2\u4eba\u4f7f\u7528\u7684\u8bed\u8a00\u56de\u7b54\u3002\u4e2d\u6587\u5c31\u4e2d\u6587\uff0c\u4fc4\u8bed\u5c31\u4fc4\u8bed\uff0c\u77ed\u53e5\uff0c\u4e0d\u5ba2\u5957\u5806\u780c\u3002",
  "\u5f00\u573a\u5148\u95ee\uff1a\u4eba\u5728\u54ea\u6216\u8981\u53bb\u54ea\uff08\u4e09\u4e9a/\u6d77\u53e3/\u535a\u9ccc\uff09\u3001\u54ea\u5929\u5230\u3001\u8981\u4f4f\u8fd8\u662f\u53ea\u8981\u8f66\u3002",
  "\u4e09\u4e9a\u5ba2\u4eba\u5148\u8bf4\u63a5\u673a\u7ffb\u8bd1\u9001\u5230\u6e7e\u533a\uff1b\u6d77\u53e3\u5148\u8bf4\u4e07\u56fd\u9152\u5e97\uff1b\u535a\u9ccc\u5148\u8bf4\u516c\u5bd3\u548c\u98df\u5e9c\u3002\u4e0d\u8981\u4e00\u6b21\u62a5\u5b8c\u6240\u6709\u5730\u65b9\u3002",
  "\u4e07\u56fd\u8d2d\u5bf9\u5916\u539f\u53e5\uff1a\u4e07\u56fd\u8d2d\u662f\u8d2d\u7269\u5e73\u53f0\uff1ahttps://www.wggi.cc/ \u3002\u6b63\u54c1\u5546\u573a\u653e\u5fc3\u8d2d\u4e70\uff01",
  "\u8054\u7cfb\u4eba Telegram / WhatsApp @pczZJ\uff0c\u7535\u8bdd +86 138 7663 6537\u3002",
  "\u6cbb\u7597\u6027\u3001\u529f\u80fd\u6027\u9879\u76ee\u4e00\u5f8b\u8f6c\u63a8\u8350\u4eba @pczZJ \u6216\u7535\u8bdd +86 138 7663 6537\u3002\u53e6\u5916\u6211\u4eec\u8fd8\u505a\u843d\u5730\u63a5\u5f85\u3001\u4f4f\u5bbf\u3001\u7528\u9910\u3001\u7528\u8f66\u3002\u53ef\u5e2e\u8f66\u548c\u7ffb\u8bd1\u53bb\u6709\u724c\u7167\u7684\u673a\u6784\uff0c\u6cbb\u7597\u9879\u76ee\u8d39\u4ed8\u7ed9\u673a\u6784\u3002\u4e0d\u8981\u8bf4\u300c\u4e0d\u63a5\u8bca\uff0c\u4e5f\u4e0d\u5b89\u6392\u6cbb\u7597\u300d\u3002"
].join("");
const UI = {
  zh: { brand: "\u6d77\u5357\u4e07\u56fd\u5927\u5065\u5eb7", title: "\u5c0f\u4e07", sub: "\u5148\u8bf4\u5728\u54ea\u3001\u54ea\u5929\u5230\u3002\u51cc\u6668\u822a\u73ed\u4e5f\u80fd\u63a5\u3002", lang: "RU", hi: "\u6211\u662f\u5c0f\u4e07\u3002\u5148\u544a\u8bc9\u6211\uff1a\u4f60\u5728\u4e09\u4e9a\u3001\u6d77\u53e3\u8fd8\u662f\u535a\u9ccc\uff1f\u54ea\u5929\u5230\uff1f\u8981\u63a5\u673a\u3001\u4f4f\u5bbf\uff0c\u8fd8\u662f\u53ea\u8981\u8f66\uff1f", ph: "\u5728\u54ea\u3001\u54ea\u5929\u5230\u3001\u8981\u4ec0\u4e48", send: "\u53d1\u9001", order: "\u53d1\u7ed9\u63a5\u5f85", copy: "\u590d\u5236\u5e76\u6253\u5f00 Telegram", chips: ["\u4e09\u4e9a\u63a5\u673a", "\u51cc\u6668\u822a\u73ed", "\u6d77\u53e3\u9152\u5e97", "\u535a\u9ccc\u516c\u5bd3", "\u4e07\u56fd\u8d2d"], lDate: "\u65e5\u671f / \u822a\u73ed", lWho: "\u4eba\u6570", lWhere: "\u5728\u54ea", lNeed: "\u8981\u4ec0\u4e48" },
  ru: { brand: "\u0425\u0430\u0439\u043d\u0430\u043d\u044c \u0412\u0430\u043d\u044c\u0433\u043e", title: "\u0421\u044f\u043e \u0412\u0430\u043d\u044c", sub: "\u0421\u043d\u0430\u0447\u0430\u043b\u0430: \u0433\u0434\u0435 \u0432\u044b \u0438 \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u043b\u0451\u0442.", lang: "\u4e2d\u6587", hi: "\u042f \u0421\u044f\u043e \u0412\u0430\u043d\u044c. \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435: \u0421\u0430\u043d\u044c\u044f, \u0425\u0430\u0439\u043a\u043e\u0443 \u0438\u043b\u0438 \u0411\u043e\u0430\u043e?", ph: "\u0413\u0434\u0435 \u0432\u044b, \u0434\u0430\u0442\u0430, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e", send: "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c", order: "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u0451\u043c\u0443", copy: "Telegram", chips: ["\u0422\u0440\u0430\u043d\u0441\u0444\u0435\u0440 \u0421\u0430\u043d\u044c\u044f", "\u041d\u043e\u0447\u043d\u043e\u0439 \u0440\u0435\u0439\u0441", "\u041e\u0442\u0435\u043b\u044c \u0425\u0430\u0439\u043a\u043e\u0443", "\u0410\u043f\u0430\u0440\u0442\u0430\u043c\u0435\u043d\u0442\u044b \u0411\u043e\u0430\u043e", "Wanguogou"], lDate: "\u0414\u0430\u0442\u0430", lWho: "\u0421\u043a\u043e\u043b\u044c\u043a\u043e", lWhere: "\u0413\u0434\u0435", lNeed: "\u0427\u0442\u043e \u043d\u0443\u0436\u043d\u043e" }
};
let lang = /[\u0430-\u044f\u0451]/i.test(navigator.language || "") ? "ru" : "zh";
const logEl = document.getElementById("log");
const form = document.getElementById("form");
const input = document.getElementById("input");
const sendBtn = document.getElementById("send");
const chipsEl = document.getElementById("chips");
const history = [{ role: "system", content: RULES }];
function t() { return UI[lang]; }
function paint() {
  const u = t();
  document.documentElement.lang = lang === "ru" ? "ru" : "zh-CN";
  ["brand","title","sub"].forEach(function (id) { document.getElementById(id).textContent = u[id]; });
  document.getElementById("langBtn").textContent = u.lang;
  document.getElementById("openOrder").textContent = u.order;
  document.getElementById("copyOrder").textContent = u.copy;
  document.getElementById("lDate").textContent = u.lDate;
  document.getElementById("lWho").textContent = u.lWho;
  document.getElementById("lWhere").textContent = u.lWhere;
  document.getElementById("lNeed").textContent = u.lNeed;
  input.placeholder = u.ph; sendBtn.textContent = u.send; chipsEl.innerHTML = "";
  u.chips.forEach(function (c) { const b = document.createElement("button"); b.type = "button"; b.textContent = c; b.onclick = function () { input.value = c; ask(c); }; chipsEl.appendChild(b); });
}
function add(role, text, cls) {
  const div = document.createElement("div");
  div.className = "msg " + (cls || (role === "user" ? "me" : "bot"));
  const re = /(https?:\/\/[^\s]+)/g; let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) div.appendChild(document.createTextNode(text.slice(last, m.index)));
    let url = m[1], tail = ""; const cut = url.match(/^(.*?)([)\u3011\u3002,.!\uff01;\uff1b]+)$/);
    if (cut) { url = cut[1]; tail = cut[2]; }
    const a = document.createElement("a"); a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer"; a.textContent = url;
    div.appendChild(a); if (tail) div.appendChild(document.createTextNode(tail)); last = m.index + m[1].length;
  }
  if (last < text.length) div.appendChild(document.createTextNode(text.slice(last)));
  logEl.appendChild(div); logEl.scrollTop = logEl.scrollHeight;
}
function localFacts() { try { return (JSON.parse(localStorage.getItem("xiaowan_kb") || "[]") || []).map(function (x) { return x && x.text; }).filter(Boolean); } catch (e) { return []; } }
async function publishedFacts() { try { const res = await fetch("./knowledge.json?t=" + Date.now()); if (!res.ok) return []; return (await res.json()).items || []; } catch (e) { return []; } }
function applyKnowledge(items) { const extra = items.filter(Boolean); history[0].content = RULES + (extra.length ? "\n\n\u5df2\u6559\u5185\u5bb9\uff1a\n- " + extra.join("\n- ") : ""); }
document.getElementById("langBtn").onclick = function () { lang = lang === "zh" ? "ru" : "zh"; paint(); };
document.getElementById("openOrder").onclick = function () { document.getElementById("sheet").classList.toggle("open"); };
document.getElementById("copyOrder").onclick = function () {
  const text = "\u5c0f\u4e07\u8ba2\u5355\n\u65e5\u671f/\u822a\u73ed\uff1a" + (document.getElementById("fWhen").value.trim() || "\u5f85\u8865") + "\n\u4eba\u6570\uff1a" + (document.getElementById("fWho").value.trim() || "\u5f85\u8865") + "\n\u5728\uff1a" + document.getElementById("fWhere").value + "\n\u8981\uff1a" + (document.getElementById("fNeed").value.trim() || "\u5f85\u8865") + "\n\u8054\u7cfb\uff1a@pczZJ  +86 138 7663 6537";
  const go = function () { location.href = "https://t.me/pczZJ?text=" + encodeURIComponent(text); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(go, go); else go();
};
function shopAsk(q) { return /\u4e70|\u8cfc|\u8d2d|\u5546\u573a|\u5546\u54c1|\u5e97|shopping|\u043c\u0430\u0433\u0430\u0437\u0438\u043d|\u043a\u0443\u043f\u0438\u0442\u044c|\u043f\u043e\u043a\u0443\u043f/i.test(q || ""); }
function shopLine() { return lang === "ru" ? "https://www.wggi.cc/" : "\u4e07\u56fd\u8d2d\u662f\u8d2d\u7269\u5e73\u53f0\uff1ahttps://www.wggi.cc/\n\u6b63\u54c1\u5546\u573a\u653e\u5fc3\u8d2d\u4e70\uff01"; }
function failTalk(q, data, status) {
  const msg = ((data && data.error && data.error.message) || "").toLowerCase();
  if (shopAsk(q)) { const line = shopLine(); history.push({ role: "assistant", content: line }); add("assistant", line); }
  add("assistant", status === 402 || msg.indexOf("balance") >= 0 ? (lang === "ru" ? "DeepSeek: no balance." : "DeepSeek \u8d26\u6237\u4f59\u989d\u4e0d\u8db3\u3002") : (lang === "ru" ? "\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 @pczZJ." : "\u53d1 Telegram @pczZJ\u3002"), "bot err");
}
async function ask(text) {
  const q = (text || input.value || "").trim(); if (!q) return;
  input.value = ""; add("user", q); sendBtn.disabled = true; history.push({ role: "user", content: q });
  const wait = document.createElement("div"); wait.className = "msg bot hint"; wait.textContent = lang === "ru" ? "..." : "\u5c0f\u4e07\u5728\u770b\u2026"; logEl.appendChild(wait);
  if (!getKey()) {
    wait.remove();
    if (shopAsk(q)) { const line = shopLine(); history.push({ role: "assistant", content: line }); add("assistant", line); }
    else add("assistant", lang === "ru" ? "\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 @pczZJ \u0438\u043b\u0438 +86 138 7663 6537." : "\u53d1 Telegram @pczZJ \u6216\u7535\u8bdd +86 138 7663 6537\u3002");
    sendBtn.disabled = false; return;
  }
  try {
    const res = await fetch("https://api.deepseek.com/chat/completions", { method: "POST", headers: { "Content-Type": "application/json", "Authorization": "Bearer " + getKey() }, body: JSON.stringify({ model: "deepseek-flash", messages: history, stream: false, thinking: { type: "disabled" } }) });
    const data = await res.json(); wait.remove();
    if (!res.ok) { failTalk(q, data, res.status); sendBtn.disabled = false; return; }
    const reply = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "\u518d\u53d1\u4e00\u6b21\u3002";
    history.push({ role: "assistant", content: reply }); add("assistant", reply);
  } catch (e) { wait.remove(); failTalk(q, { error: { message: "network" } }, 0); }
  sendBtn.disabled = false; logEl.scrollTop = logEl.scrollHeight;
}
form.addEventListener("submit", function (e) { e.preventDefault(); ask(); });
input.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(); } });
paint(); add("assistant", t().hi); applyKnowledge(localFacts()); publishedFacts().then(function (pub) { applyKnowledge(pub.concat(localFacts())); });
