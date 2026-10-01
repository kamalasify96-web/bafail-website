export type BrandSlug =
  | "piccadeli"
  | "swich"
  | "saray"
  | "tunnocks"
  | "burtons"
  | "hazerbaba"
  | "raja"
  | "towt";

export type CategorySlug =
  | "confectionery"
  | "biscuits"
  | "wafers"
  | "sweets"
  | "snacks"
  | "beverages";

export type Product = {
  name: string;
  weight: string;
  images: string[];
};

export const brandMeta: Record<
  BrandSlug,
  { name: string; logo: string; categories: CategorySlug[]; type?: "principal" | "private" }
> = {
  piccadeli: {
    name: "Piccadeli",
    logo: "/brands/piccadeli.png",
    categories: ["confectionery", "wafers", "sweets", "snacks"],
  },
  swich: { name: "Swich", logo: "/brands/swich.png", categories: ["biscuits"] },
  saray: {
    name: "Saray",
    logo: "/brands/saray.png",
    categories: ["biscuits", "confectionery"],
  },
  tunnocks: {
    name: "Tunnock's",
    logo: "/brands/tunnocks.png",
    categories: ["wafers", "biscuits", "confectionery"],
  },
  burtons: { name: "Burton's", logo: "/brands/burtons.png", categories: ["biscuits"] },
  hazerbaba: {
    name: "Hazer Baba",
    logo: "/brands/hazerbaba.png",
    categories: ["sweets"],
  },
  raja: { name: "Raja", logo: "/brands/raja.png", categories: ["snacks"] },
  towt: {
    name: "TOWT",
    logo: "/brands/towt-transparent.png",
    categories: ["beverages"],
    type: "private",
  },
};

const piccadeliSweets = new Set([
  "Moonsters", "Butter Toffee", "Creamkist", "Eclairs Milk",
  "Eclair Chocolate", "Eclairs Chocolate", "Eclair Hazelnut", "Eclair Milk",
  "Pluto Fruit Chews", "Pluto Fruit Stick", "Pluto Mint Chews", "Pluto Mint Stick",
  "Caramelo", "Creamz", "Fruit Drops", "Minto",
]);

const piccadeliWafers = new Set([
  "Hilly Wafer", "Wafer Chocolate", "Wafer Hazelnut", "Wafer Strawberry",
  "Wafer Vanilla", "Oh Wow Chocolate", "Oh Wow Hazelnut", "Wow Chocolate", "Wow Hazelnut",
]);

export function getProductCategory(brand: BrandSlug, product: Product): CategorySlug {
  if (brand === "swich" || brand === "burtons") return "biscuits";
  if (brand === "towt") return "beverages";
  if (brand === "raja") return "snacks";
  if (brand === "hazerbaba") return "sweets";
  if (brand === "saray") return product.name.toLowerCase().includes("biscuit") ? "biscuits" : "confectionery";
  if (brand === "tunnocks") {
    if (product.name === "Snowballs") return "confectionery";
    if (product.name === "Tea Cakes") return "biscuits";
    return "wafers";
  }
  if (piccadeliWafers.has(product.name)) return "wafers";
  if (piccadeliSweets.has(product.name)) return "sweets";
  if (product.name === "Salted Peanuts") return "snacks";
  return "confectionery";
}

export const products: Record<BrandSlug, Product[]> = {
  tunnocks: [
    {
      name: "Caramel Wafer Biscuit",
      weight: "8 x 30g",
      images: [
        "/products/tunnocks/wafer-48pack-wrapper.jpg",
        "/products/tunnocks/wafer-8pack-box.jpg",
      ],
    },
    {
      name: "Caramel Wafer Biscuit",
      weight: "48 x 30g",
      images: [
        "/products/tunnocks/wafer-8pack-wrapper.jpg",
        "/products/tunnocks/wafer-48pack-box.jpg",
      ],
    },
    {
      name: "Caramel Wafer — Giant Bar",
      weight: "36 x 37g",
      images: [
        "/products/tunnocks/giant-bar-wrapper.jpg",
        "/products/tunnocks/giant-bar-box.jpg",
      ],
    },
    {
      name: "Milk Chocolate Wafer Cream",
      weight: "48 x 20g",
      images: [
        "/products/tunnocks/wafer-cream-wrapper.jpg",
        "/products/tunnocks/wafer-cream-box.jpg",
      ],
    },
    {
      name: "Caramel Log",
      weight: "27g",
      images: [
        "/products/tunnocks/log-27g-wrapper.jpg",
        "/products/tunnocks/log-27g-box.jpg",
      ],
    },
    {
      name: "Caramel Log",
      weight: "36 x 40g",
      images: [
        "/products/tunnocks/log-40g-wrapper.jpg",
        "/products/tunnocks/log-40g-box.jpg",
      ],
    },
    {
      name: "Mini Caramel Logs",
      weight: "Roasted Coconut Wafer Bites",
      images: [
        "/products/tunnocks/minilogs-box.jpg",
        "/products/tunnocks/minilogs-piece.jpg",
      ],
    },
    {
      name: "Snowballs",
      weight: "4 x 30g",
      images: [
        "/products/tunnocks/snowballs-wrapper.jpg",
        "/products/tunnocks/snowballs-box.jpg",
      ],
    },
    {
      name: "Tea Cakes",
      weight: "6 x 24g",
      images: [
        "/products/tunnocks/teacakes-wrapper.jpg",
        "/products/tunnocks/teacakes-box.jpg",
      ],
    },
  ],
  piccadeli: [
    { name: "Armada Nutty Nougat", weight: "21g", images: ["/products/piccadeli/Chocolates/ARMADA NUTTY NOUGAT 21G.jpg", "/products/piccadeli/Chocolates/ARMADA NUTTY NOUGAT 21G Display Box.jpg"] },
    { name: "Armada Nutty Caramel", weight: "12 x 22g", images: ["/products/piccadeli/Chocolates/Piccadeli Armada Nutty Caramel 22g Packshot Front.jpg", "/products/piccadeli/Chocolates/Piccadeli Armada Nutty Caramel 12x22g Display Box.jpg"] },
    { name: "Bettoni", weight: "800g Pouch", images: ["/products/piccadeli/Chocolates/PICCADELI BETTONI 800g POUCH VISUAL 1.png"] },
    { name: "Brio", weight: "24 x 20g", images: ["/products/piccadeli/Chocolates/PICCADELI BRIO 20G.jpg", "/products/piccadeli/Chocolates/Piccadeli Brio 24x20g Display Box 3D.jpg"] },
    { name: "Combo", weight: "24 x 17g", images: ["/products/piccadeli/Chocolates/Piccadeli Combo 17g Packshot Front - EGYPT.jpg", "/products/piccadeli/Chocolates/Piccadeli Combo 24x17g Display Box 1.jpg"] },
    { name: "GoNuts", weight: "12 x 21g", images: ["/products/piccadeli/Chocolates/Piccadeli GoNuts 21g.jpg", "/products/piccadeli/Chocolates/Piccadeli GoNuts 12x21g Display Box.jpg"] },
    { name: "Hanko", weight: "21g", images: ["/products/piccadeli/Chocolates/Piccadeli Hanko 21g Packshot.jpg", "/products/piccadeli/Chocolates/PICCADELI HANKO DISPLAY BOX.png"] },
    { name: "Paradise Coconut Chocolate Bar", weight: "18g", images: ["/products/piccadeli/Chocolates/Piccadeli Paradise Coconut Chocolate Bar 18g Packshot - FHNH Front.jpg", "/products/piccadeli/Chocolates/Piccadeli Paradise Coconut Chocolate Bar 18g Display Box.png"] },
    { name: "Ricco 2 Finger", weight: "24 x 12.5g", images: ["/products/piccadeli/Chocolates/Piccadeli Ricco 12.5g 2Finger.jpg", "/products/piccadeli/Chocolates/Piccadeli Ricco 2F 24x12.5g Display Box 3D.jpg"] },
    { name: "Ricco 3 Finger", weight: "24 x 18.5g", images: ["/products/piccadeli/Chocolates/Piccadeli Ricco 3F 18.5g.jpg", "/products/piccadeli/Chocolates/Piccadeli Ricco 2F 24x21.5g Display Box 1.jpg"] },
    { name: "Ricco XL", weight: "12 x 45g", images: ["/products/piccadeli/Chocolates/PICCADELI RICCO XL 45g WRAPPER.jpg", "/products/piccadeli/Chocolates/Piccadeli Ricco XL 12x45g Display Box.jpg"] },
    { name: "Roxta 1 Finger", weight: "48 x 10g", images: ["/products/piccadeli/Chocolates/Piccadeli Roxta 1 Finger Packshot EGYPT.jpg", "/products/piccadeli/Chocolates/Piccadeli Roxta 1F 48x10g Display Box 3D.jpg"] },
    { name: "Roxta 2 Finger", weight: "24 x 20g", images: ["/products/piccadeli/Chocolates/PICCADELI ROXTA 20G PACK SHOT.jpg", "/products/piccadeli/Chocolates/Piccadeli Roxta 2F 24x20g Display Box 1.jpg"] },
    { name: "Rush", weight: "24 x 13g", images: ["/products/piccadeli/Chocolates/Piccadeli Rush 13g Packshot Front.jpg", "/products/piccadeli/Chocolates/Piccadeli Rush 24x13g Display Box 3D.jpg"] },
    { name: "Rush XL", weight: "12 x 25g", images: ["/products/piccadeli/Chocolates/Piccadeli Rush XL 25g Packshot Front.jpg", "/products/piccadeli/Chocolates/Piccadeli RushXL 12x25g Display Box 3D.jpg"] },
    { name: "Silka Almond", weight: "24 x 19g", images: ["/products/piccadeli/Chocolates/Piccadeli Silka - Almond 18G Front.jpg", "/products/piccadeli/Chocolates/Piccadeli Silka Almonds 24x19g Display Box.jpg"] },
    { name: "Silka Crispies", weight: "24 x 19g", images: ["/products/piccadeli/Chocolates/Piccadeli Silka - Crispies 17G Front.jpg", "/products/piccadeli/Chocolates/Piccadeli Silka Crispies 24x19g Display Box.jpg"] },
    { name: "Silka Milk", weight: "24 x 19g", images: ["/products/piccadeli/Chocolates/Piccadeli Silka - Plain (Milk) Front.jpg", "/products/piccadeli/Chocolates/Piccadeli Silka Milk 24x19g Display Box.jpg"] },
    { name: "Silka Peanuts", weight: "24 x 19g", images: ["/products/piccadeli/Chocolates/Piccadeli Silka - Peanuts 18G Front.jpg", "/products/piccadeli/Chocolates/Piccadeli Silka Peanuts 24x19g Display Box.jpg"] },
    { name: "Snack Treats", weight: "Pouch", images: ["/products/piccadeli/Chocolates/PICCADELI SNACK TREATS-POUCH PACK-VISUAL.png"] },
    { name: "Scala Chocolate", weight: "24 x 12.5g", images: ["/products/piccadeli/Chocolates/SCALA 12.5g.png", "/products/piccadeli/Chocolates/SCALA CHOCOLATE 24x12.5g BOX.png"] },
    { name: "Moonsters", weight: "24 x 15g", images: ["/products/piccadeli/Confectionary/PICCADELI MOONSTERS 15g WRAPPER VISUAL2 LR.png", "/products/piccadeli/Confectionary/MOONSTERS 24x15g DISPLAY BOX VISUAL.png"] },
    { name: "Butter Toffee", weight: "900g Bag", images: ["/products/piccadeli/Confectionary/PICCADELI BUTTER TOFFEE 900g BAG.png"] },
    { name: "Creamkist", weight: "24 x 24g", images: ["/products/piccadeli/Confectionary/PICCADELI-CREAMKIST-24G-WRAPPER-VISUAL.png", "/products/piccadeli/Confectionary/PICCADELI CREAMKIST 24x24G SHIPPER VISUAL.png"] },
    { name: "Eclairs Milk", weight: "900g Bag", images: ["/products/piccadeli/Confectionary/PICCADELI ECLAIRS 900g BAG MILK.png"] },
    { name: "Eclair Chocolate", weight: "600g", images: ["/products/piccadeli/Confectionary/Piccadeli Eclair Chocolate 600g.png"] },
    { name: "Eclairs Chocolate", weight: "1kg", images: ["/products/piccadeli/Confectionary/Piccadeli Eclairs Chocolate Bag 1kg.png"] },
    { name: "Eclair Hazelnut", weight: "600g", images: ["/products/piccadeli/Confectionary/Piccadeli Eclair Hazelnut 600g.png"] },
    { name: "Eclair Hazelnut", weight: "1kg", images: ["/products/piccadeli/Confectionary/Piccadeli Eclair Hazelnut 1 kg.png"] },
    { name: "Eclair Milk", weight: "600g", images: ["/products/piccadeli/Confectionary/Piccadeli Eclair Milk 600g.png"] },
    { name: "Pluto Fruit Chews", weight: "24 x 15g", images: ["/products/piccadeli/Confectionary/PICCADELI-PLUTO-FRUIT-CHEWS-15G-WRAPPER-PACK-VISUAL.png", "/products/piccadeli/Confectionary/PICCADELI-PLUTO-FRUIT-CHEWS-24x15G-SHIPPER-PACK-VISUAL.png"] },
    { name: "Pluto Fruit Stick", weight: "16g", images: ["/products/piccadeli/Confectionary/PICCADELI PLUTO STICK 16g fruit.png"] },
    { name: "Pluto Mint Chews", weight: "24 x 15g", images: ["/products/piccadeli/Confectionary/PICCADELI-PLUTO-MINT-CHEWS-15G-WRAPPER-PACK-VISUAL.png", "/products/piccadeli/Confectionary/PICCADELI-PLUTO-MINT-CHEWS-24x15G-SHIPPER-PACK-VISUAL.png"] },
    { name: "Pluto Mint Stick", weight: "16g", images: ["/products/piccadeli/Confectionary/PICCADELI-PLUTO-MINT-CHEWS-16G-STICK-PACK-VISUAL.png"] },
    { name: "Salted Peanuts", weight: "13g", images: ["/products/piccadeli/Confectionary/Piccadeli Salted Peanuts_13g PACK VISUAL.png", "/products/piccadeli/Confectionary/PICCADELI SALTED PEANUT DISPLAY BOX.png"] },
    { name: "Caramelo", weight: "Pouch", images: ["/products/piccadeli/Confectionary/Piccadeli Caramelo Pouch.png"] },
    { name: "Creamz", weight: "Pouch", images: ["/products/piccadeli/Confectionary/Piccadeli Creamz Pouch.png"] },
    { name: "Fruit Drops", weight: "650g", images: ["/products/piccadeli/Confectionary/Piccadeli Fruit Drops 650g.jpg"] },
    { name: "Minto", weight: "Pouch", images: ["/products/piccadeli/Confectionary/Piccadeli Minto Pouch.png"] },
    { name: "Hilly Wafer", weight: "24 x 12g", images: ["/products/piccadeli/WAFER/Piccadeli Hilly 12g 35� EXTRA.png", "/products/piccadeli/WAFER/Hilly 24x12g Display Box.png"] },
    { name: "Wafer Chocolate", weight: "65g", images: ["/products/piccadeli/WAFER/PICCADELI CHOCOLATE PACK 65G 2022.jpg"] },
    { name: "Wafer Hazelnut", weight: "65g", images: ["/products/piccadeli/WAFER/PICCADELI HAZELNUT PACK 65G 2022.jpg"] },
    { name: "Wafer Strawberry", weight: "65g", images: ["/products/piccadeli/WAFER/PICCADELI STRAWBERRY PACK 65G 2022.jpg"] },
    { name: "Wafer Vanilla", weight: "65g", images: ["/products/piccadeli/WAFER/PICCADELI VANILLA PACK 65G 2022.jpg"] },
    { name: "Oh Wow Chocolate", weight: "12 x 40g", images: ["/products/piccadeli/WAFER/PICCADELI OH WOW CHOCOLATE 40G-PACK SHOT.png", "/products/piccadeli/WAFER/Piccadeli Oh Wow Chocolate 12x40g Display Box 3D.jpg"] },
    { name: "Oh Wow Hazelnut", weight: "12 x 40g", images: ["/products/piccadeli/WAFER/PICCADELI OH WOW HAZELNUT 40G-PACK SHOT.png", "/products/piccadeli/WAFER/Piccadeli Oh Wow Hazelnut 12x40g Display Box 3D.jpg"] },
    { name: "Wow Chocolate", weight: "20g", images: ["/products/piccadeli/WAFER/PICCADELI WOW CHOCOLATE 20G PACKSHOT.png", "/products/piccadeli/WAFER/Piccadeli Wow Chocolate Display Box 1.png"] },
    { name: "Wow Hazelnut", weight: "20g", images: ["/products/piccadeli/WAFER/PICCCADELI WOW HAZELNUT 20G PACKSHOT.png", "/products/piccadeli/WAFER/Piccadeli Wow Hazelnut Display Box.jpg"] },
  ],
  swich: [
    {
      name: "Bottom Coated Digestive",
      weight: "24 x 17g",
      images: [
        "/products/swich/SWICH BOTTOM COATED DIGESTIVE 17G WRAPPER.png",
        "/products/swich/SWICH BOTTOM COATED DIGESTIVE 24X17G DISPLAY BOX.png",
      ],
    },
    {
      name: "Chippy",
      weight: "24 x 20g",
      images: [
        "/products/swich/SWICH CHIPPY 20G WRAPPER.png",
        "/products/swich/SWICH CHIPPY 24X20G DISPLAY BOX.png",
      ],
    },
    {
      name: "Kooky Chocolate Chip Cookies",
      weight: "24 x 20g",
      images: [
        "/products/swich/SWICH KOOKY 20G WRAPPER.png",
        "/products/swich/SWICH KOOKY 20G 24x20G DISPLAY BOX.png",
      ],
    },
    {
      name: "Tag Chocolate Coated Cream Sandwich Biscuit",
      weight: "24 x 18g",
      images: [
        "/products/swich/SWICH TAG 18g Wrapper.png",
        "/products/swich/Swich TAG 24x18g Dispaly Box.png",
      ],
    },
    {
      name: "Tag Chocolate Coated Cream Sandwich Biscuit",
      weight: "24 x 23g",
      images: [
        "/products/swich/SWICH TAG 23G WRAPPER.png",
        "/products/swich/SWICH TAG 24x23G DISPLAY BOX.png",
      ],
    },
    {
      name: "Bronko",
      weight: "24 x 18g",
      images: [
        "/products/swich/Swich Bronko 18g Wrapper.png",
        "/products/swich/Swich Bronko 24x18g Display Box.png",
      ],
    },
    {
      name: "Oh Boy Double Chocolate",
      weight: "24 x 23g · 4 Biscuits",
      images: [
        "/products/swich/Swich OH Boy Double Chocolate 4 Biscuit 23g Wrapper.png",
        "/products/swich/Swich OH Boy Double Chocolate 24x23g_4Bis Display Box.png",
      ],
    },
    {
      name: "Oh Boy Triple Chocolate",
      weight: "24 x 23g · 4 Biscuits",
      images: [
        "/products/swich/Swich Oh Boy Tripple Chocolate 4 Biscuit 23g Wrapper.png",
        "/products/swich/Swich OH Boy Tripple Chocolate 24x23g_4Bis Display Box.png",
      ],
    },
    {
      name: "Oh Boy Cookies & Cream",
      weight: "24 x 33g",
      images: [
        "/products/swich/Swich Oh Boy Cookies & Cream 33g Wrapper.png",
        "/products/swich/Swich Oh Boy Cookies & Cream 24x33g Display Box.png",
      ],
    },
  ],
  saray: [],
  burtons: [],
  hazerbaba: [],
  raja: [],
  towt: [
    {
      name: "TOWT Crystal",
      weight: "725ml",
      images: ["/private-label/towt-crystal.png"],
    },
  ],
};
