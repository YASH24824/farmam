export default function manifest() {
  return {
    name: "FARMAM ORGANIC",
    short_name: "FARMAM",
    description: "Traditional Indian ingredients, from farm to food.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF7E6",
    theme_color: "#073B20",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  };
}
