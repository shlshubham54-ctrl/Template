/* ============================================================
   ROMS PIZZA — Khekra
   ============================================================ */
window.SHOP = {
  slug: "roms-pizza-khekra",
  name: "Roms Pizza",
  tagline: "Happiness is a slice of pizza",
  logo: "images/logo.svg",
  cover: "",                          // minimal navy brand gradient
  coverLogo: "images/logo-full.svg",

  theme: {
    accent: "#214486",                // Roms navy blue (box + menu card)
    accent2: "#F8D242",               // Roms pizza yellow
    mode: "light"                     // brand colours read best on light
  },

  creator: {
    name: "sdhiryan",
    phone: "918533053912",
    tagline: "Want a page like this? Tap to chat",
    message: "Hi sdhiryan! I saw your NFC page at {shop} and I'd like one for my shop."
  },

  actions: [
    { type: "instagram", label: "Watch us on Instagram" },   // TODO: swap for the Khekra outlet's own profile link
    { type: "review",   label: "Rate us on Google" },
    { type: "menu",     label: "View Menu" },
    { type: "rewards",  label: "Start earning rewards" },
    { type: "feedback", label: "Leave Anonymous Feedback" },
    { type: "game",     label: "Play Zero‑Kaata" },
    { type: "link",     label: "Get Directions", icon: "map", url: "https://www.google.com/maps/dir//ROMS+PIZZA,+Vijay+Nagar,+Khekra,+Uttar+Pradesh+250101/@28.8657813,77.2862889,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390c5534bca9712b:0xb3f020d8c33559f6!2m2!1d77.2862889!2d28.8657813" }
    // Add when known:
    // { type: "wifi", label: "Connect to Wi‑Fi" },
    // { type: "link", label: "Call to order", icon: "phone", url: "tel:+91XXXXXXXXXX" },
  ],

  review: {
    area: "Khekra",
    language: "hi",                   // Hinglish suggestions first
    dishes: ["Rom's Pizza", "Paneer Makhani Pizza", "Cheese Burst Pizza", "Spicy Paneer Pizza", "Double Cheese Pizza",
             "Farmfresh Pizza", "Garlic Bread", "Achari Paneer Burger", "Chocolava Cake", "Cold Coffee", "Kit-kat Shake"]
  },

  links: {
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJK3GpvDRVDDkR9lk1w9gg8LM"
  },

  socials: {
    instagram: "https://www.instagram.com/reel/DasqjJRB1nA/",
    youtube: "",
    whatsapp: "",
    facebook: "",
    x: ""
  },

  wifi: { ssid: "", password: "" },

  rewards: {
    goal: 8,                          // TODO confirm with owner
    reward: "a free Chocolava Cake",  // TODO confirm with owner
    staffPin: "7391"
  },

  feedback: {
    title: "Honest Feedback",
    subtitle: "Speak freely — your feedback is completely anonymous.",
    endpoint: "",
    whatsapp: ""
  },

  menu: {
    title: "Our Menu",
    currency: "₹",
    categories: [
      {
        name: "Pizza",
        note: "Small serves 1 · Medium serves 2 · Large serves 4. All pizzas are 100% vegetarian.",
        sections: [
          { name: "Simply Veg", sizes: ["Small", "Medium", "Large"], prices: [110, 230, 370], items: [
            { name: "Cheese & Corn", desc: "Corn topping pizza" },
            { name: "Cheese & Onion", desc: "Onion topping pizza" },
            { name: "Cheese Pizza", desc: "Only cheese topping" }
          ]},
          { name: "Veg Delight", sizes: ["Small", "Medium", "Large"], prices: [149, 299, 449], items: [
            { name: "Double Cheese Pizza", desc: "Loaded with extra cheese" },
            { name: "Garden Fresh", desc: "Onion, capsicum, loaded with extra cheese" },
            { name: "Cheese & Paneer", desc: "Paneer topping pizza" }
          ]},
          { name: "Veg Treat", sizes: ["Small", "Medium", "Large"], prices: [200, 360, 520], items: [
            { name: "Farmfresh", desc: "Onion, capsicum, tomato with grilled mushroom" },
            { name: "Country Feast", desc: "Onion, tomato & capsicum" },
            { name: "Spicy Tango Pizza", desc: "Golden corn, jalapeno & red pepper" },
            { name: "Wonder Pizza", desc: "Onion, capsicum, tomato with Mexican chilli (jalapeno)" }
          ]},
          { name: "Veg Special", sizes: ["Small", "Medium", "Large"], prices: [230, 399, 630], items: [
            { name: "Spicy Paneer", desc: "Capsicum & spicy paneer" },
            { name: "Three Peppers", desc: "Capsicum, red pepper, jalapeno & olive" },
            { name: "Delicious Pizza", desc: "Onion, capsicum, golden corn, mushroom & paneer" },
            { name: "Veggie Lovers", desc: "Capsicum, black olives & tomato" },
            { name: "Achari Pizza", desc: "Double golden corn, capsicum & paneer" }
          ]},
          { name: "Veg Feast", sizes: ["Small", "Medium", "Large"], prices: [260, 420, 590], items: [
            { name: "Rom's Pizza", desc: "Onion, capsicum, fresh tomato, jalapeno, paneer, golden corn, olive & mushroom" },
            { name: "Cloud One Pizza", desc: "Onion, capsicum, tomato, jalapeno, paneer, grilled mushroom" },
            { name: "Chef's Veg Special", desc: "Red paprika, capsicum, mushroom, jalapeno, paneer, golden corn & mint sauce" },
            { name: "Paneer Makhani Pizza", desc: "Corn, jalapeno, double paneer, capsicum & olive" }
          ]},
          { name: "Single Topping", items: [
            { name: "Tomato Pizza", price: 65 },
            { name: "Onion Pizza", price: 75 },
            { name: "Capsicum Pizza", price: 80 },
            { name: "Corn Pizza", price: 80 }
          ]},
          { name: "Double Topping", items: [
            { name: "Onion & Capsicum", price: 110 },
            { name: "Onion & Tomato", price: 110 },
            { name: "Onion & Paneer", price: 114 },
            { name: "Jalapeno & Onion", price: 110 }
          ]},
          { name: "Set of 4", items: [
            { name: "Single Topping Pizza ×4", desc: "Onion, Tomato, Capsicum & Corn", price: 284, badge: "Save ₹15" },
            { name: "Double Topping Pizza ×4", desc: "Onion & Capsicum, Tomato & Corn, Onion & Paneer, Jalapeno & Onion", price: 419, badge: "Save ₹25" }
          ]},
          { name: "Add‑ons & Crust", items: [
            { name: "Extra Cheese", price: "S ₹40 · M ₹60 · L ₹95" },
            { name: "Cheese Burst", price: "S ₹70 · M ₹95" },
            { name: "Thin Crust", price: "S ₹30 · M ₹60" },
            { name: "Extra Toppings", desc: "Onion, capsicum, mushroom, tomato, sweet corn, olive, paneer, jalapeno, red paprika", price: "S ₹25 · M ₹50 · L ₹60" },
            { name: "Ketchup", price: 1 }
          ]}
        ]
      },
      {
        name: "Combos",
        note: "Best value for families and friends.",
        sections: [
          { name: "Combos", items: [
            { name: "Combo‑1", desc: "Double topping pizza with extra cheese + Veg Delight Burger + Cold drink (250ml)", price: 179, badge: "Save ₹15" },
            { name: "Combo‑2", desc: "2 Double topping pizzas with extra cheese + 2 Cheese Burgers + Cold drink (500ml)", price: 331, badge: "Save ₹133" }
          ]},
          { name: "Family Combos", items: [
            { name: "Family Combo", desc: "1 Medium pizza (any) + 1 Garlic bread with dip + 1 Parcel + 1 Chocolava cake + Cold drink (500ml)", price: 588, badge: "Save ₹100" },
            { name: "Happy Family Combo", desc: "2 Medium pizzas + 1 Garlic bread with dip + 1 Parcel + 1 Chocolava cake + Cold drink (500ml)", price: 798, badge: "Save ₹300" }
          ]}
        ]
      },
      {
        name: "Snacks",
        note: "",
        sections: [
          { name: "Burgers", items: [
            { name: "Potato Crispy Burger", price: 41 },
            { name: "Cheese Burger", price: 49 },
            { name: "Veg Delight Burger", price: 60 },
            { name: "Smoky Tandoori Burger", price: 70 },
            { name: "Achari Paneer Burger", price: 81 },
            { name: "Roms Double Decker Burger", price: 102 },
            { name: "Add Cheese Slice", price: 16 }
          ]},
          { name: "Side Orders", items: [
            { name: "Roms Parcel", price: 45 },
            { name: "French Fries", price: 70 },
            { name: "Garlic Bread with Cheese Dip", price: 110 },
            { name: "Stuffed Garlic Bread", price: 110 },
            { name: "Veg Red Pasta", price: 110 },
            { name: "Veg White Pasta", price: 110 },
            { name: "Mix Sauce Pasta", price: 125 },
            { name: "Veg Calzone Pocket", price: 114 },
            { name: "Chocolava Cake", price: 89 },
            { name: "Cheese Dip", price: 32 },
            { name: "Jalapeno Dip", price: 21 }
          ]}
        ]
      },
      {
        name: "Shakes",
        note: "",
        sections: [
          { name: "Shakes", items: [
            { name: "Fruit Shake", price: 95 },
            { name: "Strawberry Shake", price: 95 },
            { name: "Cold Coffee", price: 110 },
            { name: "Kit‑kat Shake", price: 110 },
            { name: "Chocolate Shake", price: 110 },
            { name: "Oreo Shake", price: 110 }
          ]},
          { name: "Mocktails", items: [
            { name: "Mint Mojito", price: 74 },
            { name: "Spicy Mango", price: 74 }
          ]}
        ]
      }
    ]
  }
};
