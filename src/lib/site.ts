export const site = {
  name: "Elite Craft Interior",
  url: "https://elite-craft-interior-website.onrender.com",
  description:
    "Custom furniture, modular kitchens, home and office interiors, exterior finishes and wall panels across Delhi NCR.",
};

export function absoluteUrl(path: string = "/"): string {
  return new URL(path, `${site.url}/`).toString();
}