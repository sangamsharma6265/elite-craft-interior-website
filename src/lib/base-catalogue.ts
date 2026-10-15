export const business = {
  name: "Elite Craft Interior",
  phone: "9213723510",
  secondPhone: "8826971800",
  email: "sangamsharma8285@gmail.com",
};

export function whatsapp(message: string) {
  return `https://wa.me/91${business.phone}?text=${encodeURIComponent(message)}`;
}

export const consultationLink = whatsapp(
  "Hello Elite Craft Interior, I would like a free consultation for my project in Delhi NCR.",
);

function photo(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;
}

export const categories = [
  {
    slug: "living-room",
    name: "Living Room Furniture",
    shortName: "Living Room",
    description:
      "Custom sofas, coffee tables, TV units and furniture planned for comfortable everyday living.",
    image: photo("photo-1600210492486-724fe5c67fb0"),
    imageAlt: "Living room reference photograph with coordinated furniture",
    includes: ["Sofas", "Coffee tables", "TV units", "Console tables"],
  },
  {
    slug: "bedroom",
    name: "Bedroom Furniture",
    shortName: "Bedroom",
    description:
      "Beds, headboards, bedside tables and bedroom furniture made around your room and routine.",
    image: photo("photo-1654064550874-3c14a961730e"),
    imageAlt: "Bedroom reference photograph with a bed and upholstered headboard",
    includes: ["Beds", "Headboards", "Bedside tables", "Dressing tables"],
  },
  {
    slug: "dining",
    name: "Dining Furniture",
    shortName: "Dining",
    description:
      "Dining tables, seating and storage designed for your family, your space and your preferred finish.",
    image: photo("photo-1752254873481-6b6095601f38"),
    imageAlt: "Kitchen and dining room reference photograph",
    includes: ["Dining tables", "Dining chairs", "Sideboards", "Crockery units"],
  },
  {
    slug: "office",
    name: "Office Furniture",
    shortName: "Office",
    description:
      "Custom desks, meeting tables, reception furniture and storage for workplaces across Delhi NCR.",
    image: photo("photo-1572521165329-b197f9ea3da6"),
    imageAlt: "Office reference photograph with tables and chairs",
    includes: ["Office desks", "Workstations", "Meeting tables", "Reception desks"],
  },
  {
    slug: "modular-kitchens",
    name: "Modular Kitchens",
    shortName: "Kitchens",
    description:
      "Made-to-measure kitchen cabinets, storage and layouts planned around how you cook and move.",
    image: photo("photo-1556912172-45b7abe8b7e1"),
    imageAlt: "Kitchen reference photograph used for layout and finish inspiration",
    includes: ["L-shaped kitchens", "Straight kitchens", "Parallel kitchens", "Storage"],
  },
  {
    slug: "storage",
    name: "Wardrobes & Custom Storage",
    shortName: "Storage",
    description:
      "Wardrobes, bookshelves and cabinets with internal arrangements suited to your belongings.",
    image: photo("photo-1616486338812-3dadae4b4ace"),
    imageAlt: "Home interior reference photograph used for storage and finish inspiration",
    includes: ["Wardrobes", "Bookshelves", "Display units", "Custom cabinets"],
  },
] as const;

export type Category = (typeof categories)[number];
export type CategorySlug = Category["slug"];

export type Design = {
  slug: string;
  code: string;
  name: string;
  category: CategorySlug;
  summary: string;
  description: string;
  features: string[];
  choices: string[];
  planning: string;
};

export const designs: Design[] = [
  {
    slug: "tailored-lounge-sofa",
    code: "EC-LV-01",
    name: "Tailored Lounge Sofa",
    category: "living-room",
    summary: "A made-to-order sofa with your preferred seating and upholstery.",
    description:
      "A sofa direction for a relaxed living room. We can plan the seating width, depth, back support and upholstery around your room and how you use it.",
    features: [
      "Discuss two-seat, three-seat or larger arrangements",
      "Choose the arm profile and seating proportions",
      "Coordinate fabric with your existing interior",
    ],
    choices: ["Seating size", "Fabric and colour", "Arm style", "Leg finish"],
    planning:
      "Share the room width, access route and preferred seating capacity. Final construction and fabric options are confirmed in the quotation.",
  },
  {
    slug: "custom-tv-console",
    code: "EC-LV-02",
    name: "Custom TV Console",
    category: "living-room",
    summary: "A coordinated TV unit with practical storage and cable planning.",
    description:
      "Create a TV console suited to your screen, wall and media equipment. Explore open shelves, closed storage and a finish that complements your living room.",
    features: [
      "Plan storage for devices and accessories",
      "Discuss cable access and ventilation",
      "Coordinate console and wall-panel finishes",
    ],
    choices: ["Unit width", "Drawers or shutters", "Finish", "Wall-mounted or floor-standing"],
    planning:
      "Share your TV size, wall measurements and equipment list. Installation requirements will be discussed before the design is finalised.",
  },
  {
    slug: "upholstered-headboard-bed",
    code: "EC-BD-01",
    name: "Upholstered Headboard Bed",
    category: "bedroom",
    summary: "A custom bed direction with a comfortable upholstered headboard.",
    description:
      "Plan a bed around your mattress dimensions and preferred headboard style. The design can be coordinated with bedside furniture and the room palette.",
    features: [
      "Custom headboard proportions",
      "Fabric and colour selection",
      "Optional matching bedside furniture",
    ],
    choices: ["Mattress size", "Headboard height", "Upholstery", "Base finish"],
    planning:
      "Provide the mattress dimensions and bedroom measurements. Confirm the finished bed footprint and room clearance before ordering.",
  },
  {
    slug: "storage-bed",
    code: "EC-BD-02",
    name: "Made-to-Measure Storage Bed",
    category: "bedroom",
    summary: "A bed with storage planned around your room and access needs.",
    description:
      "Explore a bed with integrated storage for bedding and other household items. The opening arrangement and construction are selected after discussing your requirements.",
    features: [
      "Storage compartments planned for your needs",
      "Choice of compatible access arrangements",
      "Coordinated headboard and finish",
    ],
    choices: ["Bed size", "Storage arrangement", "Opening hardware", "Finish"],
    planning:
      "Share your mattress size and storage needs. Hardware, load considerations and access clearances are confirmed during planning.",
  },
  {
    slug: "family-dining-table",
    code: "EC-DN-01",
    name: "Family Dining Table",
    category: "dining",
    summary: "A dining table sized for your family and available floor space.",
    description:
      "Plan a dining table that provides comfortable seating without crowding the room. Explore tabletop shapes, edge details and compatible materials.",
    features: [
      "Seating capacity planned around your household",
      "Table shape suited to the room",
      "Coordinated seating can be discussed",
    ],
    choices: ["Seating capacity", "Top shape", "Material", "Base style"],
    planning:
      "Share the dining area dimensions and preferred number of seats. Chair movement and walking clearance should be considered.",
  },
  {
    slug: "custom-crockery-unit",
    code: "EC-DN-02",
    name: "Custom Crockery Unit",
    category: "dining",
    summary: "Dining storage with your preferred display and closed compartments.",
    description:
      "Create a crockery unit for serving pieces, glassware and dining essentials. Balance visible display areas with practical closed storage.",
    features: [
      "Shelf spacing based on stored items",
      "Open and closed storage combinations",
      "Optional display-lighting discussion",
    ],
    choices: ["Unit dimensions", "Shutter style", "Shelf layout", "Finish"],
    planning:
      "Tell us what you want to store and whether the unit will be freestanding or fitted. Lighting and electrical work are quoted where required.",
  },
  {
    slug: "executive-office-desk",
    code: "EC-OF-01",
    name: "Executive Office Desk",
    category: "office",
    summary: "A custom desk with a work surface and storage suited to your routine.",
    description:
      "Plan an office desk around your working position, equipment and storage needs. Explore a straight desk or an extended return where space allows.",
    features: [
      "Work surface sized for your equipment",
      "Optional drawers and side storage",
      "Cable-access planning",
    ],
    choices: ["Desk dimensions", "Straight or return layout", "Storage", "Surface finish"],
    planning:
      "Share your office dimensions, equipment and preferred layout. Socket positions and cable routes should be reviewed before manufacture.",
  },
  {
    slug: "meeting-table",
    code: "EC-OF-02",
    name: "Custom Meeting Table",
    category: "office",
    summary: "A meeting table planned for team size, room layout and equipment.",
    description:
      "Create a meeting table with seating capacity and proportions suited to your workplace. Discuss finish coordination and access for presentation equipment.",
    features: [
      "Capacity planned for your team",
      "Tabletop shape suited to the room",
      "Optional cable and equipment provisions",
    ],
    choices: ["Seating capacity", "Table shape", "Base construction", "Finish"],
    planning:
      "Provide the meeting-room measurements and equipment requirements. Electrical accessories and installation scope are confirmed separately.",
  },
  {
    slug: "l-shaped-modular-kitchen",
    code: "EC-KT-01",
    name: "L-Shaped Modular Kitchen",
    category: "modular-kitchens",
    summary: "A kitchen direction combining two adjoining cabinet runs.",
    description:
      "Plan an L-shaped kitchen around your available walls, appliances and cooking habits. Cabinet organisation and corner access are discussed during measurement.",
    features: [
      "Separate preparation and storage zones",
      "Corner-storage options",
      "Cabinet planning around appliances",
    ],
    choices: ["Cabinet layout", "Board specification", "Shutter finish", "Hardware"],
    planning:
      "A measured layout is needed before quotation. Countertops, appliances, plumbing and electrical work must be identified in the agreed scope.",
  },
  {
    slug: "straight-modular-kitchen",
    code: "EC-KT-02",
    name: "Straight Modular Kitchen",
    category: "modular-kitchens",
    summary: "A single-wall cabinet layout for compact or open-plan spaces.",
    description:
      "Explore a straight kitchen layout with storage, sink and cooking arrangements along one wall. The design is planned around appliance sizes and daily use.",
    features: [
      "Single-wall layout planning",
      "Base and overhead storage options",
      "Coordinated cabinet finishes",
    ],
    choices: ["Run length", "Upper cabinet arrangement", "Finish", "Accessories"],
    planning:
      "Share wall measurements, openings and appliance details. Final feasibility depends on site conditions and service connections.",
  },
  {
    slug: "custom-fitted-wardrobe",
    code: "EC-ST-01",
    name: "Custom Fitted Wardrobe",
    category: "storage",
    summary: "A wardrobe with internal storage planned around your belongings.",
    description:
      "Design a wardrobe with the hanging space, shelving and drawers you need. Choose a compatible door arrangement after reviewing the room and access space.",
    features: [
      "Internal sections suited to your clothing",
      "Drawer and shelf combinations",
      "Room-coordinated exterior finish",
    ],
    choices: ["Wardrobe dimensions", "Door arrangement", "Internal layout", "Finish"],
    planning:
      "Share wall measurements and storage requirements. Door movement, access and site alignment will be checked before finalisation.",
  },
  {
    slug: "bookshelf-display-unit",
    code: "EC-ST-02",
    name: "Bookshelf & Display Unit",
    category: "storage",
    summary: "Custom shelving for books, objects and everyday storage.",
    description:
      "Plan shelving around your book collection, display pieces and room proportions. Combine open shelves with closed storage where useful.",
    features: [
      "Shelf heights suited to stored items",
      "Open and closed sections",
      "Freestanding or fitted arrangements",
    ],
    choices: ["Overall dimensions", "Shelf spacing", "Closed storage", "Finish"],
    planning:
      "Tell us what the shelves will hold. Material thickness, support and fixing requirements are selected for the agreed use.",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getDesign(slug: string) {
  return designs.find((design) => design.slug === slug);
}