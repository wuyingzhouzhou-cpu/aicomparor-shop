# Image sources — How to Wash a Makeup Bag Without Ruining the Shape

- Article path: `/guides/how-to-wash-a-makeup-bag`
- Collected: **2026-10-30 09:31 Asia/Shanghai (UTC+8)**
- Method: `curl` product JSON + brand care/blog HTML; extract `images[].src` / `image.src` / `og:image`; `curl -I -L` verify HTTP 200 + `Content-Type: image/*`; files saved locally (not symlinks).
- Constraint: **real brand CDN / official stills / public YouTube previews only** — no AI-generated product art.
- Affiliate: **not verified**; use `productUrl` only; `affiliateUrl` null / empty.
- YouTube timed frames: **browser-captured 2026-10-30** (5 stills under `youtube-frames/step-0*.jpg`); hang-dry frame unavailable — use brand laundry heroes. Preview thumbs retained.

---

## Master table

| file (local) | product | productUrl | source | 版权/授权备注 | 建议插位 |
|---|---|---|---|---|---|
| `products/kusshi/kusshi-fabric-fold-down.jpg` | KUSSHI Signature (Fabric) | https://www.kusshi.com/products/signature-makeup-bag | brand | Official Shopify CDN product photo; editorial fair-use / prefer brand media kit for heavy reuse | fabric-vs-leather / care-table (Fabric row) |
| `products/kusshi/kusshi-leather-fold-down.jpg` | KUSSHI Signature (Leather) | https://www.kusshi.com/products/signature-makeup-bag | brand | Official Shopify CDN; filename official typo `Signture-…`; **required** for this wash guide (MB01 had fabric only) | fabric-vs-leather / care-table (Leather row) |
| `products/kusshi/kusshi-fabric-featured.png` | KUSSHI Signature (Fabric featured) | https://www.kusshi.com/products/signature-makeup-bag | brand | JSON `product.image.src` default featured | care-table / optional product callout |
| `products/kusshi/kusshi-leather-blush-fold-down.jpg` | KUSSHI Signature (Leather alt) | https://www.kusshi.com/products/signature-makeup-bag | brand | Official Shopify CDN leather alt | fabric-vs-leather (alt pair) |
| `products/layngo/layngo-cosmo-featured.png` | Lay-n-Go COSMO 20" | https://layngo-new.myshopify.com/products/lay-n-go-cosmo-20 (shell: https://www.layngo.com/products/lay-n-go-cosmo-20) | brand | Official Shopify CDN featured PNG from myshopify JSON (layngo.com shell has **no** product images) | drawstring-vs-tray / care-table |
| `products/layngo/layngo-cosmo-open-closed.png` | Lay-n-Go COSMO 20" | same | brand | Official open vs closed comparison — strong **hero** / shape risk visual | **hero** (primary candidate) / drawstring-vs-tray / What usually goes wrong |
| `products/layngo/layngo-cosmo-lifestyle-pt01.jpg` | Lay-n-Go COSMO 20" | same | brand | Official lifestyle from product gallery | wash-routine (empty / in-use contrast) |
| `products/flatlay/flatlay-pink-lily-main.jpg` | Flat Lay Co Drawstring Pink Lily | https://flatlaylondon.co.uk/products/drawstring-flat-lay-makeup-bag-pink-lily | brand | Official Shopify CDN featured | care-table / drawstring-vs-tray |
| `products/flatlay/flatlay-pink-lily-alt.jpg` | Flat Lay Co Drawstring Pink Lily | same | brand | Official alt | product callout |
| `products/flatlay/flatlay-pink-lily-open-flat.jpg` | Flat Lay Co Drawstring Pink Lily | same | brand | Official open/flat lifestyle — shape / drawstring wash geometry | **hero** (alt) / drawstring-vs-tray / wash-routine |
| `products/flatlay/flatlay-pink-lily-lifestyle.jpg` | Flat Lay Co Drawstring Pink Lily | same | brand | Official lifestyle | wash-routine / aftercare |
| `care/kusshi-laundry-blog-hero.jpg` | KUSSHI (care editorial) | https://www.kusshi.com/blogs/news/yes-were-machine-washable | brand | Blog `og`/article hero Laundry2 — wash/care context | **hero** (care alt) / A cautious wash routine |
| `care/kusshi-washable-badge.jpg` | KUSSHI | https://www.kusshi.com/blogs/news/yes-were-machine-washable | brand | Official “washable” badge asset from blog body | Start with the care line |
| `care/layngo-machine-washable-blog-hero.jpg` | Lay-n-Go COSMO | https://layngo-new.myshopify.com/blogs/news/machine-washable-makeup-bag | brand | Official blog article `og:image` | care-table / wash-routine |
| `care/flatlay-wash-symbols-drawstring.png` | Flat Lay Drawstring care chart | https://flatlaylondon.co.uk/pages/wash-care-instructions | brand | Official wash-symbols graphic (drawstring/box/brush) | Start with the care line / care-table |
| `care/kusshi-ig-fabric-wash-still.jpg` | KUSSHI Signature (Fabric wash demo) | https://www.instagram.com/tv/CErkGd8hDQ7/ (linked from KUSSHI wash blog) | brand | Official IGTV poster still (low-res 360×640); fabric machine-wash Klass | fabric-vs-leather / wash-routine |
| `care/kusshi-ig-leather-liner-wash-still.jpg` | KUSSHI Signature (Leather liner wash) | https://www.instagram.com/tv/CCbrAc3BmIa/ | brand | Official IGTV poster; zip-out liner wash / leather spot-clean only | fabric-vs-leather |
| `care/kusshi-ig-brush-organizer-wash-still.jpg` | KUSSHI Brush Organizer wash | https://www.instagram.com/tv/CAiuTBqnWqQ/ | brand | Official IGTV poster; 4-step wash Klass | wash-routine (optional accessory) |
| `youtube-frames/step-01-empty-dirty-bag.jpg` | (user Short wash demo) | https://www.youtube.com/watch?v=lUlmHu9q_MI @0:50 | youtube-frame | Browser-paused player still; stained open bag | wash-routine · Empty |
| `youtube-frames/step-02-pretreat-spray.jpg` | same | https://www.youtube.com/watch?v=lUlmHu9q_MI @0:28 | youtube-frame | Spray bottle into bag | wash-routine · Pretreat |
| `youtube-frames/step-03-into-washer.jpg` | same | https://www.youtube.com/watch?v=lUlmHu9q_MI @0:40 | youtube-frame | Bag into front-loader; burned-in “Not exact but close” | wash-routine · Cycle |
| `youtube-frames/step-04-mesh-bag-cold-delicate.jpg` | (Baggu method analog) | https://www.youtube.com/watch?v=CjwrjV_UvJM @0:08 | youtube-frame | Washer door open; caption as Baggu analog | wash-routine · Cycle |
| `youtube-frames/step-05-air-dry.jpg` | (Baggu end still) | https://www.youtube.com/watch?v=CjwrjV_UvJM @0:15 | youtube-frame | Post-wash bag held up — **not** hang-dry | wash-routine 可选 |
| `youtube-frames/yt-preview-*.jpg` | (previews) | see §B | youtube-frame | maxresdefault thumbs only; superseded by timed stills above | reference |

CDN source URLs (verified 200 image/* on 2026-10-30 Asia/Shanghai):

- KUSSHI fabric fold-down: `https://cdn.shopify.com/s/files/1/1168/0768/files/Signature-Front-FoldDown-Fabric-Black-Red-min.jpg?v=1773320194`
- KUSSHI leather fold-down: `https://cdn.shopify.com/s/files/1/1168/0768/files/Signture-Front-FoldDown-Leather-Black-Red-min.jpg?v=1773320194`
- KUSSHI featured: `https://cdn.shopify.com/s/files/1/1168/0768/files/S.png?v=1780329386`
- Lay-n-Go featured: `https://cdn.shopify.com/s/files/1/0531/5369/3877/products/lay-n-go-cosmo-20cosmo-20lay-n-golayngo-new-28937636.png?v=1670376558`
- Lay-n-Go open/closed: `https://cdn.shopify.com/s/files/1/0531/5369/3877/products/Open_Closed_B00B04V3PQ.MAIN.png?v=1670376558`
- Flat Lay main: `https://cdn.shopify.com/s/files/1/0014/4798/5188/files/2026_02_26_THEFLATLAYCO22560.jpg?v=1777292168`

---

## Hero candidates (1–2)

1. **Primary:** `products/layngo/layngo-cosmo-open-closed.png` — real brand open/closed pair; matches “without ruining the **shape**” + drawstring geometry.
2. **Alt (care mood):** `care/kusshi-laundry-blog-hero.jpg` — brand laundry/wash editorial still from KUSSHI machine-washable blog.
3. **Alt (drawstring open):** `products/flatlay/flatlay-pink-lily-open-flat.jpg` — official flat-open product lifestyle.

Replace site placeholder `/placeholders/reading.svg` with one of the above (prefer #1).

---

## Wash-routine step sequence (4–6 frames)

Editorial mapping for H2 **A cautious wash routine (empty → pretreat → cycle → hang dry)**. Prefer brand stills already on disk for publish-now; use YouTube timed captures when a later pass can run authenticated yt-dlp / headed browser.

### A) Brand stills already landed (usable now)

| Step | Local file | Notes |
|---|---|---|
| 1 Empty / open | `products/layngo/layngo-cosmo-open-closed.png` or `products/flatlay/flatlay-pink-lily-open-flat.jpg` | Empty products; show open geometry |
| 2 Care line / pretreat cue | `care/flatlay-wash-symbols-drawstring.png` + `care/kusshi-washable-badge.jpg` | Read care symbols before wash |
| 3 Fabric vs leather fork | `products/kusshi/kusshi-fabric-fold-down.jpg` + `products/kusshi/kusshi-leather-fold-down.jpg` (+ IG leather liner still) | Machine-wash fabric ≠ leather exterior |
| 4 Hang dry / aftercare mood | `care/kusshi-laundry-blog-hero.jpg` or `care/layngo-machine-washable-blog-hero.jpg` | Hang dry; do not tumble dry |

### B) YouTube timed frames (browser-captured 2026-10-30 ~09:53 Asia/Shanghai)

**Status:** Real paused-player stills saved under `youtube-frames/`. Captions off. No AI images. yt-dlp still bot-walled; capture was via headed browser. Old `yt-preview-*.jpg` thumbs kept for reference only.

| file | step | Video URL | Actual timecode | Honest frame content | 建议插位 |
|---|---|---|---|---|---|
| `youtube-frames/step-01-empty-dirty-bag.jpg` | 1 Empty | https://www.youtube.com/watch?v=lUlmHu9q_MI | **0:50** | Open bag toward camera; stained lining, empty | wash-routine · Empty |
| `youtube-frames/step-02-pretreat-spray.jpg` | 2 Pretreat | same | **0:28** | Green spray bottle aimed into stained bag (no mist visible) | wash-routine · Pretreat |
| `youtube-frames/step-03-into-washer.jpg` | 3 Into washer | same | **0:40** | Hand pressing quilted bag into open front-loader; burned-in caption “Not exact but close” | wash-routine · Cycle |
| `youtube-frames/step-04-mesh-bag-cold-delicate.jpg` | 4 Machine (method analog) | https://www.youtube.com/watch?v=CjwrjV_UvJM | **0:08** | Front-load washer door open (Baggu how-to, ~16s clip); mesh/cold label **not** readable | wash-routine · Cycle（须注明 Baggu 方法类比） |
| `youtube-frames/step-05-air-dry.jpg` | 5 Post-wash hold | same | **0:15** (clip ends 0:16) | Brown bag held by straps against door — **not** air-dry hang | wash-routine 可选；勿标成 hang dry |
| *(removed)* `step-06-hang-dry-reshape.jpg` | 6 Hang dry | https://www.youtube.com/watch?v=K65xaiby8v4 | — | Video C never shows hang-dry/bag-on-form; file **deleted** to avoid mislabel | 用品牌静帧：`care/kusshi-laundry-blog-hero.jpg` 或 `care/layngo-machine-washable-blog-hero.jpg` |

**source 字段：** 上表均为 `youtube-frame`（用户/编辑向操作视频截帧）；Baggu 条须在文中标明方法类比、非 core3 化妆包。

#### Brand official visual tutorials (Instagram TV — linked from KUSSHI wash blog)

| Topic | URL | Capture note |
|---|---|---|
| Fabric bag: delicate + cold + hang dry | https://www.instagram.com/tv/CErkGd8hDQ7/ | Poster still saved: `care/kusshi-ig-fabric-wash-still.jpg` (low-res) |
| Leather: zip-out liner wash only | https://www.instagram.com/tv/CCbrAc3BmIa/ | Poster: `care/kusshi-ig-leather-liner-wash-still.jpg` |
| Brush organizer 4 steps | https://www.instagram.com/tv/CAiuTBqnWqQ/ | Poster: `care/kusshi-ig-brush-organizer-wash-still.jpg` |

KUSSHI blog: https://www.kusshi.com/blogs/news/yes-were-machine-washable — Care: https://www.kusshi.com/pages/care

---

## Failures / gaps

| Item | Status |
|---|---|
| KUSSHI Leather main product image | **OK** |
| YouTube timed frames (browser) | **5/6 OK** — hang-dry frame unavailable in sampled Video C; use brand laundry heroes for step 6 |
| step-04/05 labels vs content | Soft mismatch: 04≈washer not mesh; 05≈post-wash hold not air-dry — caption carefully |
| KUSSHI IGTV fabric poster | **OK but low-res** |
| AI images | **None used** |

