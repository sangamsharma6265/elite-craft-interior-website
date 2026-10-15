type WardrobeReference = {
  slug: string;
  name: string;
  sourcePath: string;
  image: string;
  description: string;
  planning: string;
};

function wardrobe(
  name: string,
  sourcePath: string,
  description: string,
  namedImage = false,
  extension = "jpeg",
): WardrobeReference {
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
      "Share your wall dimensions, ceiling height and storage needs. We will plan hanging space, shelves, drawers, door clearance and suitable hardware before quoting. Glass, mirrors and lighting require separate specification. Clothes and accessories shown are inspiration.",
  };
}

export const wardrobeReferences: WardrobeReference[] = [
  wardrobe(
    "Glass Front Bedroom Wardrobe",
    "spacious-wardrobe-in-bedroom-7214465",
    "A bedroom wardrobe reference with glass doors and wooden shelving.",
  ),
  wardrobe(
    "Modern Glass Panel Walk-In",
    "luxury-modern-walk-in-closet-design-with-glass-panels-35189675",
    "A walk-in wardrobe reference with glass-front storage and an organised clothing display.",
    true,
  ),
  wardrobe(
    "Elegant Illuminated Walk-In",
    "luxury-modern-walk-in-closet-with-elegant-design-37511319",
    "A spacious walk-in wardrobe concept with contemporary storage and decorative lighting.",
    true,
    "png",
  ),
  wardrobe(
    "Wood Cabinet Dressing Room",
    "elegant-modern-walk-in-closet-interior-design-37797447",
    "A dressing-room concept with wooden cabinetry and coordinated lighting.",
    true,
    "png",
  ),
  wardrobe(
    "Glass Door Dressing Suite",
    "luxury-modern-walk-in-wardrobe-design-30465909",
    "A modern walk-in wardrobe reference with glass doors in a bedroom setting.",
    true,
  ),
  wardrobe(
    "Built-In Glass Hallway Wardrobe",
    "glass-wardrobe-in-modern-apartment-7533928",
    "A glass-door wardrobe reference built into a spacious apartment hallway.",
  ),
  wardrobe(
    "Mirrored Entrance Wardrobe",
    "interior-of-corridor-with-mirror-wardrobe-6492387",
    "A large mirrored wardrobe reference for an entrance or dressing corridor.",
  ),
  wardrobe(
    "Light Hallway Mirror Wardrobe",
    "house-interior-with-glass-wardrobe-near-entrance-6538904",
    "A mirrored built-in wardrobe reference in a bright apartment hallway.",
  ),
  wardrobe(
    "Spacious Corridor Storage",
    "spacious-corridor-with-wardrobe-at-home-6489091",
    "A corridor storage reference combining a large wardrobe with a bright mirrored interior.",
  ),
  wardrobe(
    "White Shelving Walk-In",
    "spacious-modern-walk-in-closet-design-39383567",
    "A bright walk-in wardrobe reference with white shelving and wooden hanging rails.",
    true,
  ),
  wardrobe(
    "Minimal Open Shelving Walk-In",
    "an-empty-walk-in-closet-7587738",
    "A spacious walk-in wardrobe reference with open shelves and a minimal interior.",
  ),
  wardrobe(
    "Neutral Dressing Room Storage",
    "the-interior-of-a-walk-in-closet-6303209",
    "A modern walk-in storage reference with a neutral colour direction.",
  ),
  wardrobe(
    "Organised Dressing Collection",
    "photo-of-walk-in-closet-6670657",
    "A walk-in wardrobe reference showing an organised arrangement of clothing and accessories.",
  ),
  wardrobe(
    "Natural Wood Open Wardrobe",
    "empty-wooden-closet-8146143",
    "An open wooden wardrobe reference with shelves and a spacious dressing-room layout.",
  ),
  wardrobe(
    "Chandelier Mirror Walk-In",
    "a-walk-in-closet-with-clothes-hanging-7587468",
    "A dressed walk-in wardrobe reference with hanging clothes, a chandelier and a full-length mirror.",
  ),
  wardrobe(
    "Window Light Dressing Room",
    "interior-of-walk-in-closet-7031842",
    "A walk-in wardrobe reference with shelves, cupboards and natural light from a large window.",
  ),
  wardrobe(
    "Accessories Display Dressing Room",
    "walk-in-closet-of-a-woman-5826938",
    "A dressing-room reference with visible clothing and accessory storage.",
  ),
  wardrobe(
    "Minimal Built-In Storage Layout",
    "minimalist-styled-empty-built-in-closet-with-racks-and-shelves-7005285",
    "A built-in closet reference with hanging racks, shelves and a nearby wall mirror.",
  ),
  wardrobe(
    "Minimal Wooden Wardrobe Direction",
    "modern-minimalist-indoor-wooden-closet-design-31759521",
    "A minimalist wardrobe reference in a bright contemporary interior.",
    true,
  ),
  wardrobe(
    "Bedroom Dressing Zone Wardrobe",
    "wardrobe-and-bathroom-with-glass-walls-in-modern-bedroom-6585625",
    "A bedroom dressing-zone reference with wooden wardrobe shelving beside a glass-walled bathroom.",
  ),
  wardrobe(
    "Spacious Shelving Wardrobe Concept",
    "spacious-modern-walk-in-closet-with-shelving-36121791",
    "A modern walk-in wardrobe reference with extensive shelving and organised storage zones.",
    true,
  ),
  wardrobe(
    "White Closet and Shelf Layout",
    "modern-room-interior-with-closet-at-home-7045313",
    "A contemporary room reference with a white closet and open shelving.",
  ),
  wardrobe(
    "Reflective Bedroom Wardrobe",
    "modern-room-interior-with-wardrobe-on-laminate-at-home-6970073",
    "A contemporary wardrobe reference with reflective surfaces in a light room setting.",
  ),
  wardrobe(
    "Full Room Shelving Layout",
    "interior-of-wardrobe-with-many-shelves-6585750",
    "A spacious wardrobe-room reference with multiple shelves, a mirror and an open circulation area.",
  ),
  wardrobe(
    "White Storage Wood Floor Walk-In",
    "room-with-empty-shelves-7601160",
    "A walk-in closet reference combining white shelving with wooden flooring.",
  ),
];