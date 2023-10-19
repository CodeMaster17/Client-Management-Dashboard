import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineUserAdd,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { MdOutlineDashboard, MdDownhillSkiing } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";

export const menus = [
  { name: "Member Dashboard", link: "/", icon: AiOutlineUser },
  { name: "Tourism Dashboard", link: "/view-place-data", icon: MdDownhillSkiing },
  { name: "Add User", link: "/add-user", icon: AiOutlineUserAdd },
  {
    name: "Analytics",
    link: "/visualize",
    icon: TbReportAnalytics,
    margin: true,
  },
  { name: "Add Places", link: "/addplace", icon: AiOutlineAppstoreAdd },
  { name: "Cart", link: "/", icon: FiShoppingCart },
  { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
  { name: "Setting", link: "/", icon: RiSettings4Line },
];

const perfectEscapeCards = [
  {
    _id: "60d5f5f0a6e9d30b0c1e0f0c",
    thumbnailImgURL: "https://res.cloudinary.com/dxk",
    heading: "India",
    link: "/india-escape",
    coverImageURL: "https://res.cloudinary.com/dxk",
    caption: "Explore the best of India",
    tourOffers: [
      {
        "name": 'Kashmir',
        rating: 4.5,
        days: 4,
        nights: 3,
        discountedPrice: 10000,
        originalPrice: 12000,
        coverImageURL: "https://res.cloudinary.com/dxk",
        details: [
          {
            img1: "https://res.cloudinary.com/dxk",
            img2: "https://res.cloudinary.com/dxk",
            img3: "https://res.cloudinary.com/dxk",
            img4: "https://res.cloudinary.com/dxk",
          },
          {
            tags: {
              'meals': true,
              'transportation': true,
              'food': true,
              'accommodation': false,
              'guide': false,
              'equipment': true,
            },
            highlights: [
              "Visit pangong lake; worlds highest saltwater lake that changes its colour from shades of blue to green to red.",
              "Visit the Khardungla Pass; the highest motorable road in the world.",
              "Visit the Nubra Valley; the valley of flowers.",
              "Visit the Shanti Stupa; a white domed Buddhist stupa.",
              "Visit the Magnetic Hill; a gravity hill located near Leh.",
              "Visit the Leh Palace; a former royal palace overlooking the town of Leh.",
              "Visit the Hall of Fame; a museum constructed by the Indian Army.",

            ],
            aboutthetour: [
              {
                description: 'Get ready to make your dream of going on a road trip in Ladakh come true where one would be experiencing the fusion of thrill, serene beauty and culture of The "Land of High Passes", as the entire tour is exclusively elected by Thrillophilias outdoor experts.A wonderful drive through Leh- Ladakh, a land covered with snow - capped mountains and the highest motorable passes, makes you feel at the top of the world.The unique thing about the Ladakh terrain is that it has mountains, forests, deserts, lakes, rivers, waterfalls in one beautiful and dynamic geography.',
                quickInfo: {
                  "route": "Leh - Sham Valley - Khardungla - Nubra Valley - Pangong - Chang La - Leh",
                  "startpoint": "Leh Airport",
                  "endpoint": "Leh Airport",
                  "passescovered": "Khardung-la (18,000 ft) and Chang-la (17,688 ft)"
                },

              },
              {
                'inclusions': [
                  "Comfortable Vehicle (Tavera/ Scorpio/ Tempo Traveler /Similar) for sightseeing on all days as per the itinerary.",
                  "Airport pick up & drop as per your flight timings",
                  "Accommodation at all locations on double (for couples & special requests) and triple sharing basis in standard Gusethouse/camps/Homestays.",
                  "Buffet Breakfast and Dinner: Starting with Dinner on Day 1 & ending with Breakfast on Last Day as per itinerary",
                  "Fuel for the whole trip as per the itinerary",
                  "Assured Inner line permits and Ladakh Union fee",
                ]
              },
              {
                'thingsnottomiss': [
                  "Enjoy Thukpa, traditional Ladakhi cuisine at The Tibetan Kitchen restaurant",
                  "Hangout at Lala's Art Café for a tall glass of Italian coffee",
                  "River rafting at the worlds highest river-rafting point, Sangam",
                  "Ride the remarkable double-humped (Bactrian) camels found exclusively at Nubra valley",
                  "Feast on delicious Maggi at the Khardungla-pass"
                ],
                'howtoreach': 'The easiest way to travel to Ladakh is by air. The nearest airport is Kushok Bakula Rimpochee Airport (IXL) located in Leh. This airport is connected with many international airports in India like Delhi. It also receives flights from Srinagar, Jammu, Chandigarh, and other common destinations in India.'
              }
            ]
          }

        ]
      },
      {
        name: 'Himalayan Trek',
        rating: 4.8,
        days: 7,
        nights: 6,
        discountedPrice: 15000,
        originalPrice: 18000,
        coverImageURL: 'https://res.cloudinary.com/abc',
        details: [
          {
            img1: 'https://res.cloudinary.com/abc',
            img2: 'https://res.cloudinary.com/abc',
            img3: 'https://res.cloudinary.com/abc',
            img4: 'https://res.cloudinary.com/abc',
          },
          {
            tags: {
              meals: true,
              transportation: false,
              food: true,
              accommodation: true,
              guide: true,
              equipment: true,
            },
            highlights: [
              'Trek to the base camp of Mount Everest.',
              'Explore the Himalayan villages and culture.',
              'Witness stunning mountain views.',
              'Experience the local cuisine.',
            ],
            aboutthetour: [
              {
                description: 'Embark on a thrilling adventure through the Himalayas with our Himalayan Trek package. You\'ll trek to the base camp of Mount Everest, visit remote villages, and immerse yourself in the stunning natural beauty and rich culture of the Himalayan region. This is a once-in-a-lifetime experience for trekkers and nature enthusiasts.',
                quickInfo: {
                  route: 'Kathmandu - Lukla - Namche Bazaar - Tengboche - Dingboche - Lobuche - Gorakshep - Everest Base Camp',
                  startpoint: 'Kathmandu Airport',
                  endpoint: 'Kathmandu Airport',
                  passescovered: 'Several high mountain passes',
                },
              },
              {
                inclusions: [
                  'Accommodation in teahouses during the trek.',
                  'All necessary permits and entry fees.',
                  'Experienced local guide and porters.',
                  'Meals during the trek.',
                  'Internal flights (Kathmandu - Lukla - Kathmandu).',
                ],
              },
              {
                thingsnottomiss: [
                  'Experience the bustling streets of Thamel in Kathmandu.',
                  'Visit the Tengboche Monastery.',
                  'Witness the breathtaking sunrise over Mount Everest from Kala Patthar.',
                ],
                howtoreach: 'You can reach Kathmandu, Nepal by air. Tribhuvan International Airport (TIA) in Kathmandu is the largest airport in Nepal and connects to various international destinations.',
              },
            ],
          },
        ],
      },
      {
        name: 'Bali Beach Retreat',
        rating: 4.7,
        days: 5,
        nights: 4,
        discountedPrice: 9000,
        originalPrice: 11000,
        coverImageURL: 'https://res.cloudinary.com/xyz',
        details: [
          {
            img1: 'https://res.cloudinary.com/xyz',
            img2: 'https://res.cloudinary.com/xyz',
            img3: 'https://res.cloudinary.com/xyz',
            img4: 'https://res.cloudinary.com/xyz',
          },
          {
            tags: {
              meals: true,
              transportation: true,
              food: true,
              accommodation: true,
              guide: false,
              equipment: false,
            },
            highlights: [
              'Relax on Bali\'s beautiful beaches.',
              'Visit ancient temples and cultural sites.',
              'Explore vibrant local markets.',
            ],
            aboutthetour: [
              {
                description: 'Escape to the tropical paradise of Bali with our Beach Retreat package. Enjoy a relaxing stay on Bali\'s stunning beaches, immerse yourself in the local culture, and visit ancient temples and landmarks. This retreat is perfect for travelers seeking a blend of relaxation and exploration.',
                quickInfo: {
                  route: 'Denpasar - Kuta - Ubud - Uluwatu',
                  startpoint: 'Ngurah Rai International Airport (DPS)',
                  endpoint: 'Ngurah Rai International Airport (DPS)',
                  passescovered: 'N/A',
                },
              },
              {
                inclusions: [
                  'Airport pick up & drop as per your flight timings.',
                  'Accommodation at beachfront resorts and hotels.',
                  'Daily breakfast and select meals.',
                  'Private transportation for tours and sightseeing.',
                ],
              },
              {
                thingsnottomiss: [
                  'Visit the iconic Uluwatu Temple perched on a cliff.',
                  'Experience a traditional Balinese dance performance.',
                  'Explore the vibrant Ubud Monkey Forest.',
                ],
                howtoreach: 'You can reach Bali by air. Ngurah Rai International Airport (DPS) in Denpasar, Bali, is well-connected to various international destinations.'
              },
            ],
          },
        ],
      },
      {
        name: 'Machu Picchu Expedition',
        rating: 4.9,
        days: 6,
        nights: 5,
        discountedPrice: 15000,
        originalPrice: 18000,
        coverImageURL: 'https://res.cloudinary.com/pqr',
        details: [
          {
            img1: 'https://res.cloudinary.com/pqr',
            img2: 'https://res.cloudinary.com/pqr',
            img3: 'https://res.cloudinary.com/pqr',
            img4: 'https://res.cloudinary.com/pqr',
          },
          {
            tags: {
              meals: true,
              transportation: true,
              food: true,
              accommodation: true,
              guide: true,
              equipment: false,
            },
            highlights: [
              'Explore the ancient ruins of Machu Picchu.',
              'Hike the Inca Trail.',
              'Discover the rich history of Cusco.',
            ],
            aboutthetour: [
              {
                description: 'Embark on a thrilling expedition to Machu Picchu, the ancient Inca city hidden in the Peruvian Andes. This expedition combines adventure with history, as you hike the Inca Trail, explore Cusco, and uncover the mysteries of Machu Picchu.',
                quickInfo: {
                  route: 'Cusco - Inca Trail - Machu Picchu - Cusco',
                  startpoint: 'Alejandro Velasco Astete International Airport (CUZ)',
                  endpoint: 'Alejandro Velasco Astete International Airport (CUZ)',
                  passescovered: 'Dead Woman Pass and more',
                },
              },
              {
                inclusions: [
                  'Guided tours of Machu Picchu and Cusco.',
                  'Accommodation in comfortable hotels and lodges.',
                  'Meals during the trek and selected meals in Cusco.',
                  'Train and bus transportation as per the itinerary.',
                ],
              },
              {
                thingsnottomiss: [
                  'Explore the Sacred Valley of the Incas.',
                  'Discover the Inca archaeological site of Ollantaytambo.',
                  'Visit the bustling San Pedro Market in Cusco.'
                ],
                howtoreach: 'You can reach Cusco, Peru, by air. Alejandro Velasco Astete International Airport (CUZ) in Cusco is well-connected to major cities in Peru.'
              },
            ],
          },
        ],
      },
      {
        name: 'Santorini Getaway',
        rating: 4.7,
        days: 6,
        nights: 5,
        discountedPrice: 13000,
        originalPrice: 15000,
        coverImageURL: 'https://res.cloudinary.com/santorini',
        details: [
          {
            img1: 'https://res.cloudinary.com/santorini',
            img2: 'https://res.cloudinary.com/santorini',
            img3: 'https://res.cloudinary.com/santorini',
            img4: 'https://res.cloudinary.com/santorini',
          },
          {
            tags: {
              meals: true,
              transportation: true,
              food: true,
              accommodation: true,
              guide: false,
              equipment: false,
            },
            highlights: [
              'Relax on the beautiful beaches of Santorini.',
              'Explore the charming villages with white-washed buildings.',
              'Enjoy a romantic sunset in Oia.',
            ],
            aboutthetour: [
              {
                description: 'Experience the enchanting beauty of Santorini, a stunning Greek island in the Aegean Sea. This getaway offers a mix of relaxation and exploration with its beautiful beaches, traditional villages, and breathtaking sunsets in Oia.',
                quickInfo: {
                  route: 'Santorini - Oia - Fira - Kamari Beach',
                  startpoint: 'Santorini Airport',
                  endpoint: 'Santorini Airport',
                  passescovered: 'N/A',
                },
              },
              {
                inclusions: [
                  'Airport transfers as per your flight timings.',
                  'Accommodation in charming hotels with sea views.',
                  'Daily breakfast and select meals.',
                  'Private transportation for tours and sightseeing.',
                ],
              },
              {
                thingsnottomiss: [
                  'Visit the ancient Akrotiri archaeological site.',
                  'Explore the red and black sand beaches of Santorini.',
                  'Taste local wines in the islands vineyards.',
                ],
                howtoreach: 'You can reach Santorini by air. Santorini Airport (JTR) serves international and domestic flights.'
              },
            ],
          },
        ],
      },
      {
        name: 'Costa Rica Wildlife Expedition',
        rating: 4.9,
        days: 8,
        nights: 7,
        discountedPrice: 18000,
        originalPrice: 20000,
        coverImageURL: 'https://res.cloudinary.com/costarica',
        details: [
          {
            img1: 'https://res.cloudinary.com/costarica',
            img2: 'https://res.cloudinary.com/costarica',
            img3: 'https://res.cloudinary.com/costarica',
            img4: 'https://res.cloudinary.com/costarica',
          },
          {
            tags: {
              meals: true,
              transportation: true,
              food: true,
              accommodation: true,
              guide: true,
              equipment: false,
            },
            highlights: [
              'Explore the diverse wildlife of Costa Rica in its national parks.',
              'Hike through lush rainforests and spot colorful birds and exotic animals.',
              'Visit Arenal Volcano and relax in natural hot springs.',
            ],
            aboutthetour: [
              {
                description: 'Embark on an extraordinary wildlife expedition in the beautiful landscapes of Costa Rica. This adventure takes you through the lush rainforests, national parks, and volcanoes, allowing you to witness the incredible diversity of wildlife in the region.',
                quickInfo: {
                  route: 'San Jose - Tortuguero - Arenal - Monteverde - Manuel Antonio - San Jose',
                  startpoint: 'Juan Santamaria International Airport (SJO)',
                  endpoint: 'Juan Santamaria International Airport (SJO)',
                  passescovered: 'N/A',
                },
              },
              {
                inclusions: [
                  'Airport transfers and transportation for the entire tour.',
                  'Accommodation in eco-friendly lodges and resorts.',
                  'All meals during the tour.',
                  'Experienced naturalist guides and wildlife experts.',
                ],
              },
              {
                thingsnottomiss: [
                  'Visit Tortuguero National Park, a prime nesting site for sea turtles.',
                  'Hike in the Monteverde Cloud Forest Reserve.',
                  'Relax on the beautiful beaches of Manuel Antonio National Park.'
                ],
                howtoreach: 'You can reach Costa Rica by air. Juan Santamaria International Airport (SJO) in San Jose is the main international gateway.'
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _id: "60d5f5f0a6e9d30b0c1e0f0c",
    thumbnailImgURL: "https://res.cloudinary.com/dxk",
    heading: "India",
    link: "/india-escape",
    coverImageURL: "https://res.cloudinary.com/dxk",
    caption: "Explore the best of India",
    tourOffers: [
      {
        name: 'Swiss Alps Adventure',
        rating: 4.6,
        days: 5,
        nights: 4,
        discountedPrice: 15000,
        originalPrice: 17000,
        coverImageURL: 'https://res.cloudinary.com/swissalps',
        details: [
          {
            img1: 'https://res.cloudinary.com/swissalps',
            img2: 'https://res.cloudinary.com/swissalps',
            img3: 'https://res.cloudinary.com/swissalps',
            img4: 'https://res.cloudinary.com/swissalps',
          },
          {
            tags: {
              meals: true,
              transportation: true,
              food: true,
              accommodation: true,
              guide: true,
              equipment: false,
            },
            highlights: [
              'Explore the breathtaking landscapes of the Swiss Alps.',
              'Ski on world-famous slopes and enjoy winter sports.',
              'Visit charming alpine villages and experience Swiss culture.',
            ],
            aboutthetour: [
              {
                description: 'Embark on an adventure to the stunning Swiss Alps. This tour offers a mix of adventure and cultural exploration, allowing you to experience the beauty of the Alps, ski on renowned slopes, and immerse yourself in Swiss culture.',
                quickInfo: {
                  route: 'Zurich - Interlaken - Zermatt - Lucerne - Zurich',
                  startpoint: 'Zurich Airport',
                  endpoint: 'Zurich Airport',
                  passescovered: 'Swiss Alps Passes',
                },
              },
              {
                inclusions: [
                  'Airport transfers and transportation for the entire tour.',
                  'Accommodation in charming alpine resorts and hotels.',
                  'Daily breakfast and select Swiss meals.',
                  'Experienced local guides for adventure activities.',
                ],
              },
              {
                thingsnottomiss: [
                  'Ski or snowboard on the famous slopes of Zermatt.',
                  'Ride the cogwheel train to Jungfraujoch, the "Top of Europe."',
                  'Stroll through the charming streets of Lucerne.',
                ],
                howtoreach: 'You can reach Zurich, Switzerland by air. Zurich Airport (ZRH) is well-connected to major international destinations.'
              },
            ],
          },
        ],
      },
      {
        name: 'Machu Picchu Expedition',
        rating: 4.7,
        days: 7,
        nights: 6,
        discountedPrice: 18000,
        originalPrice: 20000,
        coverImageURL: 'https://res.cloudinary.com/machupicchu',
        details: [
          {
            img1: 'https://res.cloudinary.com/machupicchu',
            img2: 'https://res.cloudinary.com/machupicchu',
            img3: 'https://res.cloudinary.com/machupicchu',
            img4: 'https://res.cloudinary.com/machupicchu',
          },
          {
            tags: {
              meals: true,
              transportation: true,
              food: true,
              accommodation: true,
              guide: true,
              equipment: false,
            },
            highlights: [
              'Explore the breathtaking ruins of Machu Picchu.',
              'Hike the Inca Trail to Machu Picchu.',
              'Discover the history and culture of the Incas.',
            ],
            aboutthetour: [
              {
                description: 'Embark on an expedition to the awe-inspiring Machu Picchu, an ancient Inca city nestled in the Andes Mountains. This adventure takes you on a journey through history, culture, and natural beauty, including a hike on the famous Inca Trail.',
                quickInfo: {
                  route: 'Cusco - Ollantaytambo - Inca Trail - Machu Picchu - Cusco',
                  startpoint: 'Cusco Airport',
                  endpoint: 'Cusco Airport',
                  passescovered: 'Inca Trail Permits',
                },
              },
              {
                inclusions: [
                  'Airport transfers and local transportation.',
                  'Accommodation in comfortable hotels and lodges.',
                  'Daily meals during the tour.',
                  'Experienced local guides for historical insights.',
                ],
              },
              {
                thingsnottomiss: [
                  'Witness the sunrise over Machu Picchu.',
                  'Explore the Sacred Valley of the Incas.',
                  'Visit the historic town of Ollantaytambo.',
                ],
                howtoreach: 'You can reach Cusco, Peru by air. Alejandro Velasco Astete International Airport (CUZ) serves international and domestic flights.'
              },
            ],
          },
        ],
      },
      {
        name: 'Santorini Getaway',
        rating: 4.7,
        days: 6,
        nights: 5,
        discountedPrice: 13000,
        originalPrice: 15000,
        coverImageURL: 'https://res.cloudinary.com/santorini',
        details: [
          {
            img1: 'https://res.cloudinary.com/santorini',
            img2: 'https://res.cloudinary.com/santorini',
            img3: 'https://res.cloudinary.com/santorini',
            img4: 'https://res.cloudinary.com/santorini',
          },
          {
            tags: {
              meals: true,
              transportation: true,
              food: true,
              accommodation: true,
              guide: false,
              equipment: false,
            },
            highlights: [
              'Relax on the beautiful beaches of Santorini.',
              'Explore the charming villages with white-washed buildings.',
              'Enjoy a romantic sunset in Oia.',
            ],
            aboutthetour: [
              {
                description: 'Experience the enchanting beauty of Santorini, a stunning Greek island in the Aegean Sea. This getaway offers a mix of relaxation and exploration with its beautiful beaches, traditional villages, and breathtaking sunsets in Oia.',
                quickInfo: {
                  route: 'Santorini - Oia - Fira - Kamari Beach',
                  startpoint: 'Santorini Airport',
                  endpoint: 'Santorini Airport',
                  passescovered: 'N/A',
                },
              },
              {
                inclusions: [
                  'Airport transfers as per your flight timings.',
                  'Accommodation in charming hotels with sea views.',
                  'Daily breakfast and select meals.',
                  'Private transportation for tours and sightseeing.',
                ],
              },
              {
                thingsnottomiss: [
                  'Visit the ancient Akrotiri archaeological site.',
                  'Explore the red and black sand beaches of Santorini.',
                  'Taste local wines in the island\'s vineyards.'
                ],
                howtoreach: 'You can reach Santorini by air. Santorini Airport (JTR) serves international and domestic flights.'
              },
            ],
          },
        ],
      },
    ]
  }
]
