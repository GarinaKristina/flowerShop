export const appVersionData = 'BloomMarket v2.4.0 (Build 892)';

export const placeholders = {
  searchForBouquets: 'Search for bouquets...',
  searchScreen: 'Search for flowers, sellers...',
  confirmPassword: 'Confirm Password',
  password: 'Password',
  email: 'Email',
  firstName: 'Jane',
  lastName: 'Doe',
  selectDate: 'Select date',
  listingTitle: 'Pastel Dream Rose Bouquet',
  description:
    "A stunning arrangement of soft-hued roses, accented with fresh eucalyptus and baby's breath. Perfect for anniversaries, birthdays, or just to brighten someone's day.",
  price: '85.00',
  stockQuantity: '5',
};

export const mainLabels = {
  signInToAccount: 'Sign in to your account',
  emailAddress: 'Email Address',
  password: 'Password',
  doNotYouHaveAccount: "Don't have an account?",
  signUp: 'Sign Up',
  confirmPassword: 'Confirm Password',
  alreadyHaveAccount: 'Already have an account?',
  signInToBloomMarket: 'Sign In to BloomMarket',
  featuredForYou: 'Featured For You',
  viewAll: 'View All',
  firstName: 'First Name',
  lastName: 'Last Name',
  dateOfBirth: 'Date of Birth',
};

export const signUpLabels = {
  title: 'Tell us about you',
  subTitle: 'Join our community of flower enthusiasts today.',
};

export const validationMessages = {
  namePattern: 'Only letters, spaces, hyphens and apostrophes are allowed.',
  invalidEmail: 'Please enter a valid email address.',
  shortPassword: 'Password must be at least 8 characters.',
  passwordsDoNotMatch: 'Passwords do not match.',
  priceSeemsHigh: 'Price seems high for this category',
};

export const screenTitles = {
  cart: 'Cart',
  favorites: 'Favorites',
  settings: 'Settings',
  reviews: 'Reviews',
  listings: 'Listings',
  seller: 'Seller',
};

export const bottomNavigationLabels = {
  home: 'Home',
  search: 'Search',
  favorites: 'Favorites',
  cart: 'Cart',
  profile: 'Profile',
};

export const buyerHomeLabels = {
  nearYou: 'Near You',
  relevance: 'Relevance',
  filters: ['Roses', 'Tulips', 'Mixed', 'Wedding'],
};

export const filterBouquetsLabels = {
  flowerTypeTitle: 'FLOWER TYPE',
  flowerTypes: ['Roses', 'Tulips', 'Lilies', 'Sunflowers', 'Mixed', 'Orchids', 'Peonies'],
  applyFilters: 'Apply Filters',
};

export const freshnessLevelLabels = {
  title: 'FRESHNESS LEVEL',
  levels: ['Farm Fresh', 'Premium', 'Standard'],
};

export const logisticLabels = {
  title: 'LOGISTICS & AVAILABILITY',
  instantAvailability: 'Instant Availability',
  instantAvailabilityDescription: 'Ready for same-day delivery',
  deliveryAvailable: 'Delivery Available',
  deliveryAvailableDescription: 'Standard shipping to your door',
  localPickup: 'Local Pickup',
  localPickupDescription: 'Collect directly from florist',
};

export const primaryColorLabels = {
  primaryTitle: 'PRIMARY COLOR',
  colors: [
    { name: 'Red', hex: '#DF5249' },
    { name: 'Pink', hex: '#E879B9' },
    { name: 'Yellow', hex: '#F2CF4B' },
    { name: 'White', hex: '#F8F9FA' },
    { name: 'Purple', hex: '#A055F0' },
    { name: 'Orange', hex: '#EF9A4F' },
  ],
};

export const buyerProfileLabels = {
  editProfile: 'Edit Profile',
  sellerMode: 'Seller Mode',
  sellerModeDescription: 'Switch to your selling dashboard',
  accountSettingsTitle: 'ACCOUNT SETTINGS',
  supportTitle: 'SUPPORT',
  logOutTitle: 'LOG OUT',
  orders: 'ORDERS',
  favorites: 'FAVORITES',
  wallet: 'WALLET',
  personalInformation: 'Personal Information',
  paymentMethods: 'Payment Methods',
  addresses: 'Addresses',
  notifications: 'Notifications',
  helpCenter: 'Help Center',
  contactUs: 'Contact Us',
  privacyPolicy: 'Privacy Policy',
  termsOfService: 'Terms of Service',
  logout: 'Logout',
};

export const sellerDashboardLabels = {
  revenueToday: 'REVENUE TODAY',
  activeListings: 'ACTIVE LISTINGS',
  ordersToday: 'ORDERS TODAY',
  proSeller: 'Pro Seller',
  weeklyPerformance: 'Weekly Performance',
  weeklyPerformanceSubtitle: '7-day revenue overview',
  recentAlerts: 'Recent Alerts',
  addFlower: 'Add Flower',
  listings: 'Listings',
  reviews: 'Reviews',
  settings: 'Settings',
  weekDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};

export const MAX_FLOWER_PHOTOS = 10;

export const addFlowerLabels = {
  photos: 'PHOTOS',
  photosDescription: `Upload up to ${MAX_FLOWER_PHOTOS} high-quality photos. The first photo is your cover image.`,
  addPhoto: 'ADD PHOTO',
  primary: 'Primary',
  removePhoto: 'Remove photo',
  basicInformation: 'BASIC INFORMATION',
  listingTitle: 'Listing Title',
  description: 'Description',
  price: 'Price ($)',
  stockQuantity: 'Stock Quantity',
  currencySymbol: '$',
};

export const floralDetailsLabels = {
  title: 'FLORAL DETAILS',
  flowerType: 'Flower Type',
  flowerTypeDescription: 'Select primary flower',
  colorPalette: 'Color Palette',
  colorPaletteDescription: 'Main theme color',
  freshness: 'Freshness',
  freshnessDescription: 'Guaranteed duration',
};

export const deliveryLabels = {
  title: 'DELIVERY & PICKUP',
  homeDelivery: 'Home Delivery',
  homeDeliveryDescription: 'Available within 10 miles',
  inStorePickup: 'In-store Pickup',
  inStorePickupDescription: 'Collect from your shop',
};

export const addFlowerFieldLimits = {
  listingTitle: 60,
  description: 500,
  price: 10,
  stockQuantity: 5,
};

export const listingsLabels = {
  myFlowers: 'My Flowers',
  searchPlaceholder: 'Search your inventory...',
  sortByNewest: 'Sort By: Newest',
  statusActive: 'Active',
  statusPaused: 'Paused',
};

export type ListingStatus = 'active' | 'paused';

export type ListingItem = {
  id: string;
  title: string;
  price: string;
  status: ListingStatus;
  views: string;
  favorites: number;
  isEnabled: boolean;
  image: ReturnType<typeof require>;
};

export const userRoleLabelPrefix = "  I'm a ";

export const skeletonLabels = {
  yourContent: 'Your content',
  otherContent: 'Other content',
};

export const demoData = {
  floralDetails: {
    flowerType: 'Roses',
    colorPalette: 'Pastel Pink',
    freshness: '7+ Days',
  },
  revenueAmount: '$1,248.50',
  revenueTrend: '+12% from yesterday',
  weeklyPerformanceTrend: ' 18.4%',
  ordersCount: '12',
  favoritesCount: '8',
  walletAmount: '$45',
  recentAlerts: [
    {
      title: 'New Order #4892',
      time: '2m ago',
      subtitle: 'Customer: James Wilson • "Spring Bloom" x2',
    },
    {
      title: 'New Message',
      time: '45m ago',
      subtitle: 'From Elena: "Do you offer delivery to Midtown?"',
    },
    {
      title: 'Listing Performance',
      time: '1h ago',
      subtitle: '"Red Velvet Roses" reached 100+ views today!',
    },
  ],
};

export const detailsLabels = {
  title: 'Details',
  vatIncluded: 'VAT INCLUDED',
  inStock: 'In Stock',
  delivery: 'Delivery',
  location: 'Location',
  waitTime: 'Wait Time',
  occasion: 'Occasion',
  aboutThisBouquet: 'About this Bouquet',
  theFlorist: 'The Florist',
  contact: 'Contact',
  verifiedReviews: 'Verified Reviews',
  addToCart: 'Add to Cart',
  buyNow: 'Buy Now',
};

export type BouquetReview = {
  id: string;
  author: string;
  postedAgo: string;
  rating: number;
  text: string;
};

export type BouquetDetails = {
  id: string;
  title: string;
  category: string;
  unitPrice: number;
  rating: number;
  reviewsCount: string;
  freshness: string;
  delivery: string;
  location: string;
  waitTime: string;
  occasion: string;
  description: string;
  images: ReturnType<typeof require>[];
  florist: {
    name: string;
    rating: number;
    reviewsCount: string;
    tags: { label: string; tone: 'primary' | 'accent' }[];
  };
  reviews: BouquetReview[];
};

export const bouquetDetailsDemo: BouquetDetails = {
  id: 'midnight-blush-premium-roses',
  title: 'Midnight Blush Premium Roses',
  category: 'Premium Roses',
  unitPrice: 85,
  rating: 4.8,
  reviewsCount: '(245 reviews)',
  freshness: 'Freshness: 7 Days',
  delivery: 'Free Delivery',
  location: '2.4 miles away',
  waitTime: '45 - 60 mins',
  occasion: 'Romance, Birthday',
  description:
    "An exquisite arrangement of 24 deep velvet red roses intertwined with delicate white baby's breath and fresh eucalyptus leaves. Hand-tied with a satin ribbon and delivered in a signature eco-friendly box. Perfect for expressing deep emotions.",
  images: [require('../../assets/roses.jpeg'), require('../../assets/smth.jpeg'), require('../../assets/piones.jpeg')],
  florist: {
    name: "Grace's Floral Studio",
    rating: 4.9,
    reviewsCount: '(1.2k reviews)',
    tags: [
      { label: 'Top Rated', tone: 'primary' },
      { label: 'Fast Shipping', tone: 'accent' },
    ],
  },
  reviews: [
    {
      id: '1',
      author: 'Elena Rodriguez',
      postedAgo: '2 days ago',
      rating: 5,
      text: 'The flowers were even more beautiful in person! They lasted for over a week. Excellent delivery service.',
    },
    {
      id: '2',
      author: 'Marcus Chen',
      postedAgo: '1 week ago',
      rating: 4,
      text: 'Beautiful arrangement. The scent is amazing. Delivery was slightly late but the quality made up for it.',
    },
  ],
};

export const cartLabels = {
  title: 'Shopping Cart',
  clear: 'Clear',
  noteForFlorist: 'Note for the Florist',
  notePlaceholder: 'Special instructions, message for card, etc.',
  noteHint: 'By providing details, you help our florists create the perfect arrangement for your occasion.',
  nextDayDelivery: 'Next Day Delivery',
  nextDayDeliveryHint: 'Order within 2h 45m',
  itemsSubtotal: 'Items Subtotal',
  deliveryCost: 'Delivery Cost',
  grandTotal: 'Grand Total',
  includingVat: 'Including VAT',
  goToCheckout: 'Go to Checkout',
  emptyCart: 'Your cart is empty',
};

export const DELIVERY_COST = 12;

export type CartItem = {
  id: string;
  title: string;
  category: string;
  unitPrice: number;
  quantity: number;
  image: ReturnType<typeof require>;
};

export const searchLabels = {
  recommendedForYou: 'Recommended for You',
};
