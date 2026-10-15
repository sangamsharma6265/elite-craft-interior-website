type DressingReference = {
  slug: string;
  name: string;
  sourcePath: string;
  image: string;
  description: string;
  planning: string;
};

function dressing(
  name: string,
  sourcePath: string,
  description: string,
  namedImage = false,
  extension = "jpeg",
): DressingReference {
  const photoId = sourcePath.split("-").at(-1)!;
  const imageName = sourcePath.replace(/-\d+$/, "");

  return {
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    sourcePath,
    image: namedImage
      ? `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}/free-photo-of-${imageName}.${extension}`
      : `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.${extension}`,
    description,
    planning:
      "Share your available wall space, preferred table height and storage needs. We will discuss drawer sizes, legroom, mirror placement and suitable finishes before quoting. Stools, lighting, cosmetics and decorative accessories are included only when specified in your quotation.",
  };
}

export const dressingReferences: DressingReference[] = [
  dressing(
    "Bright White Dressing Station",
    "set-of-beauty-supplies-on-table-with-mirror-6045340",
    "A white dressing-station reference with a mirror and an organised tabletop.",
  ),
  dressing(
    "Walk-In Dressing Room Vanity",
    "modern-dressing-room-with-vanity-table-6198662",
    "A dressing-room reference combining a vanity table, mirror and padded stool.",
  ),
  dressing(
    "Window-Side Bedroom Dressing Area",
    "modern-interior-of-bedroom-with-dressing-table-and-large-window-6121088",
    "A bedroom layout reference with a dressing area near a large window.",
  ),
  dressing(
    "Compact Bedroom Mirror Station",
    "a-bedside-table-with-a-mirror-7986061",
    "A bedroom reference showing a compact table-and-mirror arrangement.",
  ),
  dressing(
    "Coordinated Bedroom Dressing Layout",
    "contemporary-bedroom-interior-with-comfy-bed-and-big-mirror-6585768",
    "A bedroom layout reference with a dressing table and a large mirror.",
  ),
  dressing(
    "Minimal Mirror Desk Vanity",
    "mirror-above-the-vanity-table-24740411",
    "A minimal vanity reference with a decorative mirror and a simple desk arrangement.",
    true,
  ),
  dressing(
    "Classic Wooden Dressing Table",
    "brown-wooden-vanity-table-with-mirror-6873890",
    "A classic wooden dressing-table reference with an ornamental mirror.",
  ),
  dressing(
    "Gold Mirror Bedroom Vanity",
    "elegant-bedroom-interior-with-vanity-table-6209462",
    "A bedroom dressing reference featuring a gold-coloured decorative mirror.",
  ),
  dressing(
    "Wooden Drawer Dressing Table",
    "cupboard-with-mirror-in-room-6903253",
    "A wooden dressing-table reference combining drawer storage with a wall mirror.",
  ),
  dressing(
    "Beige Illuminated Dressing Table",
    "elegant-modern-dressing-table-in-dubai-35547043",
    "A beige dressing-table reference with coordinated mirror lighting.",
    true,
  ),
  dressing(
    "Warm Vintage Wooden Vanity",
    "a-vanity-table-in-wooden-interior-9890660",
    "A vintage wooden vanity reference within a warm, classic interior.",
  ),
  dressing(
    "White Square Mirror Dressing Table",
    "interior-of-modern-room-with-square-mirror-6970071",
    "A white dressing-table reference paired with a square mirror and dark seating.",
  ),
  dressing(
    "Soft Light Vanity Room Layout",
    "interior-design-of-room-24461274",
    "A dressing-room layout reference with coordinated furniture and soft natural light.",
    true,
  ),
  dressing(
    "Light Bedroom Vanity Setting",
    "interior-of-stylish-room-in-luxury-apartment-7045829",
    "A light bedroom reference with a coordinated vanity and mirror setting.",
  ),
  dressing(
    "Ornate Classic Dressing Table",
    "antique-dressing-table-16476339",
    "An ornate dressing-table reference with a decorative classic mirror.",
    true,
  ),
  dressing(
    "Bedroom Furniture Vanity Layout",
    "stylish-bedroom-interior-with-comfortable-bed-and-vanity-table-7018391",
    "A bedroom furniture layout showing a vanity coordinated with the bed and television area.",
  ),
  dressing(
    "Contemporary Bedroom Mirror Vanity",
    "bedroom-interior-design-15879044",
    "A contemporary bedroom reference with a vanity table and coordinated mirror.",
    false,
    "png",
  ),
  dressing(
    "Minimal Residential Dressing Concept",
    "residential-project-in-sulaymaniyah-city-27562180",
    "A residential dressing-area concept with a vanity and mirror reflecting the bedroom.",
    false,
    "png",
  ),
  dressing(
    "Window-Side Vanity Bedroom Layout",
    "spacious-empty-bedroom-in-stylish-design-6489083",
    "A spacious bedroom layout reference with a vanity placed near the window.",
  ),
  dressing(
    "Classic Suite Dressing Layout",
    "bed-an-ottoman-and-a-vanity-table-in-a-hotel-room-8092391",
    "A classic suite reference coordinating the vanity with a bed and ottoman.",
  ),
  dressing(
    "Sunlit White Vanity Setting",
    "light-bedroom-with-cozy-bed-and-chairs-near-vanity-table-4427020",
    "A sunlit bedroom layout with a white vanity and nearby seating.",
  ),
  dressing(
    "Minimal Wooden Bedroom Vanity",
    "modern-minimalist-bedroom-with-wooden-vanity-30761656",
    "A wooden vanity reference with a mirror and a soft neutral bedroom palette.",
    true,
  ),
  dressing(
    "Compact Coordinated Bedroom Vanity",
    "cozy-bedroom-with-comfy-bed-and-vanity-table-7005275",
    "A bedroom layout reference combining a vanity, television cabinet and coordinated bed setting.",
  ),
  dressing(
    "Minimal Decor Dressing Table",
    "minimalistic-vanity-mirror-on-a-table-8580762",
    "A minimal dressing-table reference with plants, a mirror and decorative accents.",
  ),
  dressing(
    "Round Mirror Stool Vanity",
    "modern-vanity-table-in-stylish-room-6198653",
    "A modern vanity reference with a round mirror, padded stool and decorative lamp.",
  ),
];