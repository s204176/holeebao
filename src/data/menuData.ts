// Menu Data for Holee Bao
// This file contains all menu items, prices, and categories

export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  description?: string;
  price?: number;
  priceOption?: string; // For items like "1 for 30KR, 3 for 70KR"
  category: 'bao' | 'rice' | 'noodle' | 'side' | 'addon' | 'special' | 'drink' | 'hot-drink';
  isVegetarian?: boolean;
  isVegan?: boolean;
  availability?: 'everyday' | 'weekend' | 'monthly';
  cookingMethod?: 'steamed' | 'pan-fried' | 'both';
  image?: string;
}

// RICE DISHES
export const rice: MenuItem[] = [
  {
    id: 'rice-braised-beef',
    name: 'Braised Beef Rice',
    description: 'Slow-cooked beef served with rice',
    price: 109,
    category: 'rice',
    availability: 'everyday',
    image: '1',
  },
  {
    id: 'rice-braised-pork',
    name: 'Braised Pork Rice',
    description: 'Tender braised pork served with rice',
    price: 99,
    category: 'rice',
    availability: 'everyday',
    image: '2',
  },
  {
    id: 'rice-braised-mock-duck',
    name: 'Braised Mock Duck Rice',
    description: 'Plant-based mock duck served with rice',
    price: 99,
    category: 'rice',
    isVegetarian: true,
    isVegan: true,
    availability: 'everyday',
    image: '3',
  },
];

// NOODLE DISHES
export const noodles: MenuItem[] = [
  {
    id: 'noodle-braised-beef',
    name: 'Braised Beef Noodles',
    description: 'Slow-cooked beef served with noodles',
    price: 109,
    category: 'noodle',
    availability: 'everyday',
    image: '4',
  },
  {
    id: 'noodle-braised-pork',
    name: 'Braised Pork Noodles',
    description: 'Tender braised pork served with noodles',
    price: 99,
    category: 'noodle',
    availability: 'everyday',
    image: '5',
  },
  {
    id: 'noodle-braised-mock-duck',
    name: 'Braised Mock Duck Noodles',
    description: 'Plant-based mock duck served with noodles',
    price: 99,
    category: 'noodle',
    isVegetarian: true,
    isVegan: true,
    availability: 'everyday',
    image: '6',
  },
];

// SIDES
export const sides: MenuItem[] = [
  {
    id: 'side-shrimp-toast',
    name: 'Crunchy Shrimp Toast',
    description: 'Crispy toast topped with shrimp (sweet chili included)',
    price: 79,
    category: 'side',
    availability: 'everyday',
    image: '7',
  },
  {
    id: 'side-spicy-dumplings',
    name: 'Spicy Boiled Dumplings',
    description: 'Boiled dumplings with spicy sauce',
    price: 69,
    category: 'side',
    availability: 'everyday',
    image: '8',
  },
];

// ADD-ONS (Tilvalg til retterne - Not for baos)
export const addons: MenuItem[] = [
  {
    id: 'addon-peanuts',
    name: 'Peanuts',
    description: 'Crunchy roasted peanuts',
    price: 5,
    category: 'addon',
    availability: 'everyday',
  },
  {
    id: 'addon-chili-oil',
    name: 'Chili Oil',
    description: 'Spicy aromatic chili oil',
    price: 5,
    category: 'addon',
    availability: 'everyday',
  },
  {
    id: 'addon-extra-meat',
    name: 'Extra Meat',
    description: 'Additional portion of meat',
    price: 15,
    category: 'addon',
    availability: 'everyday',
  },
];

// BAOS - 1 for 30KR / 3 for 70KR (Steamed)
export const baos: MenuItem[] = [
  {
    id: 'bao-mala-beef',
    name: 'Mala Beef Bao',
    description: 'Spicy Sichuan beef with numbing mala spice',
    priceOption: '1 for 30KR / 3 for 70KR',
    category: 'bao',
    cookingMethod: 'steamed',
    availability: 'everyday',
    image: '9',
  },
  {
    id: 'bao-veggie',
    name: 'Veggie Bao',
    description: 'Fresh vegetables with savory sauce',
    priceOption: '1 for 30KR / 3 for 70KR',
    category: 'bao',
    cookingMethod: 'steamed',
    isVegetarian: true,
    isVegan: true,
    availability: 'everyday',
    image: '10',
  },
  {
    id: 'bao-ducking-good',
    name: 'Ducking Good',
    description: 'Tender duck with hoisin and cucumber',
    priceOption: '1 for 30KR / 3 for 70KR',
    category: 'bao',
    cookingMethod: 'steamed',
    availability: 'everyday',
    image: '11',
  },
  {
    id: 'bao-pork',
    name: 'Pork Bao',
    description: 'Savory pork filling',
    priceOption: '1 for 30KR / 3 for 70KR',
    category: 'bao',
    cookingMethod: 'steamed',
    availability: 'everyday',
    image: '12',
  },
  {
    id: 'bao-char-siu',
    name: 'Char Siu Bao',
    description: 'Sweet and savory BBQ pork',
    priceOption: '1 for 30KR / 3 for 70KR',
    category: 'bao',
    cookingMethod: 'steamed',
    availability: 'everyday',
    image: '13',
  },
];

// COFFEE & DRINKS
export const drinks: MenuItem[] = [
  {
    id: 'drink-americano-large',
    name: 'Americano (Large)',
    description: 'Espresso with hot water',
    price: 35,
    category: 'drink',
    availability: 'everyday',
  },
  {
    id: 'drink-americano-small',
    name: 'Americano (Small)',
    description: 'Espresso with hot water',
    price: 28,
    category: 'drink',
    availability: 'everyday',
  },
  {
    id: 'drink-cappuccino',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    price: 42,
    category: 'drink',
    availability: 'everyday',
  },
  {
    id: 'drink-flat-white',
    name: 'Flat White',
    description: 'Espresso with velvety microfoam',
    price: 42,
    category: 'drink',
    availability: 'everyday',
  },
  {
    id: 'drink-latte',
    name: 'Latte',
    description: 'Espresso with steamed milk',
    price: 45,
    category: 'drink',
    availability: 'everyday',
  },
];

// HOT DRINKS
export const hotDrinks: MenuItem[] = [
  {
    id: 'hot-soya-milk',
    name: 'Hot Soya Milk',
    description: 'Homemade hot soya milk',
    price: 35,
    category: 'hot-drink',
    isVegetarian: true,
    isVegan: true,
    availability: 'everyday',
  },
  {
    id: 'hot-jasmine-tea',
    name: 'Jasmine Tea',
    description: 'Fragrant jasmine tea',
    price: 25,
    category: 'hot-drink',
    isVegetarian: true,
    isVegan: true,
    availability: 'everyday',
  },
];

// Combine all menu items
export const allMenuItems: MenuItem[] = [
  ...rice,
  ...noodles,
  ...sides,
  ...baos,
  ...addons,
  ...drinks,
  ...hotDrinks,
];

// Export by category for easy access
export const menuByCategory = {
  rice,
  noodles,
  sides,
  addons,
  baos,
  drinks,
  hotDrinks,
};
