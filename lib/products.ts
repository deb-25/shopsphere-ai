export type Category =
  | "Audio"
  | "Wearables"
  | "Home"
  | "Fashion"
  | "Fitness";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  rating: number;
  reviews: number;
  badge?: "New" | "Bestseller" | "Sale";
  description: string;
  gradient: [string, string];
};

export const CURRENCY = "USD";

export const categories: Category[] = [
  "Audio",
  "Wearables",
  "Home",
  "Fashion",
  "Fitness",
];

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: CURRENCY,
    maximumFractionDigits: 0,
  }).format(value);
}

export const products: Product[] = [
  {
    id: "aurora-headphones",
    name: "Aurora Wireless Headphones",
    category: "Audio",
    price: 189,
    rating: 4.7,
    reviews: 1243,
    badge: "Bestseller",
    description: "Adaptive noise cancelling with 40-hour battery life.",
    gradient: ["#1e1b4b", "#7c3aed"],
  },
  {
    id: "pulse-earbuds",
    name: "Pulse True Wireless Earbuds",
    category: "Audio",
    price: 99,
    rating: 4.5,
    reviews: 864,
    badge: "New",
    description: "Compact earbuds with spatial audio and a pocket-size case.",
    gradient: ["#0f172a", "#0ea5e9"],
  },
  {
    id: "echo-speaker",
    name: "Echo Mini Speaker",
    category: "Audio",
    price: 59,
    rating: 4.3,
    reviews: 512,
    description: "Portable speaker with 360-degree sound and splash resistance.",
    gradient: ["#431407", "#f97316"],
  },
  {
    id: "orbit-watch",
    name: "Orbit Smartwatch",
    category: "Wearables",
    price: 249,
    rating: 4.6,
    reviews: 977,
    badge: "Bestseller",
    description: "Health tracking, GPS, and a bright always-on display.",
    gradient: ["#022c22", "#10b981"],
  },
  {
    id: "halo-band",
    name: "Halo Fitness Band",
    category: "Wearables",
    price: 69,
    rating: 4.2,
    reviews: 1530,
    badge: "Sale",
    description: "Slim band with sleep, heart rate, and step tracking.",
    gradient: ["#3b0764", "#d946ef"],
  },
  {
    id: "lumen-lamp",
    name: "Lumen Smart Lamp",
    category: "Home",
    price: 79,
    rating: 4.4,
    reviews: 408,
    badge: "New",
    description: "Warm-to-cool light with app and voice control.",
    gradient: ["#422006", "#f59e0b"],
  },
  {
    id: "brew-kettle",
    name: "Brew Precision Kettle",
    category: "Home",
    price: 89,
    rating: 4.8,
    reviews: 689,
    description: "Temperature-controlled kettle for tea and pour-over coffee.",
    gradient: ["#1c1917", "#a8a29e"],
  },
  {
    id: "nest-diffuser",
    name: "Nest Aroma Diffuser",
    category: "Home",
    price: 45,
    rating: 4.1,
    reviews: 275,
    badge: "Sale",
    description: "Quiet ultrasonic diffuser with a soft ambient glow.",
    gradient: ["#164e63", "#67e8f9"],
  },
  {
    id: "drift-jacket",
    name: "Drift Water-Resistant Jacket",
    category: "Fashion",
    price: 139,
    rating: 4.5,
    reviews: 331,
    description: "Lightweight shell jacket for commutes and weekend trips.",
    gradient: ["#172554", "#3b82f6"],
  },
  {
    id: "terra-backpack",
    name: "Terra Everyday Backpack",
    category: "Fashion",
    price: 85,
    rating: 4.6,
    reviews: 742,
    badge: "Bestseller",
    description: "Padded laptop sleeve, hidden pockets, and recycled fabric.",
    gradient: ["#365314", "#84cc16"],
  },
  {
    id: "flex-mat",
    name: "Flex Pro Yoga Mat",
    category: "Fitness",
    price: 55,
    rating: 4.4,
    reviews: 598,
    description: "Non-slip, 6 mm cushioning, easy to roll and carry.",
    gradient: ["#500724", "#f43f5e"],
  },
  {
    id: "surge-bottle",
    name: "Surge Insulated Bottle",
    category: "Fitness",
    price: 32,
    rating: 4.7,
    reviews: 1105,
    badge: "New",
    description: "Keeps drinks cold for 24 hours and hot for 12.",
    gradient: ["#0c4a6e", "#38bdf8"],
  },
];