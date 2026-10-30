# Image sources — Chelsea Boots vs Ankle Boots

- Article path: `/boots/chelsea-boots-vs-ankle-boots`
- Collected: **2026-10-30 10:11 Asia/Shanghai (UTC+8)**
- Method: `curl` Shopify `.js` product JSON (Thursday, Blundstone, Steve Madden) + Everlane product HTML `og:image` / CDN; `curl -I -L` verify HTTP 200 + `Content-Type: image/*`; files saved locally (not symlinks).
- Constraint: **real brand CDN / official product stills only** — no AI-generated product art; no `GenerateImage`.
- Affiliate: **not verified**; use `productUrl` only; `affiliateUrl` null / empty.
- Note: article uses type examples (Chelsea vs zip/lace ankle), not SKU-locked; selected US-common styles with clear official photos.

---

## Master table

| file (local) | product | productUrl | source | 版权/授权备注 | 建议插位 |
|---|---|---|---|---|---|
| `hero/hero-blundstone-1609-chelsea.jpg` | Blundstone Men’s Classics #1609 | https://www.blundstone.com/products/antique-brown-premium-leather-pull-on-boots-mens-style-1609 | brand | Official Shopify CDN USA hero | **hero** (primary) |
| `hero/hero-thursday-duchess-chelsea.jpg` | Thursday Duchess Chelsea (Black) | https://thursdayboots.com/products/womens-duchess-black-chelsea-boot | brand | Official Shopify CDN side still | **hero** (alt) / Chelsea section |
| `products/chelsea-blundstone-1609-hero.jpg` | Blundstone #1609 | same as hero | brand | Same CDN hero file | Chelsea examples |
| `products/chelsea-blundstone-1609-profile.jpg` | Blundstone #1609 | same | brand | Official profile angle | Chelsea / silhouette compare |
| `products/chelsea-thursday-duchess-black-side.jpg` | Thursday Duchess Black | https://thursdayboots.com/products/womens-duchess-black-chelsea-boot | brand | Official side product | Chelsea examples |
| `products/chelsea-thursday-duchess-black-34.jpg` | Thursday Duchess Black | same | brand | Official 3/4 product | Chelsea / elastic gore cue |
| `products/chelsea-thursday-duchess-black-flatlay.jpg` | Thursday Duchess Black | same | brand | Official flatlay | Chelsea detail / materials |
| `products/ankle-zip-stevemadden-jones-black-01.jpg` | Steve Madden JONES Black Leather | https://www.stevemadden.com/products/jones-black-leather | brand | Official Shopify CDN product 01 (front zip ankle) | Zip ankle examples / contrast |
| `products/ankle-zip-stevemadden-jones-black-02.jpg` | Steve Madden JONES Black Leather | same | brand | Official product 02 | Zip ankle / heel shape |
| `products/ankle-zip-stevemadden-jones-lifestyle.jpg` | Steve Madden JONES Black Leather | same | brand | Official lifestyle legs-down | Zip ankle lifestyle / optional mid-article |
| `products/ankle-zip-everlane-day-boot-black.jpg` | Everlane The Day Boot (Black) | https://www.everlane.com/products/womens-leather-day-boot-black | brand | Official Everlane Shopify CDN `og:image` (side-zip ankle) | Zip ankle second brand / contrast |

CDN source URLs (verified 200 image/* on 2026-10-30 Asia/Shanghai):

- Thursday Duchess side: `https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Women-Duchess-Black-Side.jpg?v=1591637693`
- Thursday Duchess 3/4: `https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Women-Duchess-Black-3.4.jpg?v=1591640518`
- Thursday Duchess flatlay: `https://cdn.shopify.com/s/files/1/0419/1525/products/Flatlay_Duchess_Black__10-24-19.jpg?v=1572543502`
- Blundstone #1609 hero: `https://cdn.shopify.com/s/files/1/0903/6349/4707/files/product-image_2026-08-18_1609_p_usa_hero.jpg?v=1790053616`
- Blundstone #1609 profile: `https://cdn.shopify.com/s/files/1/0903/6349/4707/files/product-image_2026-08-18_1609-USA_p_profile_1.jpg?v=1790053615`
- Steve Madden Jones 01: `https://cdn.shopify.com/s/files/1/2170/8465/files/STEVEMADDEN_SHOES_JONES_BLACK-LEATHER_01.jpg?v=1704466289`
- Steve Madden Jones 02: `https://cdn.shopify.com/s/files/1/2170/8465/files/STEVEMADDEN_SHOES_JONES_BLACK-LEATHER_02_207640b4-7f5d-4c94-97fc-71735d1bb231.jpg?v=1715358681`
- Steve Madden Jones lifestyle: `https://cdn.shopify.com/s/files/1/2170/8465/files/STEVEMADDEN_SHOES_JONES_BLACK-LEATHER_LEGS-DOWN_21945.jpg?v=1715358681`
- Everlane Day Boot: `https://www.everlane.com/cdn/shop/files/a5a265a8_de4a.jpg?v=1753411666`

---

## Hero candidates (1–2)

1. **Primary:** `hero/hero-blundstone-1609-chelsea.jpg` — classic Chelsea silhouette, high-res official USA hero.
2. **Alt / pair:** `hero/hero-thursday-duchess-chelsea.jpg` — women’s Chelsea side still for gender-balanced hero pair; or use Jones 01 beside Duchess for Chelsea-vs-zip contrast hero collage.

---

## Failures / gaps

| Item | Status |
|---|---|
| Sam Edelman Laguna / Hilty (brand site) | **Blocked 403** via curl — skipped; replaced with Thursday + SM Jones + Everlane |
| Madewell Idris side-zip | **403** — skipped |
| Lace ankle official still | **Not collected this pass** — zip ankle covered ≥2; lace optional later |
| AI images | **None used** |
