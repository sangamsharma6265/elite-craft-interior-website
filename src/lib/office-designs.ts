type OfficeReference = {
  slug: string;
  name: string;
  sourcePath: string;
  image: string;
  description: string;
  planning: string;
};

function office(
  name: string,
  sourcePath: string,
  description: string,
  namedImage = false,
): OfficeReference {
  const photoId = sourcePath.split("-").at(-1)!;
  const imageName = sourcePath.replace(/-\d+$/, "");

  return {
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    sourcePath,
    image: namedImage
      ? `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}/free-photo-of-${imageName}.jpeg`
      : `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg`,
    description,
    planning:
      "Share your floor plan, furniture quantities and working requirements. We will discuss dimensions, storage, cable access and suitable finishes before quoting. Chairs, electronics, lighting, branding and decorative items are included only when specified in your quotation.",
  };
}

export const officeReferences: OfficeReference[] = [
  office(
    "Contemporary Open Workspace",
    "modern-luxury-office-interior-design-with-open-workspace-33342702",
    "An open office reference with coordinated furniture and a restrained contemporary interior.",
    true,
  ),
  office(
    "Warm Decor Office Desk",
    "modern-office-interior-with-stylish-decor-38824025",
    "A desk setting with warm lighting and plants for an inviting private workspace.",
    true,
  ),
  office(
    "Minimal Office Desk Setting",
    "modern-office-interior-with-minimalist-design-33827314",
    "A bright desk-and-chair arrangement with a simple contemporary furniture direction.",
    true,
  ),
  office(
    "Wooden Private Office Desk",
    "modern-office-interior-with-wooden-desk-33827325",
    "A wooden desk reference paired with coordinated seating and office decor.",
    true,
  ),
  office(
    "Coordinated Team Workstations",
    "modern-office-interior-with-workstations-33827307",
    "A team workspace reference showing coordinated workstations within a spacious office.",
    true,
  ),
  office(
    "Contemporary Office Furniture Suite",
    "modern-luxury-office-interior-design-33342710",
    "A complete office furniture setting for discussing a coordinated corporate interior.",
    true,
  ),
  office(
    "Computer Desk Workspace Layout",
    "modern-office-interior-8606292",
    "A working office reference with computer desks and revolving chairs.",
  ),
  office(
    "Wood Accent Office Cubicles",
    "modern-office-interior-design-in-open-workspace-33827318",
    "A cubicle workspace reference with wood accents and coordinated desk arrangements.",
    true,
  ),
  office(
    "Glass Room Statement Table",
    "elegant-modern-office-interior-design-with-glass-walls-33342712",
    "A statement table setting inside a glass-walled office with coordinated lighting.",
    true,
  ),
  office(
    "Geometric Private Office Desk",
    "modern-office-interior-with-glass-wall-7195524",
    "A sculptural desk reference paired with an office chair and nearby storage.",
  ),
  office(
    "Minimal Reception Counter",
    "modern-office-reception-desk-design-36631639",
    "A reception-area reference with a clean counter treatment and integrated lighting.",
    true,
  ),
  office(
    "Coordinated Conference Table",
    "modern-office-interior-with-conference-table-and-chairs-33827322",
    "A conference-table reference with coordinated chairs and a composed office interior.",
    true,
  ),
  office(
    "Wood and Glass Reception",
    "modern-reception-area-in-office-interior-design-34823913",
    "A reception reference combining wood and glass elements in a contemporary entrance.",
    true,
  ),
  office(
    "Contemporary Plant-Lined Reception",
    "modern-furniture-in-contemporary-office-19893582",
    "A reception-counter reference surrounded by plants and coordinated office finishes.",
    true,
  ),
  office(
    "Wooden Boardroom Table Setting",
    "interior-of-conference-hall-in-workplace-7534176",
    "A wooden boardroom-table reference with office chairs and overhead lighting.",
  ),
  office(
    "Soft Neutral Meeting Table",
    "conference-room-with-meeting-table-surrounded-by-curtains-6045027",
    "A meeting-table reference framed by soft curtains and comfortable seating.",
  ),
  office(
    "Creative Meeting Room Furniture",
    "office-interior-3782245",
    "A meeting-room reference with expressive decor and contemporary furniture.",
  ),
  office(
    "Minimal Conference Furniture Layout",
    "conference-table-and-chairs-in-an-empty-office-17739892",
    "A restrained conference-room reference with a table and coordinated seating.",
    true,
  ),
  office(
    "Decorative Reception Furniture Concept",
    "modern-office-interior-with-elegant-decor-39833693",
    "A reception-area concept with coordinated furniture and decorative interior details.",
    true,
  ),
  office(
    "Natural Light Meeting Table",
    "modern-office-interior-with-table-7511748",
    "A wooden meeting-table setting with plants, shelving and a bright office backdrop.",
  ),
  office(
    "Spacious Conference Table Layout",
    "interior-of-spacious-conference-room-in-modern-office-7046168",
    "A spacious meeting-room reference with a wooden table and coordinated office chairs.",
  ),
  office(
    "Bright Entrance Reception Counter",
    "modern-office-reception-with-scenic-view-36887759",
    "A bright reception reference for planning a welcoming office entrance.",
    true,
  ),
  office(
    "Minimal Boardroom Furniture Concept",
    "interior-design-of-meeting-room-in-office-20390771",
    "A boardroom concept with a large table, office seating and plant accents.",
    true,
  ),
  office(
    "Blue Accent Discussion Table",
    "conference-room-with-blue-seats-6794924",
    "A compact discussion-area reference with a white table and blue seating accents.",
  ),
  office(
    "Corporate Lobby Reception Layout",
    "modern-office-reception-area-with-logo-36894415",
    "A spacious corporate reception reference with natural light and a coordinated entrance layout.",
    true,
  ),
];