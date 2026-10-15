import {
  categories as originalCategories,
  type Design as OriginalDesign,
  type CategorySlug as OriginalCategorySlug,
} from "./base-catalogue";

import { diningReferences } from "./dining-designs";
import { sofaReferences } from "./sofa-designs";
import { tvReferences } from "./tv-designs";
import { coffeeReferences } from "./coffee-designs";
import { bedReferences } from "./bed-designs";
import { wardrobeReferences } from "./wardrobe-designs";
import { officeReferences } from "./office-designs";
import { kitchenReferences } from "./kitchen-designs";
import { shelfReferences } from "./shelf-designs";
import { dressingReferences } from "./dressing-designs";

export {
  business,
  consultationLink,
  whatsapp,
} from "./base-catalogue";

export type CategorySlug =
  | OriginalCategorySlug
  | "tv-units"
  | "coffee-tables"
  | "wardrobes"
  | "dressing-tables";

export type Category = {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  image: string;
  imageAlt: string;
  includes: readonly string[];
};

export type Design = Omit<OriginalDesign, "category"> & {
  category: CategorySlug;
  image?: string;
  imageAlt?: string;
  sourceUrl?: string;
};

function referenceImage(image: string): string {
  const separator = image.includes("?") ? "&" : "?";
  return `${image}${separator}auto=compress&cs=tinysrgb&w=1400`;
}

function diningImage(photoId: number): string {
  const extension = photoId === 3229076 ? "png" : "jpeg";

  return referenceImage(
    `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.${extension}`,
  );
}

// Use the shared Category type before checking category slugs.
// This prevents the fallback category from being narrowed to never.
const baseCategories: readonly Category[] = originalCategories;

const existingCategories: Category[] = baseCategories.map(
  (category): Category => {
    if (category.slug === "living-room") {
      return {
        ...category,
        name: "Sofa Designs",
        shortName: "Sofas",
        description:
          "Explore 25 sofa references. Discuss your seating layout, upholstery and dimensions with our own furniture factory in Delhi NCR.",
        image: referenceImage(sofaReferences[0].image),
        imageAlt: "Contemporary sofa reference for custom furniture",
        includes: [
          "Contemporary sofas",
          "Sectional references",
          "Neutral upholstery",
          "Colour and fabric choices",
        ],
      };
    }

    if (category.slug === "bedroom") {
      return {
        ...category,
        name: "Bed & Headboard Designs",
        shortName: "Beds",
        description:
          "Explore 25 bed and headboard references. Order a custom bed after discussing mattress size, upholstery, finish and storage requirements.",
        image: referenceImage(bedReferences[11].image),
        imageAlt: "Neutral bedroom with a tufted headboard",
        includes: [
          "Upholstered headboards",
          "Wooden headboard references",
          "Classic bedroom styles",
          "Contemporary bedroom styles",
        ],
      };
    }

    if (category.slug === "dining") {
      return {
        ...category,
        name: "Dining Table Designs",
        shortName: "Dining Tables",
        description:
          "Explore 25 dining references and discuss a custom table, seating arrangement and finish for your home in Delhi NCR.",
        image: diningImage(5677020),
        imageAlt: "Dining table reference for a coordinated dining room",
        includes: [
          "Round dining references",
          "Wooden dining tables",
          "Glass table references",
          "Contemporary dining settings",
        ],
      };
    }

    if (category.slug === "office") {
      return {
        ...category,
        name: "Office Furniture Designs",
        shortName: "Office",
        description:
          "Explore 25 office furniture references, including desks, team workstations, meeting tables and reception counters. Discuss custom furniture for your workplace in Delhi NCR.",
        image: referenceImage(officeReferences[3].image),
        imageAlt: "Wooden office desk with coordinated seating",
        includes: [
          "Private office desks",
          "Team workstations",
          "Meeting and conference tables",
          "Reception counter references",
        ],
      };
    }

    if (category.slug === "modular-kitchens") {
      return {
        ...category,
        name: "Modular Kitchen Designs",
        shortName: "Kitchens",
        description:
          "Explore 25 kitchen references in wood, white, dark, blue and green styles. Plan custom cabinets and storage with our own factory in Delhi NCR.",
        image: referenceImage(kitchenReferences[0].image),
        imageAlt:
          "Contemporary kitchen with wood cabinets and a grey island",
        includes: [
          "Wood cabinet references",
          "White and dark kitchens",
          "Blue and green cabinet styles",
          "Island and compact layouts",
        ],
      };
    }

    if (category.slug === "storage") {
      return {
        ...category,
        name: "Bookshelf & Display Unit Designs",
        shortName: "Bookshelves",
        description:
          "Explore 25 bookshelf, display-unit and cabinet references. Discuss custom shelving for your home, office or reading area in Delhi NCR.",
        image: referenceImage(shelfReferences[1].image),
        imageAlt: "Wooden shelving within a contemporary home library",
        includes: [
          "Wooden bookcases",
          "Glass-front display cabinets",
          "Open decorative shelving",
          "Home-library layouts",
        ],
      };
    }

    return { ...category };
  },
);

const tvCategory: Category = {
  slug: "tv-units",
  name: "TV Unit & Media Wall Designs",
  shortName: "TV Units",
  description:
    "Explore 25 TV-unit and media-wall references. Order custom cabinets, consoles and coordinated wall furniture from our own factory in Delhi NCR.",
  image: referenceImage(tvReferences[13].image),
  imageAlt: "Media console reference beneath a wall-mounted television",
  includes: [
    "TV cabinets",
    "Media consoles",
    "TV-wall references",
    "Bedroom TV storage",
  ],
};

const coffeeCategory: Category = {
  slug: "coffee-tables",
  name: "Coffee Table & Centre Table Designs",
  shortName: "Coffee Tables",
  description:
    "Explore 25 coffee-table references, including wood, glass, metallic and marble-look directions. Discuss a custom centre table for your living room.",
  image: referenceImage(coffeeReferences[2].image),
  imageAlt: "Coffee table reference in a coordinated living-room setting",
  includes: [
    "Marble-look references",
    "Glass coffee tables",
    "Metallic accents",
    "Wood coffee tables",
  ],
};

const wardrobeCategory: Category = {
  slug: "wardrobes",
  name: "Wardrobe & Walk-In Designs",
  shortName: "Wardrobes",
  description:
    "Explore 25 wardrobe and walk-in storage references. Plan custom hanging space, shelves, drawers and door finishes with our own factory in Delhi NCR.",
  image: referenceImage(wardrobeReferences[2].image),
  imageAlt:
    "Contemporary walk-in wardrobe concept with coordinated lighting",
  includes: [
    "Glass-front wardrobes",
    "Mirrored wardrobe references",
    "Walk-in closets",
    "Custom storage layouts",
  ],
};

const dressingCategory: Category = {
  slug: "dressing-tables",
  name: "Dressing Table & Vanity Designs",
  shortName: "Dressing Tables",
  description:
    "Explore 25 dressing-table and dressing-area references. Discuss custom drawers, mirror placement and finishes with our furniture factory in Delhi NCR.",
  image: referenceImage(dressingReferences[9].image),
  imageAlt: "Beige dressing table with a mirror and coordinated lighting",
  includes: [
    "Contemporary dressing tables",
    "Classic wooden vanities",
    "Mirror and drawer arrangements",
    "Bedroom dressing-area layouts",
  ],
};

export const categories: Category[] = existingCategories.flatMap(
  (category): Category[] => {
    if (category.slug === "living-room") {
      return [category, tvCategory, coffeeCategory];
    }

    if (category.slug === "bedroom") {
      return [category, wardrobeCategory, dressingCategory];
    }

    return [category];
  },
);

type ImageReference = {
  slug: string;
  name: string;
  sourcePath: string;
  image: string;
  description: string;
  planning: string;
};

type CollectionOptions = {
  category: CategorySlug;
  prefix: string;
  description: string;
  features: string[];
  choices: string[];
};

function createCollection(
  references: readonly ImageReference[],
  options: CollectionOptions,
): Design[] {
  return references.map((reference, index) => ({
    slug: reference.slug,
    code: `${options.prefix}-${String(index + 1).padStart(2, "0")}`,
    name: reference.name,
    category: options.category,
    summary: reference.description,
    description: `${reference.description} ${options.description}`,
    features: [...options.features],
    choices: [...options.choices],
    planning: reference.planning,
    image: referenceImage(reference.image),
    imageAlt: `${reference.name}: ${reference.description}`,
    sourceUrl: `https://www.pexels.com/photo/${reference.sourcePath}/`,
  }));
}

const sofaDesigns = createCollection(sofaReferences, {
  category: "living-room",
  prefix: "EC-SF",
  description:
    "Elite Craft Interior accepts custom sofa enquiries through our own factory. Dimensions, upholstery, construction and delivery are confirmed in your quotation.",
  features: [
    "Seating arrangement planned around your room",
    "Available upholstery and colour options discussed",
    "Seat comfort and construction agreed before production",
  ],
  choices: [
    "Overall width, depth and height",
    "Seating capacity and arrangement",
    "Available fabric and colour",
    "Cushion and backrest preferences",
    "Arm and leg design",
  ],
});

const tvDesigns = createCollection(tvReferences, {
  category: "tv-units",
  prefix: "EC-TV",
  description:
    "Discuss a custom TV cabinet, console or coordinated media-wall arrangement with our factory. Final dimensions, materials and installation scope are confirmed before production.",
  features: [
    "Cabinet dimensions coordinated with your television",
    "Storage layout planned for your equipment",
    "Cable access and installation requirements discussed",
  ],
  choices: [
    "Unit width, depth and height",
    "Shelf, drawer and cabinet arrangement",
    "Board and surface finish",
    "Freestanding or fitted installation",
    "Wall panels and lighting where suitable",
  ],
});

const coffeeDesigns = createCollection(coffeeReferences, {
  category: "coffee-tables",
  prefix: "EC-CT",
  description:
    "Discuss a custom coffee table or coordinated table set with Elite Craft Interior. The quotation confirms materials, construction and delivery. Decorative accessories shown are inspiration.",
  features: [
    "Table proportions planned around your seating",
    "Surface and base options discussed",
    "Construction and delivery confirmed before production",
  ],
  choices: [
    "Top dimensions and shape",
    "Table height",
    "Available top material",
    "Base design",
    "Edge detail and colour",
    "Single table or coordinated set where feasible",
  ],
});

const bedDesigns = createCollection(bedReferences, {
  category: "bedroom",
  prefix: "EC-BD",
  description:
    "Elite Craft Interior accepts custom bed and headboard enquiries through our own factory in Delhi NCR. Final mattress compatibility, materials, upholstery and any storage mechanism are confirmed in your quotation.",
  features: [
    "Bed dimensions planned around your mattress and room",
    "Headboard proportions and finish discussed",
    "Storage requirements and hardware assessed before production",
  ],
  choices: [
    "Mattress size and bed-frame dimensions",
    "Headboard width and height",
    "Available upholstery or surface finish",
    "Bed height and leg treatment",
    "Storage layout and mechanism where suitable",
    "Matching bedside furniture quoted separately",
  ],
});

const wardrobeDesigns = createCollection(wardrobeReferences, {
  category: "wardrobes",
  prefix: "EC-WR",
  description:
    "Plan a custom wardrobe or walk-in storage arrangement with our own factory. Room measurements, materials, door systems, hardware and installation are confirmed before production. Some references are design visualisations.",
  features: [
    "Storage layout planned around your clothing and accessories",
    "Door clearance and room circulation considered",
    "Materials, hardware and installation agreed in the quotation",
  ],
  choices: [
    "Overall width, depth and height",
    "Hanging space and shelf arrangement",
    "Drawer quantities and internal compartments",
    "Open storage or suitable door system",
    "Available board and surface finish",
    "Glass, mirror and lighting options where suitable",
  ],
});

const dressingDesigns = createCollection(dressingReferences, {
  category: "dressing-tables",
  prefix: "EC-DR",
  description:
    "Buy a custom dressing table or discuss a coordinated dressing area with Elite Craft Interior. Table dimensions, drawer layout, mirror details and materials are confirmed before production. Some references show complete rooms or design concepts.",
  features: [
    "Table proportions planned around your available space",
    "Drawer storage and seated legroom discussed",
    "Mirror position and fixing requirements considered",
  ],
  choices: [
    "Table width, depth and height",
    "Drawer quantities and internal layout",
    "Available board, wood or surface finish",
    "Mirror dimensions and shape",
    "Freestanding or fitted arrangement",
    "Matching stool or chair quoted separately",
    "Lighting options where suitable",
  ],
});

const officeDesigns = createCollection(officeReferences, {
  category: "office",
  prefix: "EC-OF",
  description:
    "Buy custom office furniture from Elite Craft Interior or discuss a coordinated workplace layout. Our factory can quote desks, workstations, meeting tables, reception counters and storage. Some references are design concepts; pictured accessories and third-party branding are inspiration.",
  features: [
    "Furniture dimensions planned for your workplace",
    "Storage and cable-access requirements discussed",
    "Furniture quantities, finish and installation confirmed before production",
  ],
  choices: [
    "Desk or table dimensions",
    "Number of workstations or meeting seats",
    "Drawer and cabinet arrangement",
    "Available board and surface finish",
    "Cable openings and equipment clearances",
    "Reception storage and counter proportions",
    "Chairs and matching furniture quoted separately",
  ],
});

const kitchenDesigns = createCollection(kitchenReferences, {
  category: "modular-kitchens",
  prefix: "EC-KT",
  description:
    "Discuss a factory-made modular kitchen with Elite Craft Interior in Delhi NCR. The final layout follows your room measurements and service points. Cabinet materials, shutter finish, hardware, worktops and installation scope are confirmed in your quotation. Some references are design concepts.",
  features: [
    "Cabinet layout planned around your kitchen measurements",
    "Storage, appliance access and opening clearances considered",
    "Materials, hardware and installation scope agreed before production",
  ],
  choices: [
    "Suitable straight, L-shaped, parallel or other layout",
    "Base and wall cabinet dimensions",
    "Available shutter material, colour and finish",
    "Drawer, shelf and corner-storage arrangement",
    "Handles and suitable opening hardware",
    "Appliance spaces and service access",
    "Countertop and backsplash specification",
    "Island or breakfast counter where space permits",
  ],
});

const shelfDesigns = createCollection(shelfReferences, {
  category: "storage",
  prefix: "EC-ST",
  description:
    "Buy custom bookshelves, display units or storage cabinets from Elite Craft Interior. Shelf dimensions, expected loads, construction and installation are agreed before production. Room photographs are references for furniture layout and styling.",
  features: [
    "Shelf spacing planned around your stored items",
    "Materials and support requirements discussed",
    "Fixing and installation scope confirmed in the quotation",
  ],
  choices: [
    "Overall width, depth and height",
    "Shelf quantities and compartment spacing",
    "Open shelving or enclosed cabinet sections",
    "Available board, wood or metal construction",
    "Surface colour and finish",
    "Glass-door options where suitable",
    "Lighting and cable access where required",
  ],
});

const diningDesigns: Design[] = diningReferences.map(
  (reference, index) => ({
    slug: reference.slug,
    code: `EC-DT-${String(index + 1).padStart(2, "0")}`,
    name: reference.name,
    category: "dining",
    summary: reference.description,
    description:
      `${reference.description} Discuss a custom dining table and coordinated seating with Elite Craft Interior. Final materials, dimensions and furniture quantities are confirmed in your quotation.`,
    features: [
      "Table proportions planned around your dining area",
      "Seating layout and clearance discussed",
      "Materials and construction confirmed before production",
    ],
    choices: [
      "Table dimensions and shape",
      "Seating capacity",
      "Available top and base materials",
      "Finish and colour",
      "Matching chairs quoted as required",
    ],
    planning:
      "Share your dining-area measurements and preferred seating capacity. The photograph is a reference, not a material specification. We will confirm the table, chair quantities, finish and delivery scope before production.",
    image: diningImage(reference.photoId),
    imageAlt: `${reference.name}: ${reference.description}`,
    sourceUrl: `https://www.pexels.com/photo/${reference.sourcePath}/`,
  }),
);

export const designs: Design[] = [
  ...sofaDesigns,
  ...tvDesigns,
  ...coffeeDesigns,
  ...bedDesigns,
  ...wardrobeDesigns,
  ...dressingDesigns,
  ...diningDesigns,
  ...officeDesigns,
  ...kitchenDesigns,
  ...shelfDesigns,
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getDesign(slug: string): Design | undefined {
  return designs.find((design) => design.slug === slug);
}

export function getDesignsByCategory(category: string): Design[] {
  return designs.filter((design) => design.category === category);
}