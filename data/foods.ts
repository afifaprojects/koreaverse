export interface Food {
  name: string;
  korean: string;
  category: string;
  description: string;
  spiceLevel: string;
  price: string;
  gradient: string;
}

export const foods: Food[] = [
  {
    name: "Bibimbap",
    korean: "비빔밥",
    category: "Rice Bowl",
    description:
      "A colorful bowl of rice topped with seasoned vegetables, beef, a fried egg, and gochujang chili paste.",
    spiceLevel: "Mild",
    price: "$6–$10",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Kimchi",
    korean: "김치",
    category: "Side Dish",
    description:
      "Korea's iconic fermented vegetable dish, usually napa cabbage seasoned with chili, garlic, and ginger.",
    spiceLevel: "Spicy",
    price: "$2–$5",
    gradient: "from-red-500 to-rose-600",
  },
  {
    name: "Tteokbokki",
    korean: "떡볶이",
    category: "Street Food",
    description:
      "Chewy rice cakes stir-fried in a sweet and spicy gochujang sauce, a beloved Korean street snack.",
    spiceLevel: "Spicy",
    price: "$3–$6",
    gradient: "from-rose-500 to-red-600",
  },
  {
    name: "Bulgogi",
    korean: "불고기",
    category: "BBQ",
    description:
      "Thinly sliced marinated beef grilled to perfection, sweet and savory with garlic and soy sauce.",
    spiceLevel: "Mild",
    price: "$12–$20",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Samgyeopsal",
    korean: "삼겹살",
    category: "BBQ",
    description:
      "Grilled pork belly cooked at the table, wrapped in lettuce with garlic, ssamjang, and grilled sides.",
    spiceLevel: "Medium",
    price: "$15–$25",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "Kimchi Jjigae",
    korean: "김치찌개",
    category: "Stew",
    description:
      "A hearty, spicy stew made with aged kimchi, pork, tofu, and vegetables — a comfort food favorite.",
    spiceLevel: "Spicy",
    price: "$8–$12",
    gradient: "from-red-600 to-orange-600",
  },
  {
    name: "Japchae",
    korean: "잡채",
    category: "Noodles",
    description:
      "Stir-fried glass noodles with vegetables and beef, seasoned with soy sauce and sesame oil.",
    spiceLevel: "Mild",
    price: "$8–$14",
    gradient: "from-lime-500 to-green-600",
  },
  {
    name: "Kimbap",
    korean: "김밥",
    category: "Light Meal",
    description:
      "Korean-style sushi rolls with rice, vegetables, and fillings wrapped in seaweed — perfect for on-the-go.",
    spiceLevel: "Mild",
    price: "$3–$6",
    gradient: "from-emerald-500 to-green-600",
  },
];
