# OLRYT website
Run: `npm install && npm start` → http://localhost:3000
- Edit everything (items, prices, images, locations, hours, links) in `public/menu-data.js`.
- Images live in `public/images/`. Items flagged `placeholderImg:true` need real photos.
- API: GET /api/menu, GET /api/locations, POST /api/orders (saved to server/orders.json), GET /api/orders (header `x-admin-token`, set ADMIN_TOKEN env).
- Payments are NOT implemented: hook your gateway at the TODO in server/index.js.
- Prices/nutrition are placeholders. The frontend also works without the server (checkout runs in demo mode).
