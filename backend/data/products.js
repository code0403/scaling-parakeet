const products = [
  {
    name: "Apple iPhone 16",
    brand: "Apple",
    slug: "iphone-16",
    image: "https://m.media-amazon.com/images/I/61135j8fPJL._SX679_.jpg",
    imageGallery: [
      "https://m.media-amazon.com/images/I/61jLiWWfKDL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51UIlT-iiML._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81MWQ-fpz8L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61mbw8GYY2L._SX679_.jpg",
    ],
    color: "Black",
    RAM: ["8 GB", "12 GB"],
    OperatingSystem: "iOS",
    category: "smartphones",
    description:
      "Flagship Apple iPhone 16 with A-series chipset and pro camera setup.",

    variants: [
      {
        color: "Black",
        slug: "iphone-16-black",
        image: "https://m.media-amazon.com/images/I/61135j8fPJL._SX679_.jpg",
        imageGallery: [
          "https://m.media-amazon.com/images/I/61jLiWWfKDL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/51UIlT-iiML._SX679_.jpg",
          "https://m.media-amazon.com/images/I/81MWQ-fpz8L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61mbw8GYY2L._SX679_.jpg",
        ],
        storageOptions: [
          {
            storage: "256 GB",
            price: 122900,
            mrp: 127900,
            slug: "iphone-16-black-256gb",
          },
          {
            storage: "512 GB",
            price: 132900,
            mrp: 137900,
            slug: "iphone-16-black-512gb",
          },
          {
            storage: "1 TB",
            price: 147900,
            mrp: 152900,
            slug: "iphone-16-black-1tb",
          },
        ],
      },
      {
        color: "White",
        slug: "iphone-16-white",
        image: "https://m.media-amazon.com/images/I/61d88xzrklL._SX679_.jpg",
        imageGallery: [
          "https://m.media-amazon.com/images/I/61d88xzrklL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/51FVz2+X-9L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/81XzDQHVXQL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61j860Bp8XL._SX679_.jpg",
        ],
        storageOptions: [
          {
            storage: "256 GB",
            price: 111900,
            mrp: 117900,
            slug: "iphone-16-white-256gb",
          },
          {
            storage: "512 GB",
            price: 121900,
            mrp: 127900,
            slug: "iphone-16-white-512gb",
          },
          {
            storage: "1 TB",
            price: 136900,
            mrp: 142900,
            slug: "iphone-16-white-1tb",
          },
        ],
      },
    ],
    emiPlans: [
      {
        id: "iplan-iphone-0-6",
        tenureMonths: 6,
        interestRate: 0.0,
        cashback: 1500,
        fund: "SBI Bluechip",
      },
      {
        id: "iplan-iphone-10-12",
        tenureMonths: 12,
        interestRate: 10.5,
        cashback: 0,
        fund: "HNIF Growth",
      },
      {
        id: "iplan-iphone-8-9",
        tenureMonths: 9,
        interestRate: 7.5,
        cashback: 500,
        fund: "Axis LongTerm",
      },
    ],
  },
  {
    name: "Samsung Galaxy S25 Ultra 5G",
    brand: "Samsung",
    slug: "samsung-galaxy-s25-ultra",
    image: "https://m.media-amazon.com/images/I/71P85R392uL._SX679_.jpg",
    imageGallery: [
      "https://m.media-amazon.com/images/I/71P85R392uL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71iRY9pUoVL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71pDQ+941HL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71PrkZz2itL._SX679_.jpg",
    ],
    color: "Titanium Silverblue",
    RAM: ["8 GB", "12 GB"],
    OperatingSystem: "Android 15",
    category: "smartphones",
    description:
      "Flagship Samsung Galaxy S25 Ultra 5G AI Smartphone with advanced camera and AI features.",
    variants: [
      {
        color: "Titanium Silverblue",
        slug: "s25-ultra-silverblue",
        image: "https://m.media-amazon.com/images/I/71P85R392uL._SX679_.jpg",
        imageGallery: [
          "https://m.media-amazon.com/images/I/71P85R392uL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71iRY9pUoVL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71pDQ+941HL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71PrkZz2itL._SX679_.jpg",
        ],
        storageOptions: [
          {
            storage: "256 GB",
            mrp: 141999,
            price: 119999,
            slug: "s25-ultra-silverblue-256gb",
          },
          {
            storage: "512 GB",
            mrp: 147999,
            price: 125999,
            slug: "s25-ultra-silverblue-512gb",
          },
          {
            storage: "1 TB",
            mrp: 153999,
            price: 131999,
            slug: "s25-ultra-silverblue-1tb",
          },
        ],
      },
      {
        color: "Titanium Gray",
        slug: "s25-ultra-gray",
        image: "https://m.media-amazon.com/images/I/71rs4Aer71L._SX679_.jpg",
        imageGallery: [
                    "https://m.media-amazon.com/images/I/71rs4Aer71L._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71iRY9pUoVL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71pDQ+941HL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71PrkZz2itL._SX679_.jpg"
                ],
        storageOptions: [
          {
            storage: "256 GB",
            mrp: 121999,
            price: 115999,
            slug: "s25-ultra-gray-256gb",
          },
          {
            storage: "512 GB",
            mrp: 131999,
            price: 125999,
            slug: "s25-ultra-gray-512gb",
          },
          {
            storage: "1 TB",
            mrp: 141999,
            price: 135999,
            slug: "s25-ultra-gray-1tb",
          },
        ],
      },
      {
        color: "Titanium Whitesilver",
        slug: "s25-ultra-whitesilver",
        image: "https://m.media-amazon.com/images/I/71-d7XDbhIL._SX679_.jpg",
        imageGallery: [
                    "https://m.media-amazon.com/images/I/71-d7XDbhIL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71iRY9pUoVL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71pDQ+941HL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71PrkZz2itL._SX679_.jpg"
                ],
        storageOptions: [
          {
            storage: "256 GB",
            mrp: 133900,
            price: 128900,
            slug: "s25-ultra-whitesilver-256gb",
          },
          {
            storage: "512 GB",
            mrp: 139900,
            price: 134900,
            slug: "s25-ultra-whitesilver-512gb",
          },
          {
            storage: "1 TB",
            mrp: 149900,
            price: 141900,
            slug: "s25-ultra-whitesilver-1tb",
          },
        ],
      },
      {
        color: "Titanium Black",
        slug: "s25-ultra-black",
        image: "https://m.media-amazon.com/images/I/71uqj6BKnRL._SX679_.jpg",
        imageGallery: [
                    "https://m.media-amazon.com/images/I/71uqj6BKnRL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71iRY9pUoVL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71pDQ+941HL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71PrkZz2itL._SX679_.jpg"
                ],
        storageOptions: [
          {
            storage: "256 GB",
            mrp: 117900,
            price: 113900,
            slug: "s25-ultra-black-256gb",
          },
          {
            storage: "512 GB",
            mrp: 127900,
            price: 121900,
            slug: "s25-ultra-black-512gb",
          },
          {
            storage: "1 TB",
            mrp: 137900,
            price: 129900,
            slug: "s25-ultra-black-1tb",
          },
        ],
      },
    ],
    emiPlans: [
      {
        id: "s25-ultra-0-6",
        tenureMonths: 6,
        interestRate: 0.0,
        cashback: 1500,
        fund: "SBI Bluechip",
      },
      {
        id: "s25-ultra-10-12",
        tenureMonths: 12,
        interestRate: 10.5,
        cashback: 0,
        fund: "HNIF Growth",
      },
      {
        id: "s25-ultra-8-9",
        tenureMonths: 9,
        interestRate: 7.5,
        cashback: 500,
        fund: "Axis LongTerm",
      },
    ],
  },

  {
    name: "OnePlus 13 | Smarter with OnePlus AI",
    brand: "OnePlus",
    slug: "oneplus-13",
    image: "https://m.media-amazon.com/images/I/715k0WQtg9L._SX569_.jpg",
    imageGallery: [
            "https://m.media-amazon.com/images/I/715k0WQtg9L._SX569_.jpg",
            "https://m.media-amazon.com/images/I/61A+bgJ2jmL._SX569_.jpg",
            "https://m.media-amazon.com/images/I/61kL-kPUl-L._SX569_.jpg",
            "https://m.media-amazon.com/images/I/71764JNKQML._SX569_.jpg"
        ],
    color: "Black Eclipse",
    OperatingSystem: "Android 15, OxygenOS",
    category: "smartphones",
    variants: [
      {
        color: "Black Eclipse",
        slug: "oneplus-13-black",
        image: "https://m.media-amazon.com/images/I/715k0WQtg9L._SX569_.jpg",
        imageGallery: [
            "https://m.media-amazon.com/images/I/715k0WQtg9L._SX569_.jpg",
            "https://m.media-amazon.com/images/I/61A+bgJ2jmL._SX569_.jpg",
            "https://m.media-amazon.com/images/I/61kL-kPUl-L._SX569_.jpg",
            "https://m.media-amazon.com/images/I/71764JNKQML._SX569_.jpg"
        ],
        storageOptions: [
          {
            storage: "256 GB",
            mrp: 23999,
            price: 19999,
            slug: "oneplus-13-black-256gb",
          },
          {
            storage: "512 GB",
            mrp: 25999,
            price: 21999,
            slug: "oneplus-13-black-512gb",
          },
        ],
      },
      {
        color: "Arctic Dawn",
        slug: "oneplus-13-arctic-dawn",
        image: "https://m.media-amazon.com/images/I/61oir+alYlL._SX569_.jpg",
        imageGallery: [
                    "https://m.media-amazon.com/images/I/61oir+alYlL._SX569_.jpg",
                    "https://m.media-amazon.com/images/I/616GelAX9NL._SX569_.jpg",
                    "https://m.media-amazon.com/images/I/61kL-kPUl-L._SX569_.jpg",
                    "https://m.media-amazon.com/images/I/71764JNKQML._SX569_.jpg"
                ],
        storageOptions: [
          {
            storage: "256 GB",
            mrp: 63999,
            price: 54999,
            slug: "oneplus-13-arctic-dawn-256gb",
          },
          {
            storage: "512 GB",
            mrp: 67999,
            price: 58999,
            slug: "oneplus-13-arctic-dawn-512gb",
          },
        ],
      },
      {
        color: "Midnight Ocean",
        slug: "oneplus-13-midnight-ocean",
        image: "https://m.media-amazon.com/images/I/71N4hshhfNL._SX569_.jpg",
        imageGallery: [
                    "https://m.media-amazon.com/images/I/71N4hshhfNL._SX569_.jpg",
                    "https://m.media-amazon.com/images/I/611z5CM++VL._SX569_.jpg",
                    "https://m.media-amazon.com/images/I/61kL-kPUl-L._SX569_.jpg",
                    "https://m.media-amazon.com/images/I/71764JNKQML._SX569_.jpg"
                ],
        storageOptions: [
          {
            storage: "256 GB",
            mrp: 33999,
            price: 28999,
            slug: "oneplus-13-midnight-ocean-256gb",
          },
          {
            storage: "512 GB",
            mrp: 36999,
            price: 31999,
            slug: "oneplus-13-midnight-ocean-512gb",
          },
          {
            storage: "1 TB",
            mrp: 41999,
            price: 36999,
            slug: "oneplus-13-midnight-ocean-1tb",
          },
        ],
      },
    ],
    emiPlans: [
      {
        id: "oneplus-13-0-6",
        tenureMonths: 6,
        interestRate: 0.0,
        cashback: 1500,
        fund: "SBI Bluechip",
      },
      {
        id: "oneplus-13-10-12",
        tenureMonths: 12,
        interestRate: 10.5,
        cashback: 0,
        fund: "HNIF Growth",
      },
      {
        id: "oneplus-13-8-9",
        tenureMonths: 9,
        interestRate: 7.5,
        cashback: 500,
        fund: "Axis LongTerm",
      },
    ],
  },

  {
    name: "Google Pixel 10 5G",
    brand: "Google",
    slug: "google-pixel-10",
    image: "https://m.media-amazon.com/images/I/516HIUddM3L._SX679_.jpg",
    imageGallery: [
            "https://m.media-amazon.com/images/I/516HIUddM3L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/31s4WuqU8cL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/41Lewj+2FmL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/418gt1Fr+tL._SX679_.jpg"
        ],
    OperatingSystem: "Android 16",
    category: "smartphones",
    variants: [
      {
        color: "Obsidian",
        slug: "google-pixel-10-obsidian",
        image: "https://m.media-amazon.com/images/I/516HIUddM3L._SX679_.jpg",
        imageGallery: [
            "https://m.media-amazon.com/images/I/516HIUddM3L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/31s4WuqU8cL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/41Lewj+2FmL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/418gt1Fr+tL._SX679_.jpg"
        ],
        storageOptions: [
          {
            storage: "256 GB",
            mrp: 19500,
            price: 16999,
            slug: "google-pixel-10-obsidian-256gb",
          },
          {
            storage: "512 GB",
            mrp: 21500,
            price: 18999,
            slug: "google-pixel-10-obsidian-512gb",
          },
        ],
      },
      {
        color: "Indigo",
        slug: "google-pixel-10-indigo",
        image: "https://m.media-amazon.com/images/I/41CV2313l5L._SX679_.jpg",
        imageGallery: [
                    "https://m.media-amazon.com/images/I/41CV2313l5L._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/616GelAX9NL._SX569_.jpg",
                    "https://m.media-amazon.com/images/I/61kL-kPUl-L._SX569_.jpg",
                    "https://m.media-amazon.com/images/I/71764JNKQML._SX569_.jpg"
                ],
        storageOptions: [
          {
            storage: "256 GB",
            mrp: 18500,
            price: 16999,
            slug: "google-pixel-10-indigo-256gb",
          },
          {
            storage: "512 GB",
            mrp: 20500,
            price: 18999,
            slug: "google-pixel-10-indigo-512gb",
          },
        ],
      },
      {
        color: "Frost White",
        slug: "google-pixel-10-frost-white",
        image: "https://m.media-amazon.com/images/I/315DonuUGZL.jpg",
        imageGallery: [
                    "https://m.media-amazon.com/images/I/315DonuUGZL.jpg",
                    "https://m.media-amazon.com/images/I/11nkv+xBrPL.jpg",
                    "https://m.media-amazon.com/images/I/41ChUKFeMVL.jpg",
                    "https://m.media-amazon.com/images/I/21xxTdM3GKL.jpg"
                ],
        storageOptions: [
          {
            storage: "256 GB",
            mrp: 29250,
            price: 26999,
            slug: "google-pixel-10-frost-white-256gb",
          },
          {
            storage: "512 GB",
            mrp: 31999,
            price: 28999,
            slug: "google-pixel-10-frost-white-512gb",
          },
          {
            storage: "1 TB",
            mrp: 34999,
            price: 31999,
            slug: "google-pixel-10-frost-white-1tb",
          },
        ],
      },
    ],
    emiPlans: [
      {
        id: "google-pixel-10-0-6",
        tenureMonths: 6,
        interestRate: 0.0,
        cashback: 1500,
        fund: "SBI Bluechip",
      },
      {
        id: "google-pixel-10-10-12",
        tenureMonths: 12,
        interestRate: 10.5,
        cashback: 0,
        fund: "HNIF Growth",
      },
      {
        id: "google-pixel-10-8-9",
        tenureMonths: 9,
        interestRate: 7.5,
        cashback: 500,
        fund: "Axis LongTerm",
      },
    ],
  },
];

export default products;
