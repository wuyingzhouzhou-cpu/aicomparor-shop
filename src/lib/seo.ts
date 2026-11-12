import type { Metadata } from "next";
import { departments } from "@/lib/departments";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { articlePath, type ArticleSummary, type Category } from "@/lib/types";

export type FaqItem = { question: string; answer: string };

/** Editorial FAQs mirrored from article FAQ sections (for FAQPage JSON-LD). */
const articleFaqs: Record<string, FaqItem[]> = {
  "makeup-bag-brush-holders-slots-vs-mesh": [
    {
      question: "What does a makeup bag with a brush holder usually include?",
      answer:
        "Usually elastic slots or an elastic holder, mesh and/or a zip compartment, or an optional snap-in, removable, or standup insert. The listing phrase alone does not say which.",
    },
    {
      question: "When do elastic brush slots help versus mesh pockets?",
      answer:
        "Elastic gives upright, one-place control on a mat or rim. Mesh gives flexible volume for mixed or changing tools in a tray or zip sleeve. Match the hold to how you grab brushes.",
    },
    {
      question: "Should I buy by the number of brush slots?",
      answer:
        "No. Slot count is not a cross-brand score. One type example publishes 8 elastic slots; another an elastic holder with no count; a third double mesh plus an optional snap-in. Compare system type.",
    },
    {
      question: "Do brush holders work the same in lay-flat and zip-tray bags?",
      answer:
        "No. Mats often use rim elastic; zip trays more often use an interior zip, mesh, and sometimes a snap-in. The grab path follows the open style.",
    },
  ],
  "how-to-wash-a-makeup-bag": [
    {
      question: "Can I put a machine washable makeup bag in the dryer?",
      answer:
        "Almost never if you follow the care lines in common type examples. Cosmo-style and Flat Lay Co–style copy say hang dry and do not tumble dry. Heat collapses shape and cooks elastic.",
    },
    {
      question: "How do I wash a drawstring / lay-flat bag?",
      answer:
        "Empty it, pretreat stains, tuck or cinch the cord, use cold or brand-stated 30° on gentle, then hang dry. While damp, open the mat into a full circle so it dries in shape. The wash steps stay gentle either way.",
    },
    {
      question: "Can leather makeup bags go in the washing machine?",
      answer:
        "Not the leather exterior—spot clean only when that is the brand line. Zip-out liners marked machine washable can usually go alone on gentle; hang dry the liner and keep water off the leather shell.",
    },
    {
      question: "Do brush slots need special care?",
      answer:
        "Yes: protect the elastic. Avoid hot water and the dryer. Pretreat makeup on the loops gently; do not stretch wet elastic to open slots.",
    },
    {
      question: "How often should I wash a makeup bag?",
      answer:
        "After a spill, before or after a trip, or when the lining looks or smells dingy—not on a fear-based monthly schedule. Heavy cream users may wash more often than powder-only kits.",
    },
  ],
  "clear-cosmetic-case-vs-neoprene-toiletry": [
    {
      question: "Is a clear cosmetic case better than a neoprene toiletry bag?",
      answer:
        "Better when you need to see and wipe. A neoprene pouch is the better lean when you want cushion and a shape around palettes. Neither is a trophy. The hotel desk can hold either.",
    },
    {
      question: "Can I wipe a clear case and a neoprene bag the same way?",
      answer:
        "No. Clear PVC is usually a wipe. Neoprene can stain when a liquid sits, and the care line for the Hunter-class pouch is a hand wash, not a dryer. Read the tag on the bag you actually bought.",
    },
    {
      question: "Will neoprene keep a palette from cracking?",
      answer:
        "It is the cushion story—thicker neoprene, a bag that keeps its shape, clothes packed around it. It is not a guarantee. A small soft pouch that shares the name is a weaker pad, and overstuffing works against you.",
    },
    {
      question: "Is this the same choice as a hanging bag versus a vanity case?",
      answer:
        "No. Hanging versus vanity is about a door hook versus a counter when the sink ledge disappears. This page assumes both bags can already live on the desk or in a personal item. The question left is visibility versus cushion.",
    },
    {
      question: "Do I still need a TSA liquids bag?",
      answer:
        "Yes, when the liquids rules apply. A clear cosmetic case is not automatically your quart bag. See-through helps you find a bottle. It does not rewrite the volume limits.",
    },
  ],
  "hanging-toiletry-bag-vs-vanity-case": [
    {
      question: "Is a hanging toiletry bag better than a vanity case for travel?",
      answer:
        "Better when counter space is gone and a real hang point exists—especially for tall liquids you want to see. A structured vanity case wins when you have desk space and need walls for palettes. Neither is a universal trophy.",
    },
    {
      question: "Do I need a hook in every hotel for a hanging bag?",
      answer:
        "Yes, in practice. No hook means the cascade sits on the floor or the toilet lid. Check door hooks, towel bars, and shower rods before you commit the whole kit to hang-only.",
    },
    {
      question: "Will a structured vanity case crush less in a suitcase?",
      answer:
        "Often yes—rigid or semi-rigid walls protect flat makeup better than a soft hang kit stuffed under shoes. It also keeps more packed volume. Measure the empty footprint against your cube.",
    },
    {
      question: "Can I use a hanging bag for makeup palettes?",
      answer:
        "You can, but clear hanging tiers favor bottles more than wide palettes. Many travelers hang liquids and keep face makeup in a smaller counter pouch or vanity case.",
    },
    {
      question: "Is this the same as a lay-flat makeup bag?",
      answer:
        "No. Lay-flat usually means a drawstring mat or three-sided zip tray that opens on a surface—see the lay-flat vs zip tray guide. Hanging vs vanity is about air vs desk.",
    },
  ],
  "lay-flat-vs-zip-tray-makeup-bags": [
    {
      question: "Is a flat lay makeup bag the same as a drawstring bag?",
      answer:
        "Not always. Flat lay describes opening behavior. Many listings are drawstring mats that open into a circle, but a three-sided zip tray can also open flat. Read the closure.",
    },
    {
      question: "Do zip-tray bags count as lay-flat?",
      answer:
        "In everyday shopping language, often yes if the three-sided zip unfolds for visibility. Structurally they are a different open mode from drawstring mats.",
    },
    {
      question: "Can I machine-wash a lay-flat makeup bag?",
      answer:
        "Only if that SKU’s care line says so—and only the way it says so. Fabric drawstring mats may publish machine-wash + hang-dry guidance; leather zip-tray versions may require spot-clean exteriors.",
    },
    {
      question: "Should I buy by brush-slot count?",
      answer:
        "No. Compare system type (elastic slots vs mesh/organizer). Slot counts are a poor cross-brand score when brands count differently.",
    },
    {
      question: "Do I still need a TSA liquids bag?",
      answer:
        "Yes. TSA liquids rules still belong in a quart bag; a lay-flat makeup bag does not replace that. Drawstring mats usually compress flatter; zip trays keep their shape but claim more cube space.",
    },
  ],
  "chelsea-boots-vs-ankle-boots": [
    {
      question: "Are Chelsea boots ankle boots?",
      answer:
        "Yes. Chelsea boots are ankle-height boots defined by elastic side panels and a pull-on design. Zip and lace styles are siblings, not a different height class.",
    },
    {
      question: "Can you wear Chelsea boots to the office?",
      answer:
        "Often yes—especially smooth leather Chelseas with a clean toe and a low or modest heel. Confirm workplace norms; rugged lug soles may read more casual.",
    },
    {
      question: "Are zip ankle boots more comfortable?",
      answer:
        "They can be easier to put on and adjust, especially for high insteps or thick socks. Comfort still depends on the last, toe shape, and heel height—not the zipper alone.",
    },
    {
      question: "Do Chelsea boots work with wide calves?",
      answer:
        "Often less well than an adjustable zip or lace ankle boot. Elastic width and shaft height are fixed once you pull on. If the top line bites mid-calf, choose a zip ankle boot or a lower petite shaft.",
    },
  ],
  "waterproof-ankle-vs-chelsea-boots": [
    {
      question: "Is a Chelsea boot waterproof?",
      answer:
        "Only when that pair is built and sold that way. A leather Chelsea with elastic gores can handle a light drizzle and still wet a sock in a real rain. Water resistant on a spec table, a rubber outsole, or a suede treatment is not seam-sealed waterproof construction. Read the waterproof line for the color you are buying. If it is missing, assume a fashion shaft.",
    },
    {
      question: "Is this the same as Chelsea vs ankle boots?",
      answer:
        "No. Chelsea vs ankle boots compares elastic pull-on construction with zip or lace ankle boots—wardrobe and fit, still inside ankle height. This page compares a sealed waterproof ankle with a style-first leather Chelsea. Shaft height, if you need the knee, is slim knee-high vs Chelsea.",
    },
    {
      question: "Do I need both?",
      answer:
        "Often, once the jobs split. The leather Chelsea keeps the dry days and the jean break. The waterproof ankle keeps the commute that soaks a sock. If you only walk in light weather, one good leather Chelsea can be the pair you actually wear. Buying both on the same afternoon, before you know which morning fails, is how closets fill with twins.",
    },
    {
      question: "What about waterproof Chelseas?",
      answer:
        "They exist, and they are the middle path: a Chelsea silhouette that is sold as waterproof. Sorel Harlow–class and Evie Pull-On–class listings say waterproof leather plus elastic gores and a molded rubber sole. A Hunter rubber Chelsea–class boot is a rain boot that happens to have gores. They are not automatic upgrades of a fashion leather Duchess, and they are not a third rank on this page.",
    },
    {
      question: "Does a grippy sole make the Chelsea the rain boot?",
      answer:
        "No. Grip keeps you upright. A seal keeps the sock drier. A studded rubber outsole on a leather Chelsea can be the right sole and still leak at the gore. A lug on a boot that never claims waterproofing is the same split. Buy the sentence that matches the failure you actually have.",
    },
  ],
  "slim-knee-high-vs-chelsea-boots": [
    {
      question: "Are slim knee-high boots the same as riding boots?",
      answer:
        "Often related, not identical. Riding boots can be wider or more utilitarian through the shaft; slim knee-high in Fall 2026 coverage usually means a closer, structured tube—sometimes with a heel or hardware. Shop the shaft width you can wear, not the trend nickname. The western-details fork against that riding shaft is western boots vs riding boots.",
    },
    {
      question: "Can I wear Chelsea boots with a midi skirt?",
      answer:
        "Yes, with intention. A midi over a Chelsea leaves shin visible—some outfits want that break; others look unfinished. If the bare strip bothers you every time, that is a knee-high job, not a failure of the Chelsea.",
    },
    {
      question: "Do slim knee-highs work with jeans?",
      answer:
        "They can—especially slim or straight legs tucked or stacked cleanly—but jeans alone rarely justify a tall shaft if you already live in Chelseas. Let dress and midi weeks carry the purchase case.",
    },
    {
      question: "What if I have wide calves?",
      answer:
        "Prioritize measurable shaft circumference and zip entry. Many slim knee-highs will fail a wide calf; that is geometry, not a personal flaw. A Chelsea (or a deliberately roomier tall boot outside this slim frame) is the practical everyday answer.",
    },
    {
      question: "Is this the same as Chelsea vs ankle boots?",
      answer:
        "No. Chelsea vs ankle boots compares pull-on elastic to zip or lace inside ankle height. This essay compares slim knee-high shaft height to Chelsea ankle height.",
    },
  ],
  "western-boots-vs-riding-boots": [
    {
      question: "Are riding boots the same as slim knee-highs?",
      answer:
        "Often related, not identical. A slim knee-high in this season’s coverage is a closer, structured tube. A riding boot is often wider through the shaft and plainer about it. Slim knee-high vs Chelsea is the height fork. This page is western details against that riding shaft.",
    },
    {
      question: "Can a Western boot work with trousers that are not jeans?",
      answer:
        "Yes. That is the point of the refined version. Kliest’s note is a western boot under wool trousers, not a denim costume. Holevas also puts the shape under a maxi. If the only outfit that works is a costume, the boot is doing a different job than this essay.",
    },
    {
      question: "Does a high block make a knee-high a riding boot?",
      answer:
        "No. Length is not the category. A riding boot in this fork has an understated shaft and, often, a low or flat heel. A plain knee-high on a high stacked block can be a good boot and still be the wrong object. Read the heel in the photo.",
    },
    {
      question: "Do I need both?",
      answer:
        "Often, once the jobs split. The western boot keeps the days when the toe should show. The riding boot keeps the skirt and the blazer. If your week is one of those and not the other, one pair is the honest buy. Buying both on the same afternoon, before you know which morning fails, is how closets fill with twins.",
    },
    {
      question: "Is this the same as slim knee-high vs Chelsea?",
      answer:
        "No. Slim knee-high vs Chelsea compares a structured knee-high with an ankle Chelsea. Chelsea vs ankle boots stays inside ankle height. This essay compares a western shaft with a riding shaft.",
    },
  ],
  "fresh-vs-warm-perfumes": [
    {
      question: "Is fresh better for summer?",
      answer:
        "Often yes for comfort in heat—citrus, green, and aquatic impressions feel lighter. A soft warm scent can still work in summer evenings if sprayed sparingly.",
    },
    {
      question: "Can a warm perfume work in the office?",
      answer:
        "Yes if it stays relatively quiet and you keep the dose low. Soft woods, light amber, and clean warm musks are easier desk companions than heavy spice.",
    },
    {
      question: "EDP or EDT for everyday?",
      answer:
        "Either can work. Many people default to EDT for a lighter everyday feel and reach for EDP for a denser impression. Judge the specific scent on your skin.",
    },
    {
      question: "Is clean-girl the same as fresh?",
      answer:
        "Overlap is high—musk, citrus, and tea show up in both—but clean-girl is a vibe filter, not a lab category. A clean-girl bottle can still lean warm if the base is soft vanilla or skin musk. Test on skin for 30+ minutes.",
    },
  ],
  "how-to-layer-perfume": [
    {
      question: "How to layer perfume without smelling like too much?",
      answer:
        "Two sprays in the morning. Denser notes under a collar or on the back of the neck. Evening scent only where a hug would catch it. Lotion holds more of what you already sprayed.",
    },
    {
      question: "Can I layer two different perfumes?",
      answer:
        "Yes—when one stays quieter. Clean musk or soft woods under a brighter citrus or floral lift is the usual shape. Two loud bottles in the same hour rarely flatter anyone.",
    },
    {
      question: "Is fragrance layering the same as day to night perfume?",
      answer:
        "Close. Day-to-night perfume is the mood shift; fragrance layering is the method—lotion, sprays, optional mist, evening accent—so you get there without emptying a second bottle.",
    },
    {
      question: "Should I put perfume in my hair?",
      answer:
        "Lightly, preferably something labeled hair mist. Regular juice can dry strands. Mist the air once and walk through—or keep everything on skin when the day is humid.",
    },
    {
      question: "Do I need matching lotion from the same brand?",
      answer:
        "No. Unscented already helps. Matching lotion is tidy for a coherent stack; the same logo on both tubes is optional.",
    },
  ],
  "body-mist-vs-eau-de-parfum": [
    {
      question: "Is body mist just a weaker eau de parfum?",
      answer:
        "A body mist is a lighter concentration, built for hair, skin, and a reapply. Eau de parfum is denser and usually aimed at pulse points. Lighter is the job, not a demotion. Denser is not an automatic win for every room.",
    },
    {
      question: "Can I wear a body mist to the office?",
      answer:
        "Often yes, when the trail stays soft and you are not fogging a small room. A loud gourmand mist still needs a light hand—two passes, then the hallway, not a coat-level cloud at the desk.",
    },
    {
      question: "Will an eau de parfum carry through dinner without constant top-ups?",
      answer:
        "That is the reason people reach for it: a pulse-point statement meant to still read in cooler air and at a table. Skin, dose, and the specific juice still decide. We did not time any bottle.",
    },
    {
      question: "Should I own both, and can I layer them?",
      answer:
        "Yes. Treat the mist as the base wardrobe and the eau de parfum as the leave-the-house finish. Layering is allowed—see how to layer perfume—and two loud doses in the same hour still fight.",
    },
    {
      question: "Is this the same decision as solid versus rollerball, or fresh versus warm?",
      answer:
        "No. Solid versus rollerball is a travel-format fork: leak, liquids bag, discreet reapply. Fresh versus warm is a note-family filter. This page is concentration: body mist versus eau de parfum.",
    },
  ],
  "skin-scent-vs-modern-vanilla": [
    {
      question: "Is a skin scent just a weaker perfume?",
      answer:
        "No. On this page it is a character: closeness, fabric, a musk someone has to approach. Both type examples here are eau de parfum, 50 mL. A lighter mist versus a denser juice is body mist vs eau de parfum.",
    },
    {
      question: "Can a skin scent and a modern vanilla both be warm?",
      answer:
        "Yes. Warmth is doing two jobs—intimacy, or a composed vanilla with spice and wood. The family sort, citrus and clean notes against amber and spice, is fresh vs warm perfumes. Both of today’s lanes can sit on the warm side of that older split.",
    },
    {
      question: "Is modern vanilla the same as a bakery gourmand?",
      answer:
        "No. Vogue’s 2026 vanilla piece is about architecture: airy, spicy, woody, creamy with a bite, or green. Allure’s 27 October piece treats pink pepper as a way to keep vanilla from tipping into dessert, and it treats bakery gourmands as their own lane—textural warmth, not a brownie. That lane is contrast. It is not a third bottle on this page. Sugar crystals are still on the Vanilla Skin EdP listing. Read them.",
    },
    {
      question: "Can I layer a skin musk under a vanilla?",
      answer:
        "You can, if one of them stays quiet. The method—lotion, where you spray, when not to add a second cloud—is how to layer perfume. Two loud vanillas still fight. We did not wear Missing Person under Vanilla Skin and time the result.",
    },
    {
      question: "Is Vanilla Skin Eau de Parfum the same as the Vanilla Skin body mist?",
      answer:
        "No. The eau de parfum on this page is 50 mL, ASIN B0DGX5N1RD, glass that says eau de parfum. The hair-and-body mist is a different listing (B0D3FK6KCB), already a type example on body mist vs eau de parfum. Same name. Different job.",
    },
  ],
  "solid-perfume-vs-rollerball": [
    {
      question: "Is solid perfume better than a rollerball for travel?",
      answer:
        "Better when leak risk and liquids-bag space are the problem—wax and jelly have nothing to tip. Rollerballs win for precise oil on pulse points. Neither is a longevity trophy.",
    },
    {
      question: "Do solid perfumes go in the TSA liquids bag?",
      answer:
        "Most travelers pack wax/balm solids and sticks outside the quart bag because they are not free liquid. Officer discretion can still vary—size and labeling matter. When unsure, pack conservatively.",
    },
    {
      question: "Will a solid or rollerball project like my full bottle?",
      answer:
        "Usually no. Both lean skin-close. If you need a soft cloud for hair or fabric, bring a sealed travel spray and accept the liquids-bag trade.",
    },
    {
      question: "Can I reapply solid perfume in public without spraying people?",
      answer:
        "Yes—that is half the point. Finger swipe or roll under a sleeve, then wash or wipe hands. Skip spraying a cloud into shared cabin air.",
    },
    {
      question: "Should I bring a travel spray anyway?",
      answer:
        "Optional. Useful for fabric or a light mist when the quart bag still has room. Not the leak-proof hero of this comparison.",
    },
  ],
  "cream-blush-vs-powder-blush": [
    {
      question: "Is cream blush better than powder?",
      answer:
        "No. Cream, liquid, and stick formulas melt, and they are easier to blur. Pressed powder is easier to place and, in the press accounts above, easier to leave alone. Better is the one that matches the skin and the hour.",
    },
    {
      question: "Should I set cream blush with powder?",
      answer:
        "Often, if the cream slides. Cream first, a little powder after it has dried, and not so much powder that the flush goes flat. That is the order Allure’s artists and Vogue’s Nars trainer describe. A stain or a jelly is a different formula, and it is not a third column on this page.",
    },
    {
      question: "Is powder blush a bad idea on mature skin?",
      answer:
        "Not by itself. Vogue’s August 2026 piece, via Marcilla, prefers cream and liquid on mature skin because a dry powder can emphasize lines, and prefers a light hand if you do set with powder. A luminous or satin powder is a different object from a dry matte. Read the finish in the pan.",
    },
    {
      question: "Is a liquid blush the same as a cream?",
      answer:
        "Same side of this fork, not the same texture. A liquid is usually more pigment in a smaller dot. Cream pots and sticks give you a little more time to push the color. Allure’s July 2026 guide treats them as siblings with different working times. A putty that sets semi-matte lands closer to a powder finish than a dewy liquid does.",
    },
    {
      question: "Do I need a brush?",
      answer:
        "Not for cream. Fingers are the tool Longo prefers in that Allure piece, because the warmth helps it melt. Powder wants a fluffy brush and less product than you think. If the brush cup is empty, start with the beginner brush roles, not with a 24-piece set. A cream in a suitcase is a different mess: it will color a powder head that shares the pouch.",
    },
  ],
  "travel-makeup-brushes": [
    {
      question: "Which dual-ended brushes are best for travel?",
      answer:
        "Dual-ended means fewer handles: one shaft, two jobs. Type examples on this page include Sculpted by Aimee–class complexion brushes (blush or bronzer on one end, a smaller concealer end on the other), Glossier’s Cloud Paint cheek brush–class (silicone with synthetic fibers), and Laura Geller’s To-Go 4-in-1–class (heads that swap on one shaft). They illustrate the form, not a ranked shortlist. Skip the form if both ends get dirty and you will not rinse on the trip.",
    },
    {
      question: "What makes a makeup brush good for travel?",
      answer:
        "Protected heads (lid, retractable barrel, or pouch), synthetics you will rinse, and roles you use—not piece count. Soft tips and a sturdy ferrule beat a mirrored case.",
    },
    {
      question: "Retractable brushes or a mini kit?",
      answer:
        "Retractable or lidded when crush and debris are the enemy. Mini kit when separate eye and face jobs still matter and you will use the pouch. Dual-ended sits between them.",
    },
    {
      question: "Are synthetic brushes better for travel?",
      answer:
        "Usually yes for liquids, creams, and sink rinses. Natural hair can diffuse powder at home; suitcase life favors synthetic cleaning and durability.",
    },
    {
      question: "How many travel brushes do I need?",
      answer:
        "Often three to five roles: base, powder/set, cheek, plus eye packer and blender if needed. One multi-use buffer can cover a cream-only weekend.",
    },
    {
      question: "Do I need a pouch if brushes already have lids?",
      answer:
        "Lids help; a pouch or cup still stops lost caps and barrels under chargers. Soft dual-ended brushes without lids need a sleeve more than retractables do.",
    },
  ],
  "makeup-brushes-beginners-need": [
    {
      question: "How many brushes do beginners need?",
      answer:
        "About five core roles—foundation/base, powder, cheek, flat shader, and blending—cover most everyday makeup. You can start with four if one powder brush doubles for cheek color.",
    },
    {
      question: "Can I use fingers instead?",
      answer:
        "Yes for cream products and some base application. Brushes help with powder control, even foundation edges, and eyeshadow placement.",
    },
    {
      question: "Brush set or singles?",
      answer:
        "A small well-chosen set can be convenient if each piece has a clear role. Singles let you upgrade the hardest-working brush first without paying for fillers.",
    },
  ],
  "best-dior-lip-glow-dupes": [
    {
      question: 'What does "Dior Lip Glow dupe" mean here?',
      answer:
        "Finish + sheer tint + a hydration habit you will reapply—not a chemical twin, not a scored best-dupe trophy.",
    },
    {
      question: 'Balm or oil if I searched "dior lip gloss dupe"?',
      answer:
        "Lean oil (Dior Lip Glow Oil lane, or drugstore oils like e.l.f. Glow Reviver / NYX Fat Oil). Stick in the tote → balm side (Dior Lip Glow balm, e.l.f. Hydrating Core, LANEIGE Glowy Balm).",
    },
    {
      question: "Cheaper Korean moisturizing alternative with natural color?",
      answer:
        "LANEIGE Lip Glowy Balm (~$19 list band): glossy balm, shea + murumuru, sheer tint flavors. Different brand story from Dior's pH-tint claim—same shopping job for many readers.",
    },
    {
      question: "Is Summer Fridays a dupe?",
      answer:
        "No—not 1:1. Prestige buttery balm for hydration and soft tint. Useful if that texture is what you liked; wrong tool if you need Dior's glow-oil or pH-tint marketing.",
    },
    {
      question: "Will drugstore oils feel exactly like Dior?",
      answer:
        "Unlikely. Similar lane (sheer + shine), not identical slip, scent, or packaging ritual. Buy for the habit you will keep.",
    },
    {
      question: "Wear-hour or transfer scores?",
      answer:
        "None. We do not fabricate wear tests. Public claims and your own skin are the only honest sample size.",
    },
    {
      question: "What is a Korean Dior Lip Glow dupe for moisture and natural colour?",
      answer:
        "LANEIGE Lip Glowy Balm is the Korean balm for that job: a lightweight glossy balm for sheer natural color and daily moisture. Shea and murumuru are the care story on the label; Berry and Grapefruit are tint-flavor examples. It is not Dior’s pH-tint formula, and this page claims no wear time and no winner. If you want the oil look instead, that lane is e.l.f. Glow Reviver Lip Oil.",
    },
  ],
  "best-projector-for-bedroom": [
    {
      question: "Can a side sleeper project on the ceiling?",
      answer:
        "Yes if the stand or lens rotates far enough (Freestyle-class 180° cradles, MoGo-class multi-angle stands, GV31-style rotating lenses). Confirm tilt range on the PDP.",
    },
    {
      question: "ISO lumens vs ANSI lumens—what should I trust?",
      answer:
        "Prefer ISO 21118 or ANSI figures the brand publishes. LED lumens marketing numbers are a different, often inflated scale—do not treat them as interchangeable.",
    },
    {
      question: "Do I need a short-throw projector for a tiny bedroom?",
      answer:
        "Only if the unit must sit inches from the wall. Most bedroom portables are standard throw (~1.2:1). Measure first; two feet of depth usually means true short-throw / UST, not a can projector.",
    },
    {
      question: "Is casting enough, or do I need Google TV / Tizen?",
      answer:
        "Casting works. Licensed Netflix on Google TV or Tizen is fewer bedtime steps. HDMI stick setups still fit if you already live in that ecosystem—budget the stick and remotes.",
    },
    {
      question: "Did AiComparor measure brightness or noise?",
      answer:
        "No. Specs, dB claims, battery minutes, and list bands are brand or retailer listings as checked Nov 2026—not lab scores.",
    },
  ],
};

export function getArticleFaqs(slug: string): FaqItem[] {
  return articleFaqs[slug] ?? [];
}

export function articleMetadata(article: ArticleSummary): Metadata {
  const path = articlePath(article);
  const url = absoluteUrl(path);
  const image = absoluteUrl(article.heroImage);
  const title = article.seoTitle || article.title;

  return {
    title,
    description: article.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description: article.description,
      siteName: "AiComparor",
      locale: "en_US",
      images: [
        {
          url: image,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.description,
      images: [image],
    },
  };
}

export function categoryMetadata(category: Category): Metadata {
  const department = departments[category];
  const url = absoluteUrl(`/${category}`);
  const image = absoluteUrl(department.image);

  return {
    title: department.title,
    description: department.lede,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: department.title,
      description: department.lede,
      siteName: "AiComparor",
      locale: "en_US",
      images: [{ url: image, alt: department.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: department.title,
      description: department.lede,
      images: [image],
    },
  };
}

export function buildArticleJsonLd(article: ArticleSummary) {
  const path = articlePath(article);
  const url = absoluteUrl(path);
  const image = absoluteUrl(article.heroImage);
  const department = departments[article.category];
  const faqs = getArticleFaqs(article.slug);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.description,
      image: [image],
      dateModified: article.updated,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      author: {
        "@type": "Organization",
        name: "AiComparor",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "AiComparor",
        url: siteUrl,
      },
      isPartOf: {
        "@type": "WebSite",
        name: "AiComparor",
        url: siteUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: department.title,
          item: absoluteUrl(`/${article.category}`),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: url,
        },
      ],
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (article.slug === "how-to-wash-a-makeup-bag") {
    graph.push({
      "@type": "HowTo",
      "@id": `${url}#howto`,
      name: "How to wash a makeup bag without ruining the shape",
      description: article.description,
      step: [
        {
          "@type": "HowToStep",
          name: "Empty",
          text: "Empty the bag completely and remove loose debris before washing.",
        },
        {
          "@type": "HowToStep",
          name: "Pretreat",
          text: "Spot-treat makeup stains gently; protect elastic brush slots.",
        },
        {
          "@type": "HowToStep",
          name: "Wash",
          text: "Use cold or brand-stated 30° water on a gentle / delicate cycle when the care line allows machine wash.",
        },
        {
          "@type": "HowToStep",
          name: "Hang dry",
          text: "Hang dry; reshape while damp. Do not tumble dry unless the care line explicitly allows it.",
        },
      ],
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
