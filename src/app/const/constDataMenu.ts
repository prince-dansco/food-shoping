interface FoodItem {
  title: string;
  price: string;
  image: string;
  description: string;
}

interface FoodCategory {
  category: string;
  items: FoodItem[];
}

export const FoodCategories: FoodCategory[] = [
  {
    category: "All",
    items: [
      {
        title: "Fried Egg",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$9.99",
        image: "/images/image/Fried_Eggs.png",
      },
      {
        title: "Hawaiian Pizza",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$15.99",
        image: "/images/image/Hawaiian_Pizza.png",
      },
      {
        title: "Martinez Cocktail",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$7.25",
        image: "/images/image/Martinez_drink.png",
      },
      {
        title: "Butterscotch Cake",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$20.99",
        image: "/images/image/Butterscotch_Cake.png",
      },
      {
        title: "Mint Lemonade",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$5.89",
        image: "/images/image/Mint_lemonade.png",
      },
      {
        title: "Chocolate Icecream",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$18.05",
        image: "/images/image/Chocolate_Icecream.png",
      },
      {
        title: "Cheese Burger",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$12.55",
        image: "/images/image/Cheese_Burger.png",
      },
      {
        title: "Classic Waffles",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$12.99",
        image: "/images/image/Classic_Waffles.png",
      },
    ],
  },
  {
    category: "Drinks",
    items: [
      {
        title: "Martinez Cocktail",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$7.25",
        image: "/images/image/Martinez_drink.png",
      },
    ],
  },
  {
    category: "Breakfast",
    items: [
      {
        title: "Fried Egg",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$9.99",
        image: "/images/image/Fried_Eggs.png",
      },
      {
        title: "Classic Waffles",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$12.99",
        image: "/images/image/Classic_Waffles.png",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        title: "Chocolate Icecream",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$18.05",
        image: "/images/image/Chocolate_Icecream.png",
      },
      {
        title: "Mint Lemonade",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$5.89",
        image: "/images/image/Mint_lemonade.png",
      },
    ],
  },
  {
    category: "Main Dishes",
    items: [
      {
        title: "Hawaiian Pizza",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$15.99",
        image: "/images/image/Hawaiian_Pizza.png",
      },
      {
        title: "Classic Waffles",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$12.99",
        image: "/images/image/Classic_Waffles.png",
      },
      {
        title: "Cheese Burger",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$12.55",
        image: "/images/image/Cheese_Burger.png",
      },
    ],
  },
];
