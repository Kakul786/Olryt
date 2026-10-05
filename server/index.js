const express = require("express"), fs = require("fs"), path = require("path"), vm = require("vm");
const app = express(), PORT = process.env.PORT || 3000;
const ORDERS = path.join(__dirname, "orders.json");
const loadData = () => { const s = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(__dirname, "../public/menu-data.js"), "utf8"), s); return s.window.OLRYT; };
const readOrders = () => { try { return JSON.parse(fs.readFileSync(ORDERS, "utf8")); } catch { return []; } };
app.use(express.json({ limit: "50kb" }));
app.get("/api/menu", (_, res) => { const d = loadData(); res.json({ items: d.items, categories: d.categories, byo: d.byo }); });
app.get("/api/locations", (_, res) => res.json(loadData().locations));
// Orders: prices are recomputed server-side. No payment is taken - connect your gateway at the marked line.
app.post("/api/orders", (req, res) => {
  const d = loadData(), { customer = {}, lines = [], mode = "pickup", location } = req.body || {};
  if (!customer.name || !/^[0-9+\s-]{8,15}$/.test(customer.phone || "")) return res.status(400).json({ error: "Name and a valid phone number are required." });
  if (!Array.isArray(lines) || !lines.length) return res.status(400).json({ error: "Your cart is empty." });
  let subtotal = 0; const clean = [];
  for (const l of lines) {
    const qty = Math.min(Math.max(parseInt(l.qty) || 1, 1), 20);
    let price, name;
    if (l.id === "custom") { const b = d.byo; name = "Custom bowl: " + (l.name || ""); price = Math.max(0, Math.min(Number(l.price) || b.basePrice, 800)); }
    else { const it = d.items.find(i => i.id === l.id); if (!it) return res.status(400).json({ error: "Unknown item: " + l.id }); name = it.name; price = it.price; }
    subtotal += price * qty; clean.push({ name, qty, price });
  }
  const fee = mode === "delivery" ? d.deliveryFee : 0;
  const order = { id: "OL" + Date.now().toString(36).toUpperCase(), createdAt: new Date().toISOString(), customer: { name: String(customer.name).slice(0, 80), phone: customer.phone, address: String(customer.address || "").slice(0, 200) }, mode, location, lines: clean, subtotal, fee, total: subtotal + fee, status: "received", payment: "pay-at-counter" };
  // TODO: create payment session with your gateway (Razorpay/Stripe) here before saving.
  fs.writeFileSync(ORDERS, JSON.stringify([...readOrders(), order], null, 2));
  res.status(201).json({ id: order.id, total: order.total });
});
// Staff view: GET /api/orders with header x-admin-token = ADMIN_TOKEN env var
app.get("/api/orders", (req, res) => (process.env.ADMIN_TOKEN && req.get("x-admin-token") === process.env.ADMIN_TOKEN) ? res.json(readOrders()) : res.status(401).json({ error: "Unauthorized" }));
app.use(express.static(path.join(__dirname, "../public")));
app.listen(PORT, () => console.log("OLRYT running on http://localhost:" + PORT));
