type ShelfReference = {
  slug: string;
  name: string;
  sourcePath: string;
  image: string;
  description: string;
  planning: string;
};

function shelf(
  name: string,
  sourcePath: string,
  description: string,
  namedImage = false,
  extension = "jpeg",
): ShelfReference {
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
      "Share your wall measurements and the items you want to store or display. We will discuss shelf depth, spacing, expected loads, materials and fixing requirements before quoting. Books, plants, pottery and decorative accessories shown are inspiration.",
  };
}

export const shelfReferences: ShelfReference[] = [
  shelf(
    "Contemporary Decor Bookshelf",
    "modern-shelves-with-books-collection-and-various-decorative-elements-4857763",
    "An open shelving reference combining books, plants and decorative objects.",
  ),
  shelf(
    "Wooden Home Library Bookshelves",
    "interior-of-room-with-bookshelves-7167083",
    "A home-library reference with wooden bookshelves and an organised book collection.",
  ),
  shelf(
    "Under-Stair Bookshelf Setting",
    "shelves-with-books-8900187",
    "A bookshelf reference arranged beneath a staircase with books and plants.",
  ),
  shelf(
    "White Decorative Display Shelves",
    "shelves-with-decorations-in-room-7393981",
    "A white shelving reference displaying books, vases and framed artwork.",
  ),
  shelf(
    "Warm Wooden Reading Shelves",
    "photo-of-wooden-book-shelves-2898165",
    "A wooden shelving reference within a comfortable reading-room setting.",
  ),
  shelf(
    "Cozy Decor Bookcase",
    "cozy-home-bookshelf-with-modern-decor-37865940",
    "A home bookcase reference with books and small decorative objects.",
    true,
  ),
  shelf(
    "Collected Home Display Bookcase",
    "a-bookcase-in-a-room-9619555",
    "A home shelving reference combining book storage with personal display items.",
  ),
  shelf(
    "Window-Side Library Shelving",
    "shelves-with-books-in-room-16501687",
    "A home-library layout with wooden shelving beside a bright reading area.",
    true,
  ),
  shelf(
    "Decorative Wooden Bookcase",
    "a-bookcase-in-a-room-9686088",
    "A wooden bookcase reference with a mixed arrangement of books and accessories.",
  ),
  shelf(
    "Blue Display Cabinet Setting",
    "blue-wooden-display-cabinet-271682",
    "A living-room display reference featuring coloured cabinetry and coordinated shelving.",
  ),
  shelf(
    "Classic Glass Door Book Cabinet",
    "books-inside-a-wooden-cabinet-with-glass-doors-12701913",
    "A classic wooden book cabinet reference with glass-front doors.",
  ),
  shelf(
    "Wooden Drawer Cabinet Display",
    "a-decorated-wooden-cabinet-with-drawers-7635241",
    "A wooden drawer-cabinet reference styled with books and decorative objects.",
  ),
  shelf(
    "Wood Panel Living Room Bookcase",
    "cozy-living-room-with-wooden-walls-and-bookshelf-39739770",
    "A living-room reference pairing a large bookshelf with warm wooden wall surfaces.",
    true,
  ),
  shelf(
    "Large Bookcase and Ladder Layout",
    "wooden-bookcase-and-ladder-7587290",
    "A large wooden bookcase reference within a coordinated living-room setting.",
  ),
  shelf(
    "Bright Living Room Display Shelf",
    "brown-wooden-shelf-with-books-4440116",
    "A bright living-room reference with books, plants and decorative shelf styling.",
  ),
  shelf(
    "Traditional Home Library Cabinet",
    "cozy-home-library-with-wooden-bookshelves-37628951",
    "A warm home-library reference with wooden book storage and framed photographs.",
    true,
  ),
  shelf(
    "Vintage Lamp Bookcase",
    "a-shelf-with-books-and-a-lamp-on-it-27936134",
    "A traditional shelving reference combining books with a decorative lamp.",
  ),
  shelf(
    "Plant-Lined Wooden Bookcase",
    "a-wooden-bookcase-with-books-and-decorations-17135526",
    "A wooden shelving reference with book storage, houseplants and decorative accents.",
    true,
  ),
  shelf(
    "Living Room Cupboard and Shelves",
    "living-room-interior-with-a-wooden-cupboard-and-books-on-shelves-14512058",
    "A living-room furniture reference combining a wooden cupboard with book shelving.",
    false,
    "png",
  ),
  shelf(
    "Coordinated Living Room Library",
    "trading-floor-with-bookshelves-7587305",
    "A living-room layout showing wooden shelving coordinated with comfortable seating.",
  ),
  shelf(
    "Minimal White Display Bookcase",
    "white-bookcase-with-decorations-near-white-wall-7573936",
    "A white bookcase reference with a restrained arrangement of decorative items.",
  ),
  shelf(
    "Dark Ceramic Display Cabinet",
    "white-table-wares-on-a-bookcase-5673448",
    "A dark shelving reference displaying white ceramic tableware.",
  ),
  shelf(
    "White Cabinet and Glass Showcase",
    "white-wooden-cabinet-with-drawers-7195588",
    "A white drawer-cabinet reference beside a glass display showcase.",
  ),
  shelf(
    "Illuminated Pottery Display Layout",
    "pottery-products-in-a-home-interior-15790995",
    "A room reference featuring illuminated pottery shelving and warm furniture tones.",
    true,
  ),
  shelf(
    "Metal Frame Decorative Shelving",
    "home-decorations-on-the-metal-rack-7343036",
    "A metal-frame shelving reference displaying decorative objects and textiles.",
  ),
];