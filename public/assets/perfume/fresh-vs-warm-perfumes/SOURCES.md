# Image sources — Fresh vs Warm Perfumes

- Article path: `/perfume/fresh-vs-warm-perfumes`
- Collected: **2026-10-30 10:11 Asia/Shanghai (UTC+8)**
- Method: `curl` brand product HTML (Dolce&Gabbana Demandware zoom, Armani Cloudinary assets, Tom Ford Shopify CDN) + Kayali Shopify `.js` JSON; `curl -I -L` verify HTTP 200 + `Content-Type: image/*`; files saved locally.
- Constraint: **real brand CDN / official bottle stills only** — no AI-generated art; no `GenerateImage`.
- Affiliate: **not verified**; use `productUrl` only; `affiliateUrl` null / empty.
- Note: draft is scent-family comparison (fresh vs warm); cross-brand OK — each file labels brand + productUrl.

---

## Master table

| file (local) | product | productUrl | source | 版权/授权备注 | 建议插位 |
|---|---|---|---|---|---|
| `hero/hero-fresh-armani-acqua-di-gio.jpg` | Giorgio Armani Acqua di Giò EDT | https://www.armani.com/en-us/giorgio-armani/fragrances/acqua-di-gio/ | brand | Official Armani Cloudinary bottle front | **hero** (fresh mood) |
| `hero/hero-fresh-dg-light-blue.jpg` | Dolce&Gabbana Light Blue EDT | https://www.dolcegabbana.com/en-us/beauty/perfumes-for-her/light-blue/new-lb-edt-50ml---158057971188185.html | brand | Official DG Demandware zoom | **hero** (fresh alt) |
| `hero/hero-warm-tomford-black-orchid.png` | TOM FORD Black Orchid EDP | https://www.tomfordbeauty.com/product/black-orchid-eau-de-parfum | brand | Official Tom Ford Beauty Shopify CDN packshot | **hero** (warm primary) |
| `hero/hero-warm-kayali-vanilla-28.png` | KAYALI Vanilla \| 28 | https://www.kayali.com/products/vanilla-28 | brand | Official Kayali Shopify CDN bottle PNG | **hero** (warm alt) / warm section |
| `products/fresh-dg-light-blue-edt-bottle.jpg` | D&G Light Blue EDT | same DG URL | brand | Demandware zoom `_0` sw=1600 | Fresh family / bottle still |
| `products/fresh-dg-light-blue-edt-alt.jpg` | D&G Light Blue EDT | same | brand | Demandware zoom `_1` | Fresh alt angle |
| `products/fresh-armani-acqua-di-gio-edt.jpg` | Acqua di Giò EDT | https://www.armani.com/en-us/giorgio-armani/fragrances/acqua-di-gio/ | brand | Armani CDN `207850_EAUDETOI_32_F` | Fresh family |
| `products/fresh-armani-acqua-di-gio-edt-alt.jpg` | Acqua di Giò EDT | same | brand | Armani CDN `…_D` angle | Fresh alt |
| `products/warm-kayali-vanilla-28-bottle.png` | KAYALI Vanilla \| 28 | https://www.kayali.com/products/vanilla-28 | brand | Featured Shopify PNG | Warm family |
| `products/warm-kayali-vanilla-28-100ml.png` | KAYALI Vanilla \| 28 (100ml packshot) | same | brand | Official 100ml bottle PNG | Warm / size callout |
| `products/warm-tomford-black-orchid-edp.png` | TOM FORD Black Orchid EDP | https://www.tomfordbeauty.com/product/black-orchid-eau-de-parfum | brand | Official `tfb_sku_T00501` packshot | Warm family |

CDN source URLs (verified 200 image/* on 2026-10-30 Asia/Shanghai):

- D&G Light Blue `_0`: `https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw8a77087f/images/zoom/VT01JMVT000_9V000_0.jpg?sw=1600&sh=2040`
- D&G Light Blue `_1`: `https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw8d076661/images/zoom/VT01JMVT000_9V000_1.jpg?sw=1600&sh=2040`
- Acqua di Giò F: `https://assets-cf.armani.com/image/upload/v1749579426/207850_EAUDETOI_32_F_FW2025.jpg`
- Acqua di Giò D: `https://assets-cf.armani.com/image/upload/v1749581790/207850_EAUDETOI_32_D_FW2025.jpg`
- Kayali Vanilla 28 featured: `https://cdn.shopify.com/s/files/1/0688/5834/7657/files/Vanilla_28_100_f1e9b3e5-6558-4559-8f44-89f1dee984ea.png?v=1789041787`
- Kayali 100ml: `https://cdn.shopify.com/s/files/1/0688/5834/7657/files/KAY_100ml_Vanilla_Bottle_cdc5698a-6f6f-4f86-831d-2cf342fb754d.png?v=1789041790`
- Tom Ford Black Orchid: `https://www.tomfordbeauty.com/cdn/shop/files/tfb_sku_T00501_2000x2000_0.png?v=1793049931`

---

## Hero candidates

1. **Warm primary:** `hero/hero-warm-tomford-black-orchid.png` — dark warm bottle reads clearly as “warm” family.
2. **Fresh primary:** `hero/hero-fresh-armani-acqua-di-gio.jpg` — high-res official EDT; pair with warm for split hero.
3. **Alts:** DG Light Blue; Kayali Vanilla 28.

---

## Failures / gaps

| Item | Status |
|---|---|
| Jo Malone Wood Sage & Sea Salt (jomalone.com / .co.uk / .ca / .hk) | **403** via curl — skipped |
| Chanel Chance Eau Fraîche / YSL Black Opium (US + Sephora US/UK) | **403** — skipped; warm covered by TF + Kayali |
| Sephora US product pages | **403** — not used |
| AI images | **None used** |
