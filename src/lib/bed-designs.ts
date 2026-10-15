type BedReference = {
  slug: string;
  name: string;
  sourcePath: string;
  image: string;
  description: string;
  planning: string;
};

function bed(
  name: string,
  sourcePath: string,
  description: string,
  namedImage = false,
  extension = "jpeg",
): BedReference {
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
      "Share your mattress size, room measurements and preferred finish. We will discuss the headboard, bed frame and any storage requirement before preparing your quotation. Bedding, lighting and room accessories shown are inspiration.",
  };
}

export const bedReferences: BedReference[] = [
  bed(
    "Warm Luxury Bedroom Bed",
    "bed-in-luxury-bedroom-20771843",
    "A refined bedroom reference combining a comfortable bed, wooden accents and softly draped curtains.",
    true,
  ),
  bed(
    "Chandelier Suite Bed",
    "bed-in-a-luxury-bedroom-18285941",
    "A classic bedroom composition with a statement chandelier and a coordinated bed arrangement.",
    true,
  ),
  bed(
    "Grand Classic Bedroom Bed",
    "bed-in-luxury-bedroom-4682136",
    "An elaborate bedroom reference for customers who prefer a formal, decorative interior.",
  ),
  bed(
    "Soft Light Contemporary Bed",
    "bed-in-luxury-bedroom-19672569",
    "A contemporary bedroom reference with gentle lighting and a calm, coordinated bed setting.",
    true,
  ),
  bed(
    "Upholstered Bed and Bench",
    "bedroom-interior-with-bed-near-mirror-7535034",
    "An upholstered headboard reference with a matching bedroom composition and a bench at the foot of the bed.",
  ),
  bed(
    "Pastel Wooden Headboard Bed",
    "bed-with-wooden-headboard-7587481",
    "A wooden headboard reference paired with a soft pastel bedroom palette.",
  ),
  bed(
    "Statement Luxury Suite Bed",
    "luxury-bedroom-in-house-20439293",
    "A spacious bedroom reference with a prominent bed and coordinated decorative lighting.",
    true,
  ),
  bed(
    "Crystal Chandelier Double Bed",
    "luxury-bedroom-with-double-bed-and-crystal-chandelier-26886812",
    "A double-bed setting with a crystal chandelier and a dressed bedroom interior.",
    true,
  ),
  bed(
    "Artistic Headboard Bed",
    "elegant-bedroom-with-artistic-headboard-decor-35364673",
    "A bedroom reference featuring an expressive headboard treatment as the main visual detail.",
    true,
  ),
  bed(
    "Blue Upholstered Headboard Bed",
    "bed-with-blue-upholstered-headband-7535044",
    "A blue upholstered headboard reference with coordinated bedroom furniture and a foot-end bench.",
  ),
  bed(
    "Elegant Tufted Suite Bed",
    "elegant-modern-bedroom-with-luxurious-bed-36511380",
    "A contemporary bedroom reference featuring a tufted headboard and a composed bed setting.",
    true,
  ),
  bed(
    "Neutral Tufted Headboard Bed",
    "luxurious-modern-bedroom-with-tufted-headboard-33349426",
    "A neutral bedroom reference with a tufted headboard and an understated furniture arrangement.",
    true,
  ),
  bed(
    "Grey Upholstered Bedroom Bed",
    "interior-of-the-bedroom-6920600",
    "A grey upholstered bed reference suited to a coordinated contemporary bedroom.",
  ),
  bed(
    "Blue and Grey Bedroom Bed",
    "modern-bedroom-with-bed-and-windows-6958136",
    "A modern bedroom reference combining a blue bed treatment, grey bedding and natural window light.",
  ),
  bed(
    "Soft Neutral Bed and Bench",
    "interior-of-classy-styled-bedroom-with-soft-bed-and-bench-7534536",
    "A soft neutral bedroom composition with an upholstered bed and a coordinated bench.",
  ),
  bed(
    "Calm Tufted Bedroom Bed",
    "photo-of-a-bedroom-5179598",
    "A contemporary bedroom reference with a tufted headboard and a restrained neutral palette.",
  ),
  bed(
    "Pendant Light Bedroom Bed",
    "bed-in-bedroom-27164976",
    "A plush bedroom reference with pendant lighting and a comfortable bed arrangement.",
    true,
  ),
  bed(
    "Ornate Bedroom Headboard Bed",
    "a-bedroom-with-ornate-designs-on-the-walls-8135103",
    "A decorative bedroom reference with a tufted headboard, an ottoman and detailed wall treatments.",
  ),
  bed(
    "Coordinated Bedroom Furniture Bed",
    "a-bedroom-with-a-bed-dresser-and-mirror-27543245",
    "A contemporary bedroom reference that coordinates the bed with a dresser and mirror.",
    true,
  ),
  bed(
    "Modern Quilted Headboard Bed",
    "bed-in-modern-bedroom-15969798",
    "A modern bedroom reference with a textured headboard and a coordinated bed setting.",
    true,
  ),
  bed(
    "Textured Luxury Headboard Bed",
    "elegant-modern-bedroom-with-luxury-decor-33349390",
    "A bedroom reference combining a textured headboard treatment with soft decorative lighting.",
    true,
  ),
  bed(
    "Warm Modern Suite Bed",
    "modern-luxury-bedroom-interior-design-31737843",
    "A modern bedroom composition with warm lighting and a carefully coordinated furniture setting.",
    true,
  ),
  bed(
    "Plush Pillow Headboard Bed",
    "pillows-on-bed-2471188",
    "A dressed bed reference with generous pillows and a decorative bedroom backdrop.",
  ),
  bed(
    "Elegant Contemporary Suite Bed",
    "luxurious-modern-bedroom-with-elegant-decor-36708054",
    "A contemporary bedroom reference with an elegant bed arrangement and coordinated decorative details.",
    true,
    "png",
  ),
  bed(
    "Wood Wall Soft Bed",
    "interior-of-modern-bedroom-with-soft-bed-and-wooden-walls-6284232",
    "A soft bed reference set against wooden wall surfaces for a warm, minimal bedroom direction.",
  ),
];