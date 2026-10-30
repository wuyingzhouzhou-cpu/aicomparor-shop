# Image sources — Makeup Brushes Beginners Need

- Article path: `/brushes/makeup-brushes-beginners-need`
- Collected: **2026-10-30 10:11 Asia/Shanghai (UTC+8)**
- Method: `curl` Shopify `products.json` / `.js` (Real Techniques, EcoTools, Sigma Beauty); extract `images[].src`; `curl -I -L` verify HTTP 200 + `Content-Type: image/*`; files saved locally.
- Constraint: **real brand CDN / official product stills only** — no AI-generated art; no `GenerateImage`.
- Affiliate: **not verified**; use `productUrl` only; `affiliateUrl` null / empty.
- Roles covered: foundation/base, powder, cheek, flat shader, blending; beginner set heroes from RT + EcoTools.

---

## Master table

| file (local) | role | product | productUrl | source | 版权/授权备注 | 建议插位 |
|---|---|---|---|---|---|---|
| `hero/hero-rt-everyday-essentials-set.jpg` | beginner set | Real Techniques Everyday Essentials Makeup Brush Set | https://realtechniques.com/products/everyday-essentials-kit-with-1-miracle-complexion-sponge | brand | Official Shopify CDN set OOP front | **hero** (primary) |
| `hero/hero-ecotools-start-the-day-beautifully.jpg` | beginner set | EcoTools Start The Day Beautiful Makeup Brush Kit | https://ecotools.com/products/start-the-day-beautifully-kit | brand | Official Shopify CDN kit packshot | **hero** (alt) |
| `products/foundation-rt-expert-face.jpg` | foundation/base | Real Techniques Expert Face Makeup Brush | https://realtechniques.com/products/expert-face-makeup-brush | brand | Official CDN `10141110-01` | foundation / base role |
| `products/powder-rt-ultra-plush-powder.jpg` | powder | Real Techniques Ultra Plush Powder Makeup Brush | https://realtechniques.com/products/ultra-plush-powder-makeup-brush | brand | Official CDN `1401-01` | powder role |
| `products/cheek-rt-ultra-plush-blush.jpg` | cheek | Real Techniques Ultra Plush Blush Makeup Brush | https://realtechniques.com/products/ultra-plush-blush-makeup-brush | brand | Official Shopify product JPG | cheek / blush role |
| `products/cheek-sigma-f36-tapered-cheek.jpg` | cheek | Sigma F36 Tapered Cheek™ Brush | https://www.sigmabeauty.com/products/f36-tapered-cheektm | brand | Official Sigma Shopify CDN | cheek alt (Sigma) |
| `products/flat-shader-rt-all-over-base-shadow.png` | flat shader | Real Techniques All-Over Base & Shadow Brush | https://realtechniques.com/products/all-over-base-and-shadow-brush | brand | Official OOP front PNG | flat shader / lid base |
| `products/flat-shader-rt-eye-shade-blend-trio.jpg` | flat shader (+blend kit) | Real Techniques Eye Shade & Blend Makeup Brush Trio | https://realtechniques.com/products/eye-shade-blend-makeup-brush-trio | brand | Official trio OOP (includes shader) | eyes / shader callout |
| `products/flat-shader-sigma-e55-eye-shading.jpg` | flat shader | Sigma E55 Eye Shading Brush | https://www.sigmabeauty.com/products/e55-eye-shading-brush-copy | brand | Official Sigma PDP still | flat shader alt |
| `products/blending-rt-blending-crease.png` | blending | Real Techniques Blending Crease Brush | https://realtechniques.com/products/blending-crease-brush | brand | Official OOP front PNG | blending / crease role |
| `products/blending-sigma-e25-blending.jpg` | blending | Sigma E25 Blending Brush | https://www.sigmabeauty.com/products/e25-blending-brush-copy | brand | Official Sigma PDP still | blending alt |

CDN source URLs (verified 200 image/* on 2026-10-30 Asia/Shanghai):

- RT Everyday Essentials: `https://cdn.shopify.com/s/files/1/0610/8879/2816/files/1786_RT_EverydayEssentialsSet_OOP_Front_300dpiRGB_43d4fd29-39b4-4777-b419-cb2897a8ad71.jpg?v=1683303836`
- EcoTools Start The Day: `https://cdn.shopify.com/s/files/1/0593/0670/4953/products/1606_ECT_StartTheDayBeautifullyKit_OOP_300dpiRGB_4.jpg?v=1660248268`
- RT Expert Face: `https://cdn.shopify.com/s/files/1/0610/8879/2816/files/10141110-01.jpg?v=1782410606`
- RT Ultra Plush Powder: `https://cdn.shopify.com/s/files/1/0610/8879/2816/files/1401-01.jpg?v=1782412167`
- RT Ultra Plush Blush: `https://cdn.shopify.com/s/files/1/0610/8879/2816/products/1407-RT-BLUSH-BRUSH-OUT-M-scaled.jpg?v=1644424905`
- RT All-Over Base & Shadow: `https://cdn.shopify.com/s/files/1/0610/8879/2816/files/RT_10115000_ALL-OVERBASE_SHADOWBRUSH_OOPFRONT.png?v=1764173505`
- RT Eye Shade & Blend Trio: `https://cdn.shopify.com/s/files/1/0610/8879/2816/files/1529_RT_EYE_SHADE_AND_BLEND_OOO_FRONT_300dpiRGB.jpg?v=1683237642`
- RT Blending Crease: `https://cdn.shopify.com/s/files/1/0610/8879/2816/files/RT_10112700_BLENDINGCREASEBRUSH_OOPFRONT.png?v=1764173918`
- Sigma F36: `https://cdn.shopify.com/s/files/1/0571/3225/3337/files/1080-CU-20260402_Q2_F36_238.jpg?v=1780002041`
- Sigma E55: `https://cdn.shopify.com/s/files/1/0571/3225/3337/files/1080_CU_2025_PDPs_E55_156.jpg?v=1747664992`
- Sigma E25: `https://cdn.shopify.com/s/files/1/0571/3225/3337/files/1080_CU_2025_PDPs_E25_095.jpg?v=1750262879`

---

## Hero candidates

1. **Primary:** `hero/hero-rt-everyday-essentials-set.jpg` — beginner multi-brush set matches article framing.
2. **Alt:** `hero/hero-ecotools-start-the-day-beautifully.jpg` — EcoTools 5-brush starter kit official packshot.

---

## Failures / gaps

| Item | Status |
|---|---|
| Morphe official CDN | **Not fetched this pass** — RT + EcoTools + Sigma cover all five roles |
| Single dedicated “powder-only” Sigma | Optional; RT Ultra Plush Powder covers powder role |
| AI images | **None used** |
