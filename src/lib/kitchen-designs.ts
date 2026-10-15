type KitchenReference = {
  slug: string;
  name: string;
  sourcePath: string;
  image: string;
  description: string;
  planning: string;
};

function kitchen(
  name: string,
  sourcePath: string,
  description: string,
  namedImage = false,
  extension = "jpeg",
): KitchenReference {
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
      "Share your kitchen measurements and the positions of doors, windows, plumbing and electrical points. We will plan cabinet sizes, appliance clearances and storage before quoting. An island is suitable only where space permits. Appliances, countertops, fittings and installation work are included only as specified in your quotation.",
  };
}

export const kitchenReferences: KitchenReference[] = [
  kitchen(
    "Charcoal Island Wood Cabinet Kitchen",
    "modern-convenient-island-kitchen-interior-design-7031213",
    "A kitchen reference pairing a grey cooking island with warm brown cabinetry.",
  ),
  kitchen(
    "Wood Cabinet Island Kitchen",
    "modern-kitchen-with-wooden-cabinets-and-island-37510901",
    "A contemporary island kitchen with wooden cabinets and coordinated appliance positions.",
    true,
  ),
  kitchen(
    "Bright White Island Kitchen",
    "modern-kitchen-with-white-cabinets-and-island-36777912",
    "A bright kitchen reference with white cabinetry and a central island.",
    true,
  ),
  kitchen(
    "White Kitchen Breakfast Island",
    "modern-kitchen-with-a-kitchen-island-11208972",
    "A white kitchen reference with an island and coordinated breakfast seating.",
  ),
  kitchen(
    "Compact Apartment Kitchenette",
    "small-kitchenette-in-the-apartment-19685797",
    "A compact kitchenette reference showing white cabinetry, appliances and a practical small-space arrangement.",
    true,
  ),
  kitchen(
    "Open Kitchen Dining Concept",
    "modern-kitchen-interior-with-island-and-dining-area-35446314",
    "An open kitchen concept connecting island cabinetry with a nearby dining area.",
    true,
  ),
  kitchen(
    "Spacious White Cabinet Kitchen",
    "white-kitchen-cabinet-near-white-kitchen-island-8134756",
    "A spacious kitchen reference with white cabinetry and a coordinated island.",
  ),
  kitchen(
    "Open Plan White Island Kitchen",
    "modern-open-space-kitchen-with-an-island-6303113",
    "An open-plan kitchen reference combining white cabinets, an island and wooden flooring.",
  ),
  kitchen(
    "Light Family Kitchen Layout",
    "white-home-kitchen-interior-design-7601120",
    "A bright family-kitchen reference with white cabinets and a central work surface.",
  ),
  kitchen(
    "White Statement Island Kitchen",
    "modern-white-kitchen-interior-design-with-island-36511383",
    "A white kitchen reference with a prominent island surface and pendant lighting.",
    true,
  ),
  kitchen(
    "Wood and Black Accent Kitchen",
    "an-interior-of-a-modern-kitchen-counter-7045356",
    "A contemporary cabinet reference combining wooden surfaces with black accents.",
  ),
  kitchen(
    "Green and Dark Wood Kitchen Concept",
    "modern-kitchen-interior-with-green-cabinets-32178151",
    "A kitchen concept pairing green cabinetry with dark wood accents.",
    true,
    "png",
  ),
  kitchen(
    "Contemporary Wooden Cabinet Kitchen",
    "modern-kitchen-interior-with-wooden-cabinets-31238723",
    "A wooden-cabinet kitchen reference with a coordinated contemporary appliance layout.",
    true,
  ),
  kitchen(
    "Wood Cabinet Apartment Kitchen",
    "interior-of-modern-kitchen-in-apartment-6297084",
    "An apartment kitchen reference combining wooden cupboards, a dark counter and nearby dining furniture.",
  ),
  kitchen(
    "Dark Cabinet Open Shelf Kitchen",
    "interior-design-of-a-modern-kitchen-4819708",
    "A dark-cabinet kitchen reference with open shelves for kitchenware.",
  ),
  kitchen(
    "Dark Cabinet Daylight Kitchen",
    "black-wooden-cabinets-in-the-kitchen-8583892",
    "A dark kitchen-cabinet reference balanced by daylight and warm wooden flooring.",
  ),
  kitchen(
    "Window View Wooden Kitchen",
    "modern-kitchen-with-wooden-cupboards-6908356",
    "A wooden-cupboard kitchen reference arranged beside a large window overlooking greenery.",
  ),
  kitchen(
    "Warm Wood Window Kitchen",
    "modern-kitchen-interior-with-wooden-cabinets-36450269",
    "A warm kitchen reference with wooden cabinets and natural window light.",
    true,
  ),
  kitchen(
    "Black Cabinet Wood Counter Kitchen",
    "modern-black-kitchen-with-wood-accents-30519064",
    "A contemporary kitchen reference pairing black cabinetry with a wooden counter treatment.",
    true,
  ),
  kitchen(
    "Black and Wood Contrast Kitchen",
    "view-of-a-modern-kitchen-with-black-and-wooden-cabinets-19227212",
    "A contrasting kitchen reference with black and wooden cabinets and coordinated work surfaces.",
    true,
  ),
  kitchen(
    "Compact Blue and Wood Kitchen",
    "modern-minimalist-kitchen-with-blue-cabinets-29252629",
    "A compact kitchen reference combining blue cabinets with wooden accents.",
    true,
  ),
  kitchen(
    "Blue Cabinet Open Shelf Kitchen",
    "contemporary-kitchen-design-with-blue-cabinets-10117737",
    "A blue-cabinet kitchen reference with open wooden shelves and coordinated appliances.",
  ),
  kitchen(
    "Blue Cabinet White Counter Kitchen",
    "modern-kitchen-interior-with-blue-cabinets-34558075",
    "A contemporary kitchen reference pairing blue cabinets with white work surfaces.",
    true,
  ),
  kitchen(
    "Green Cabinet Gold Accent Kitchen",
    "modern-kitchen-with-green-cabinets-and-gold-accents-34756512",
    "A green-cabinet kitchen reference with gold-coloured details and coordinated appliances.",
    true,
  ),
  kitchen(
    "Green Kitchen Pendant Island",
    "modern-kitchen-interior-with-green-cabinets-31264716",
    "A green kitchen reference with an island arrangement and a copper-coloured pendant.",
    true,
  ),
];