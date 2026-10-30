# Image sources — Makeup Bag Brush Holders (Slots vs Mesh)

- Article path / slug: `/guides/makeup-bag-brush-holders-slots-vs-mesh`
- Article URL: https://www.aicomparor.shop/guides/makeup-bag-brush-holders-slots-vs-mesh （即将上线）
- Collected: **2026-10-30 15:44 Asia/Shanghai (UTC+8)**
- Method: `curl` Shopify `URL.json` + product HTML `og:image` / CDN; extract `images[].src`; `curl -I -L` verify HTTP **200** + `Content-Type: image/*`; real file copies into this directory (**no** symlinks, **no** AI images).
- Affiliate: **not verified**; use `productUrl` only; `affiliateUrl` empty / null.
- Optional webp: Pillow encode q≈82 alongside jpg/png sources for key shots.

---

## Master table

| file (local) | product | productUrl | source | 版权/授权备注 | 建议插位 |
|---|---|---|---|---|---|
| `hero/hero-layngo-cosmo-open-closed.png` | Lay-n-Go COSMO 20" | https://layngo-new.myshopify.com/products/lay-n-go-cosmo-20 (shell: https://www.layngo.com/products/lay-n-go-cosmo-20) | brand | Official Shopify CDN open/closed; interior elastic loops with brushes visible on open mat | **hero** (primary drawstring/elastic) |
| `hero/hero-bk-burgundy-standup-pair.jpg` (+ `.webp`) | BK Beauty Standup Brush Holder (Burgundy) | https://www.bkbeauty.com/products/standup-brush-holder-travel-makeup-bag | brand | Official CDN pair: closed pouch + folded standup with brushes | **hero** (standup type) / removable-holder |
| `hero/hero-flatlay-pink-lily-open-empty.jpg` | Flat Lay Co Drawstring Pink Lily | https://flatlaylondon.co.uk/products/drawstring-flat-lay-makeup-bag-pink-lily | brand | Official open empty mat; perimeter elastic slots clearly visible | **hero** (alt elastic anatomy) / elastic-slots |
| `hero/hero-kusshi-signature-fold-down.jpg` | KUSSHI Signature (Fabric) | https://www.kusshi.com/products/signature-makeup-bag | brand | Official fold-down exterior; zip-tray type context | hero (zip-tray context) |
| `elastic/elastic-flatlay-pink-lily-open-empty.jpg` (+ `.webp`) | Flat Lay Co Drawstring Pink Lily | https://flatlaylondon.co.uk/products/drawstring-flat-lay-makeup-bag-pink-lily | brand | Official open empty; clear elastic loop structure around rim | **elastic-slots** |
| `elastic/elastic-flatlay-pink-lily-open-filled.jpg` | Flat Lay Co Drawstring Pink Lily | same | brand | Official open filled gallery shot (CDN `…22571.jpg`) | elastic-slots |
| `elastic/elastic-layngo-cosmo-open-brushes.jpg` (+ `.webp`) | Lay-n-Go COSMO 20" | https://layngo-new.myshopify.com/products/lay-n-go-cosmo-20 | brand | Official open mat with brushes/tools in elastic loops | **elastic-slots** |
| `elastic/elastic-layngo-cosmo-loops-lifestyle.jpg` | Lay-n-Go COSMO 20" | same | brand | Lifestyle counter shot; elastic loops + zip pocket in use | elastic-slots |
| `elastic/elastic-layngo-cosmo-features-makeup-loops.jpg` | Lay-n-Go COSMO 20" | same | brand | Official “features” collage; top callout **MAKEUP LOOPS** close-up | elastic-slots (callout) |
| `elastic/elastic-layngo-cosmo-open-closed.png` | Lay-n-Go COSMO 20" | same | brand | Same asset as hero; open side shows elastic with brushes | elastic-slots / hero |
| `mesh/mesh-kusshi-signature-dual-mesh-leopard.jpg` (+ `.webp`) | KUSSHI Signature | https://www.kusshi.com/products/signature-makeup-bag | brand | Official dual black mesh pockets close-up; leopard interior | **mesh-pockets** |
| `mesh/mesh-kusshi-signature-dual-mesh-pink.jpg` | KUSSHI Signature | same | brand | Official dual mesh pockets; pink/fuchsia interior (`ERDPN-Pockets`) | **mesh-pockets** |
| `mesh/mesh-kusshi-signature-dual-mesh-zebra.jpg` | KUSSHI Signature | same | brand | Official dual mesh; zebra lining (`MESHPOCKET_…`) | mesh-pockets |
| `mesh/mesh-kusshi-signature-open-full-black-red.jpg` | KUSSHI Signature (Fabric Black/Red) | same | brand | Official open-full zip tray; mesh section on lid side | mesh-pockets / hero zip-tray |
| `mesh/mesh-kusshi-signature-leather-mesh-pockets.jpg` | KUSSHI Signature (Leather) | same | brand | Official leather variant mesh pockets close-up | mesh-pockets (leather note) |
| `removable/removable-beis-cosmetic-case-open-brush-holder.jpg` (+ `.webp`) | BÉIS The Cosmetic Case (Beige) | https://beistravel.com/products/beis-cosmetic-case-beige | brand | Official open case; removable brush holder panel with elastic slots + clear flap | **removable-holder** |
| `removable/removable-beis-cosmetic-case-open-mirror-holder.jpg` | BÉIS The Cosmetic Case (Beige) | same | brand | Official open with removable organizer + standing mirror | removable-holder |
| `removable/removable-beis-cosmetic-case-exterior.jpg` | BÉIS The Cosmetic Case (Beige) | same | brand | Official closed exterior product shot | removable-holder (exterior) |
| `removable/removable-beis-cosmetic-case-inside-mesh-lid.jpg` | BÉIS The Cosmetic Case (Beige) | same | brand | Official open tray; lid zip mesh (not the removable holder itself) | removable-holder / optional mesh contrast |
| `removable/removable-bk-burgundy-standup-pair.jpg` (+ `.webp`) | BK Beauty Standup Brush Holder (Burgundy) | https://www.bkbeauty.com/products/standup-brush-holder-travel-makeup-bag | brand | Official closed vs folded standup with brushes | **removable-holder** / hero |
| `removable/removable-bk-burgundy-standup-open-brushes.jpg` | BK Beauty Standup (Burgundy) | same | brand | Official standup open with brushes vertical | removable-holder |
| `removable/removable-bk-burgundy-standup-closed-pair.jpg` | BK Beauty Standup (Burgundy) | same | brand | Official extended vs collapsed closed pair | removable-holder |
| `removable/removable-bk-blush-standup-folded.png` | BK Beauty Standup (Blush) | https://www.bkbeauty.com/products/standup-brush-holder-travel-makeup-bag-blush | brand | Official blush folded standup with brushes | removable-holder |
| `removable/removable-kusshi-snapin-brush-organizer.jpg` | KUSSHI Snap-in Brush Organizer | https://www.kusshi.com/products/organizer-1 (Brush variant; also https://www.kusshi.com/products/makeup-brush-organizer) | brand | Official snap-in brush organizer marketing still + dims | removable-holder (snap-in type) |
| `removable/removable-kusshi-brush-organizer-product.jpg` | KUSSHI Brush Organizer | https://www.kusshi.com/products/makeup-brush-organizer | brand | Official product still, brushes in snap-in pockets | removable-holder |

CDN source URLs (verified **200 image/\*** on 2026-10-30 Asia/Shanghai):

- Lay-n-Go open/closed: `https://cdn.shopify.com/s/files/1/0531/5369/3877/products/Open_Closed_B00B04V3PQ.MAIN.png?v=1670376558`
- Lay-n-Go PT03 / PT05 / PT02: `…/B00B04V3PQ.PT03.jpg` / `PT05.jpg` / `PT02.jpg` (`?v=1670376558`)
- Flat Lay open empty: `https://cdn.shopify.com/s/files/1/0014/4798/5188/files/2026_02_26_THEFLATLAYCO22569.jpg?v=1777292166`
- Flat Lay open filled: `https://cdn.shopify.com/s/files/1/0014/4798/5188/files/2026_02_26_THEFLATLAYCO22571.jpg?v=1777292166`
- KUSSHI mesh leopard: `https://cdn.shopify.com/s/files/1/1168/0768/files/mesh_pocket_black_with_leo_int-min.jpg?v=1773320194`
- KUSSHI mesh pink: `https://cdn.shopify.com/s/files/1/1168/0768/files/ERDPN-Pockets_1.jpg?v=1773320194`
- KUSSHI mesh zebra: `https://cdn.shopify.com/s/files/1/1168/0768/files/MESHPOCKET_f14c4646-ba96-4d5a-b02b-11ab61d88eb3.jpg?v=1773320194`
- KUSSHI open full: `https://cdn.shopify.com/s/files/1/1168/0768/products/SBKRN-SIGNATURE_FABRIC_OPEN_FULL-min.jpg?v=1773320194`
- KUSSHI leather mesh: `https://cdn.shopify.com/s/files/1/1168/0768/files/sbag-4-SIGNATURE_LEATHER_MESH_POCKETS-min_a9d4a17a-376e-4324-8170-3c2f53d08cb9.jpg?v=1773320194`
- KUSSHI fold-down: `https://cdn.shopify.com/s/files/1/1168/0768/files/Signature-Front-FoldDown-Fabric-Black-Red-min.jpg?v=1773320194`
- BÉIS open brush holder: `https://cdn.shopify.com/s/files/1/0032/3423/4479/products/beigeCCpdp-sizes.jpg?v=1717572773`
- BÉIS open + mirror: `https://cdn.shopify.com/s/files/1/0032/3423/4479/products/beige2CC6.17pdp-sizes.jpg?v=1703301005`
- BÉIS exterior: `https://cdn.shopify.com/s/files/1/0032/3423/4479/products/Beis_UpdatedCosmeticCase_Beige_Product_1288_0475ef95-198b-4025-b188-037e8b0f36dc.jpg?v=1766000164`
- BÉIS inside mesh lid: `https://cdn.shopify.com/s/files/1/0032/3423/4479/products/makeupcaseinside_5d7bec66-046c-4294-92b2-36d0ebb142a2.jpg?v=1717572773`
- BK Burgundy 04b / 02b / 01: `https://cdn.shopify.com/s/files/1/0063/3326/8068/files/product-core-bag-04b.jpg?v=1786642150` (+ `02b` / `01`)
- BK Blush 02: `https://cdn.shopify.com/s/files/1/0063/3326/8068/files/Blush-Core-Bag_02_a779c889-f2c2-4e42-9ce7-179ccc3f4e3f.png?v=1783442202`
- KUSSHI snap-in: `https://cdn.shopify.com/s/files/1/1168/0768/files/snap-in_brush_organizer.jpg?v=1780605132`
- KUSSHI brush org product: `https://cdn.shopify.com/s/files/1/1168/0768/products/BrOrg_EditBackground_GeneralTouchup-1.jpg?v=1625870432`

---

## Hero candidates (1–2)

1. **Primary (elastic / drawstring mat):** `/workspace/aicomparor-assets/guides/brush-holders/hero/hero-layngo-cosmo-open-closed.png` — open mat shows brushes in elastic loops + closed pouch contrast.
2. **Primary (standup holder):** `/workspace/aicomparor-assets/guides/brush-holders/hero/hero-bk-burgundy-standup-pair.jpg` — closed travel pouch vs folded standup with brushes.
3. **Alt (elastic anatomy):** `hero/hero-flatlay-pink-lily-open-empty.jpg` — empty open Flat Lay; elastic slots readable without clutter.

---

## Gaps / notes

- Flat Lay Pink Lily gallery has limited “brushes-in-elastic” lifestyle depth; best structural elastic shot is open-empty (`22569`); filled gallery `22571` retained.
- BÉIS “The Makeup Brush Pouch” (camel) product JSON returned empty; HTML only exposed lifestyle `og:image` (Shay luggage shoot) — **not** used (not a brush-holder close-up). Removable coverage uses **Cosmetic Case** official open shots instead.
- BÉIS Cosmetic Case official copy confirms removable brush holder lifts out; product stills show holder **in situ** / open — no separate isolated “lifted out alone” still found on beige JSON gallery.
- Avoided Flat Lay CDN asset with `freepik__…` filename (possible AI/edit pipeline).
- Reused concepts overlap prior guides (`lay-flat-vs-zip-tray…`, `how-to-wash…`) but files here are **fresh copies**, not symlinks.
- `affiliateUrl`: empty for all rows.
