import { consultationLink } from "@/lib/catalogue";

export type ServiceSlug =
  | "wall-panels"
  | "interior-design"
  | "exterior-design";

export type ServiceReference = {
  slug: string;
  code: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  sourceUrl: string;
};

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  seoTitle: string;
  seoDescription: string;
  heading: string;
  introduction: string;
  galleryIntroduction: string;
  referenceNote: string;
  scope: string[];
  planning: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  references: ServiceReference[];
};

type ReferenceRow = [
  name: string,
  sourcePath: string,
  description: string,
  extension?: "jpeg" | "png",
];

function makeReferences(
  prefix: string,
  rows: ReferenceRow[],
): ServiceReference[] {
  return rows.map(
    ([name, sourcePath, description, extension = "jpeg"], index) => {
      const photoId = sourcePath.split("-").at(-1)!;

      return {
        slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        code: `${prefix}-${String(index + 1).padStart(2, "0")}`,
        name,
        description,
        image:
          `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.${extension}` +
          "?auto=compress&cs=tinysrgb&w=1400",
        imageAlt: `${name}: ${description}`,
        sourceUrl: `https://www.pexels.com/photo/${sourcePath}/`,
      };
    },
  );
}

const panelReferences = makeReferences("EC-WP", [
  [
    "Contemporary Slat Divider",
    "modern-interior-with-wooden-slat-divider-31310765",
    "A vertical slat-divider reference within a contemporary seating area.",
  ],
  [
    "Curved Slat Hallway Wall",
    "close-up-of-wooden-walls-248850",
    "A hallway reference showing closely spaced wooden slats and a curved wall treatment.",
  ],
  [
    "Diagonal Slat Wall Detail",
    "minimal-wood-light-s-17849252",
    "A diagonal wooden-slat detail for discussing pattern and spacing.",
  ],
  [
    "Gold Accent Vertical Wall",
    "wooden-planks-on-wall-in-modern-building-3964486",
    "A vertical wall-detail reference with wooden planks and gold-coloured accents.",
  ],
  [
    "Slim Corridor Divider",
    "interior-of-apartment-with-wooden-decorations-6958141",
    "A corridor reference with slim decorative wooden partitions.",
  ],
  [
    "Warm Bedroom Slat Backdrop",
    "a-bed-with-a-light-on-it-and-a-wooden-wall-28057650",
    "A bedroom wall reference combining wooden slats with warm decorative lighting.",
  ],
  [
    "Cabinet and Slat Partition",
    "wooden-cabinet-near-wooden-divider-14651024",
    "A dark cabinet setting coordinated with a vertical slatted divider.",
  ],
  [
    "Illuminated Slat Detail",
    "modern-architectural-lighting-with-wooden-slats-35563395",
    "A lighting-detail reference showing wooden slats against a panelled surface.",
  ],
  [
    "Living Room Wood Panel Backdrop",
    "wooden-panels-on-walls-and-patterned-colorful-couch-7745942",
    "A living-room wall reference combining wooden panels with patterned seating.",
  ],
  [
    "TV Room Panel Treatment",
    "modern-interior-design-with-wooden-paneling-in-dubai-hotel-30147882",
    "A room reference with wooden panelling around a coordinated television setting.",
  ],
  [
    "Minimal Panel and Glass Interior",
    "interior-of-a-modern-minimalist-room-19520998",
    "A minimal interior reference pairing wooden panelling with glass partitions.",
  ],
  [
    "Geometric Wood Panel Detail",
    "modern-interior-architecture-with-wood-panels-29870248",
    "An architectural-detail reference showing a geometric wooden panel arrangement.",
  ],
  [
    "Wood and Frosted Glass Corridor",
    "modern-wooden-interior-with-frosted-glass-panels-25541512",
    "A corridor reference combining wooden surfaces with frosted glass panels.",
  ],
  [
    "Office Wood Panel Setting",
    "modern-office-interior-with-wooden-paneling-35203647",
    "An office reference coordinating wooden panelling with furniture and warm lighting.",
  ],
  [
    "Clean Wood Grain Wall",
    "brown-wall-planning-207909",
    "A close-up wall reference for discussing wood-grain appearance and panel joints.",
  ],
  [
    "Minimal Lobby Panel Layout",
    "modern-minimalist-lobby-interior-design-32716873",
    "A bright lobby reference with a coordinated wooden panel treatment.",
  ],
  [
    "Vertical Office Lobby Panels",
    "modern-office-interior-with-wooden-panel-design-33898343",
    "An office-lobby reference showing vertical wooden panels and warm lighting.",
  ],
  [
    "Decorative Bedroom TV Panel",
    "modern-bedroom-interior-with-decorative-panel-and-tv-set-6394709",
    "A bedroom reference with a decorative panel coordinated with the television area.",
  ],
  [
    "Geometric Bedroom Panel Pattern",
    "decor-of-bedroom-17125483",
    "A bedroom wall reference with geometric panel details and coloured accents.",
  ],
  [
    "Symmetrical Carved Wall Detail",
    "bedroom-interior-with-carved-panel-between-shiny-lamps-6394586",
    "A decorative bedroom-wall reference with a symmetrical ornamental treatment.",
  ],
  [
    "Contemporary Patterned Bedroom Wall",
    "modern-bedroom-with-unique-wall-design-36195702",
    "A bedroom reference featuring a prominent contemporary wall pattern.",
  ],
  [
    "Green Panel Accent Wall",
    "modern-bedroom-interior-with-green-accent-wall-30725672",
    "A green panel-accent reference within a neutral bedroom setting.",
  ],
  [
    "Linear Corridor Slat Layout",
    "empty-corridor-interior-18362215",
    "A corridor reference showing linear wooden slats and coordinated lighting.",
  ],
  [
    "Geometric Headboard Wall",
    "modern-bedroom-interior-with-geometric-wall-art-28609812",
    "A bedroom reference with geometric wall details behind the bed.",
  ],
  [
    "Glass Door Slat Partition",
    "a-wooden-framed-glass-door-of-the-house-14613660",
    "A room-divider reference combining a wooden-framed glass door with decorative slats.",
  ],
]);

const interiorReferences = makeReferences("EC-IN", [
  [
    "Light Contemporary Apartment",
    "luxury-living-room-in-modern-apartment-7534563",
    "A spacious apartment reference with coordinated furniture and natural light.",
  ],
  [
    "Bright Statement Living Room",
    "luxury-interior-design-of-living-room-7546651",
    "A bright living-room reference with decorative lighting and coordinated furnishings.",
  ],
  [
    "Warm Wood Living Space",
    "modern-luxurious-living-room-interior-design-34538315",
    "A living-room reference pairing wood accents with seating and a television area.",
  ],
  [
    "Neutral Contemporary Lounge",
    "luxury-living-room-interior-design-7546321",
    "A spacious lounge reference with contemporary furniture and neutral colours.",
  ],
  [
    "Coordinated Luxury Living Concept",
    "modern-luxury-living-room-interior-design-32269122",
    "A living-room concept with coordinated decorative details and statement furniture.",
    "png",
  ],
  [
    "Suspended Fireplace Living Concept",
    "interior-design-of-luxury-living-room-23916869",
    "A spacious interior concept featuring a suspended fireplace and coordinated seating.",
    "png",
  ],
  [
    "Chandelier Living Room Concept",
    "luxurious-modern-living-room-interior-design-35189744",
    "A living-room concept with statement lighting and a coordinated furniture arrangement.",
  ],
  [
    "Reflective Accent Living Room",
    "shining-interior-of-luxury-living-room-7195552",
    "A living-room reference combining reflective surfaces with decorative furniture.",
  ],
  [
    "Classic Decorative Living Room",
    "luxury-living-room-5806989",
    "A classic living-room reference with ornamental details, artwork and a fireplace.",
  ],
  [
    "Modern Chandelier Seating Concept",
    "luxury-interior-design-of-living-room-23916875",
    "A contemporary living-room concept with coordinated seating and overhead lighting.",
    "png",
  ],
  [
    "Minimal Apartment Living Concept",
    "elegant-modern-apartment-living-room-interior-33962193",
    "An apartment living-room concept with contemporary furniture and a restrained palette.",
    "png",
  ],
  [
    "Coordinated TV Lounge",
    "modern-luxury-living-room-interior-design-34538286",
    "A living-room reference coordinating the television area with seating and lighting.",
  ],
  [
    "Contemporary Apartment Lounge",
    "modern-apartment-interior-design-11296222",
    "An apartment lounge reference with coordinated contemporary decor and lighting.",
  ],
  [
    "Open Living and Dining Layout",
    "interior-of-a-living-room-in-an-apartment-10117724",
    "An open living-space reference showing connected furniture zones.",
  ],
  [
    "Minimal Furnished Apartment",
    "interior-design-of-an-apartment-7534274",
    "A minimal apartment reference with a coordinated contemporary furniture setting.",
  ],
  [
    "Scandinavian Living Room Direction",
    "modern-interior-design-of-apartment-living-room-11296221",
    "A living-room reference with a light Scandinavian furniture direction.",
  ],
  [
    "Grey Sofa Wood Table Lounge",
    "interior-of-modern-apartment-living-room-6588599",
    "A practical living-room reference combining grey seating with a wooden table.",
  ],
  [
    "Apartment Seating Layout",
    "interior-of-living-room-in-apartment-7173672",
    "An apartment living-room reference showing a sofa, armchair and central table arrangement.",
  ],
  [
    "Connected Kitchen Living Interior",
    "interior-of-modern-apartment-with-light-walls-and-expensive-furniture-6587899",
    "An open interior reference connecting the kitchen and living-space furniture.",
  ],
  [
    "Green Accent Apartment Living Room",
    "modern-design-of-an-apartment-flat-6580396",
    "An apartment interior reference with coordinated seating and green accents.",
  ],
  [
    "Grey Wall TV Living Room",
    "interior-of-stylish-living-room-in-contemporary-flat-7545497",
    "A living-room reference with grey walls, colourful cushions and a television area.",
  ],
  [
    "White and Beige Seating Layout",
    "light-and-modern-interior-of-big-living-room-6207817",
    "A light living-room reference combining white and beige seating.",
  ],
  [
    "Neutral Geometric Living Room",
    "modern-living-room-interior-with-neutral-tones-33688058",
    "A neutral living-room reference with geometric wall details.",
  ],
  [
    "Calm Contemporary Living Room",
    "modern-elegant-living-room-interior-design-32025946",
    "A contemporary living-room reference with coordinated neutral decor.",
  ],
  [
    "Decorative Modern Seating Concept",
    "modern-luxury-living-room-with-elegant-interior-design-34377944",
    "A living-room concept combining a comfortable seating area with decorative lighting.",
  ],
]);

const exteriorReferences = makeReferences("EC-EX", [
  [
    "Contemporary Garden Exterior",
    "modern-house-exterior-7587880",
    "An exterior reference connecting a contemporary house with an outdoor seating area.",
  ],
  [
    "Minimal White Facade",
    "modern-house-facade-11435856",
    "A white facade reference with large windows and a restrained exterior palette.",
  ],
  [
    "Glass Facade Garden Setting",
    "modern-house-facade-10610731",
    "A glazed exterior reference coordinated with a garden and water feature.",
  ],
  [
    "Geometric Modern Exterior",
    "modern-minimalist-house-exterior-design-8134820",
    "An exterior reference with clean geometric forms and a minimal finish direction.",
  ],
  [
    "Two-Level Entrance Approach",
    "modern-house-exterior-design-8134821",
    "A two-level house reference with a paved approach and coordinated outdoor surfaces.",
  ],
  [
    "Panoramic Window Garden Facade",
    "exterior-of-modern-house-with-glass-doors-and-panoramic-windows-7031607",
    "A house exterior reference with large glazed openings and a garden-facing arrangement.",
  ],
  [
    "White Wall Roofline Exterior",
    "modern-house-facade-with-white-walls-32854133",
    "A front-elevation reference combining white walls with a tiled roof.",
  ],
  [
    "Brick and Glass Balcony Facade",
    "facades-of-modern-houses-19760997",
    "A residential facade reference with brick surfaces and glass balcony details.",
  ],
  [
    "Stone Finish Double-Door Entrance",
    "exterior-and-the-entrance-of-a-modern-house-19227220",
    "An entrance reference with stone-style surfaces, wooden doors and decorative lighting.",
  ],
  [
    "Plant-Lined Open Terrace",
    "patio-in-a-modern-house-13600515",
    "An open-terrace reference connecting indoor space with plants and natural light.",
  ],
  [
    "Wood Accent Glass Entrance",
    "modern-house-entrance-7587881",
    "An entrance reference combining glass doors with wooden surfaces and plants.",
  ],
  [
    "Dark Exterior Wooden Terrace",
    "modern-house-outdoor-terrace-7587854",
    "An outdoor terrace reference with a dark exterior and coordinated wooden deck surfaces.",
  ],
  [
    "Stone Column Entrance Concept",
    "modern-residential-entrance-with-stone-columns-34591377",
    "An entrance concept with stone-style columns and a stepped approach.",
  ],
  [
    "Contemporary Balcony Elevation",
    "facade-of-a-house-with-balconies-17261082",
    "A residential exterior reference with balconies and a garden-facing elevation.",
  ],
  [
    "Shaded Patio Exterior",
    "modern-house-patio-19344331",
    "A patio reference showing shaded outdoor space beside a contemporary facade.",
  ],
  [
    "Balcony and Garden Home Exterior",
    "photo-of-a-house-exterior-5177211",
    "A two-level home reference with a balcony, patio and planted outdoor setting.",
  ],
  [
    "Coordinated Urban Balcony Facade",
    "modern-building-exterior-with-balconies-in-town-5651651",
    "An urban facade reference with coordinated balcony and window details.",
  ],
  [
    "Blue Balcony Exterior Accent",
    "exterior-of-a-house-with-balconies-in-a-town-17286041",
    "An urban house reference with a blue balcony accent and a planted frontage.",
  ],
  [
    "Tropical Wood Accent Exterior",
    "modern-house-with-balconies-19168392",
    "A residential exterior reference combining wood accents with planting.",
  ],
  [
    "Warm Cottage Terrace Setting",
    "exterior-of-cozy-modern-cottage-with-terrace-4700547",
    "A cottage exterior reference with a terrace and a warm evening appearance.",
  ],
  [
    "Geometric Balcony Garden Exterior",
    "modern-house-on-grass-in-daytime-4744622",
    "A geometric house reference with large windows and a garden-facing balcony.",
  ],
  [
    "Villa Balcony Patio Layout",
    "villa-with-sliding-glass-doors-and-a-balcony-6010278",
    "A villa exterior reference combining balcony details with patio seating.",
  ],
  [
    "Contemporary City Terrace",
    "modern-terrace-of-a-building-with-furniture-and-plants-19767295",
    "A city-terrace reference with contemporary outdoor furniture and plants.",
  ],
  [
    "Sunlit Wooden Balcony Seating",
    "modern-patio-seating-in-sunlit-urban-balcony-33857137",
    "A balcony reference with wooden seating and coordinated planting.",
  ],
  [
    "Plant-Filled Urban Balcony",
    "modern-urban-balcony-with-lush-greenery-37635303",
    "An apartment balcony reference combining outdoor furniture with generous planting.",
  ],
]);

export const services: Service[] = [
  {
    slug: "wall-panels",
    name: "PVC, Fluted Panels & Feature Walls",
    shortName: "Wall Panels",
    seoTitle: "PVC & Fluted Wall Panel Designs in Delhi NCR",
    seoDescription:
      "Explore 25 wall-design references. Discuss PVC panels, fluted finishes, feature walls and decorative partitions with Elite Craft Interior in Delhi NCR.",
    heading: "Give your walls a considered finish.",
    introduction:
      "Explore wall treatments for living rooms, bedrooms, reception areas and offices. We help you discuss the look, available products and installation scope for your space.",
    galleryIntroduction:
      "Explore 25 wall, slat, panel and partition references. Choose an appearance you like, then discuss suitable materials and detailing with us.",
    referenceNote:
      "Photos show appearance references, including wood, decorative panels and slatted partitions. They do not confirm PVC composition, acoustic performance or suitability for outdoor use. The selected product and installation details are confirmed in your quotation.",
    scope: [
      "PVC panel finishes and available colour options",
      "Fluted and slatted feature-wall arrangements",
      "TV-wall and bedroom-wall treatments",
      "Decorative room partitions",
      "Reception and office feature walls",
      "Coordinated trims and lighting details where suitable",
    ],
    planning: [
      "Wall width, height and photographs",
      "Condition of the existing surface",
      "Indoor or outdoor location",
      "Nearby switches, sockets and service access",
      "Preferred colour, texture and pattern",
      "Installation area and intended budget",
    ],
    faqs: [
      {
        question: "Are all the panels shown made from PVC?",
        answer:
          "No. These photos are appearance references and include wooden and other decorative treatments. We discuss the actual product, composition and available finish before quoting.",
      },
      {
        question: "Can a fluted finish be used behind a television?",
        answer:
          "We can discuss a coordinated TV-wall treatment. Panel fixing, television support, cable access and nearby electrical points need to be planned together.",
      },
      {
        question: "Can these finishes be used outdoors?",
        answer:
          "Outdoor suitability depends on the selected product and the site. We confirm the proposed material and installation specification for the intended location.",
      },
      {
        question: "How do I get a quotation?",
        answer:
          "Send wall measurements, photographs and the reference code you like on WhatsApp. We will discuss your requirements and confirm the quoted scope.",
      },
    ],
    references: panelReferences,
  },
  {
    slug: "interior-design",
    name: "Home & Office Interiors",
    shortName: "Interiors",
    seoTitle: "Home & Office Interior Services in Delhi NCR",
    seoDescription:
      "Explore interior references and discuss home or office interiors, modular kitchens, custom furniture and wall finishes with Elite Craft Interior in Delhi NCR.",
    heading: "A space designed around your everyday life.",
    introduction:
      "Plan your home or workplace with coordinated furniture, storage, wall finishes and room layouts. Our own factory also accepts individual furniture orders.",
    galleryIntroduction:
      "These 25 references focus on living-space layouts and decorative directions. Explore our furniture collections for bedroom, kitchen, office and storage references.",
    referenceNote:
      "These are stock photographs and design concepts, not completed Elite Craft Interior projects. The quotation confirms the furniture, materials, finishes and work included in your project.",
    scope: [
      "Living-room and bedroom furniture planning",
      "Modular kitchen and wardrobe requirements",
      "Office desks, workstations and storage",
      "Dining and dressing-area furniture",
      "Feature walls and coordinated decorative finishes",
      "Individual furniture purchases or a combined project",
    ],
    planning: [
      "Room dimensions or an available floor plan",
      "Photographs of the existing rooms",
      "Furniture and storage requirements",
      "Preferred designs and finish direction",
      "Items you want to retain",
      "Budget and preferred project schedule",
    ],
    faqs: [
      {
        question: "Can I buy only furniture from your factory?",
        answer:
          "Yes. You can enquire about individual furniture pieces or discuss a coordinated interior project.",
      },
      {
        question: "Can you customise a reference for my room?",
        answer:
          "We discuss the dimensions, layout and finish that suit your room. The final design and material specification are agreed before production.",
      },
      {
        question: "Do you provide services throughout Delhi NCR?",
        answer:
          "Yes. Share your location and requirements so we can discuss site work, delivery and installation.",
      },
      {
        question: "Is the initial consultation free?",
        answer:
          "Yes. Contact us for an initial discussion. Any additional design, site or execution charges are confirmed before you proceed.",
      },
    ],
    references: interiorReferences,
  },
  {
    slug: "exterior-design",
    name: "Exterior Finishes & Outdoor Spaces",
    shortName: "Exteriors",
    seoTitle: "Exterior Design & Finishing Services in Delhi NCR",
    seoDescription:
      "Explore 25 exterior, entrance, balcony and terrace references. Discuss exterior finishes and outdoor spaces with Elite Craft Interior in Delhi NCR.",
    heading: "Make the first impression feel complete.",
    introduction:
      "Discuss exterior finishes, entrance details, balconies and outdoor seating areas. We plan the agreed work around your existing building, site conditions and preferred appearance.",
    galleryIntroduction:
      "Explore 25 facade, entrance, balcony and terrace references. Select the details you like and share your site photographs with us.",
    referenceNote:
      "Photos show overall buildings and outdoor settings as inspiration. They do not represent our completed projects or an offer to reproduce an entire building. Your quotation lists the agreed exterior work, materials and installation scope.",
    scope: [
      "Exterior finish and colour coordination",
      "Entrance and feature-surface detailing",
      "Balcony and terrace appearance planning",
      "Outdoor furniture enquiries",
      "Decorative screens and cladding where suitable",
      "Coordination with the supplied site drawings",
    ],
    planning: [
      "Photographs of the building or outdoor space",
      "Available drawings and measurements",
      "Existing surface and access conditions",
      "Sun, rain and moisture exposure",
      "Preferred finish and reference details",
      "Budget and intended scope of work",
    ],
    faqs: [
      {
        question: "Does a reference include the entire building?",
        answer:
          "The photographs show overall design settings. We discuss your requirements and quote the specific works agreed for your site.",
      },
      {
        question: "Can you help with a balcony or terrace?",
        answer:
          "Share its measurements and photographs. We can discuss finishes, decorative details and suitable furniture within the agreed scope.",
      },
      {
        question: "Can indoor panels be used on an exterior?",
        answer:
          "Suitability depends on the product and exposure. The proposed material and fixing details need to be specified for the actual location.",
      },
      {
        question: "What should I send for an initial discussion?",
        answer:
          "Send your location, site photographs, approximate measurements and the reference code or details you like.",
      },
    ],
    references: exteriorReferences,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function serviceEnquiryLink(
  service: Service,
  reference?: ServiceReference,
): string {
  const message = reference
    ? `Hello Elite Craft Interior, I would like a free consultation about ${service.name}. I like ${reference.name} (${reference.code}). Please help me discuss the design and quotation.`
    : `Hello Elite Craft Interior, I would like a free consultation about ${service.name}. My location is in Delhi NCR. Please help me discuss my requirements.`;

  const url = new URL(consultationLink);
  url.searchParams.set("text", message);

  return url.toString();
}