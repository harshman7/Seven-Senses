export interface Retreat {
  slug: string;
  destination: string;
  region: string;
  tagline: string;
  image: string;
  imageAlt: string;
  duration: string;
  groupSize: string;
  season: string;
  overview: string[];
  included: string[];
  experience: string[];
  whoIsItFor: string[];
}

export const retreats: Retreat[] = [
  {
    slug: "kyoto",
    destination: "Kyoto",
    region: "Japan",
    tagline: "Ancient stillness in living temples",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "Traditional Japanese temple surrounded by autumn foliage in Kyoto",
    duration: "7 Nights",
    groupSize: "Maximum 6",
    season: "Autumn & Spring",
    overview: [
      "A considered immersion in the spiritual heartland of Japan, where centuries of contemplative tradition meet the rare privilege of private access.",
      "Guests reside in a restored machiya in the Higashiyama district, moving each day between zazen meditation with a Rinzai monk, private tea ceremony instruction, and unhurried walks through temple gardens closed to the public.",
    ],
    included: [
      "Private restored machiya residence with dedicated attendant",
      "Daily zazen sessions with a Rinzai Zen monk",
      "Private tea ceremony instruction with a urasenke master",
      "Kaiseki dining curated by a single Michelin-starred chef",
      "Guided forest immersion in the Arashiyama bamboo groves",
      "One private calligraphy session",
      "All ground transfers by private car",
    ],
    experience: [
      "Mornings begin in silence. The sound of water over stone. The deliberate placement of a single flower in the tokonoma alcove. There is no itinerary here — only rhythm.",
      "Afternoons unfold slowly: perhaps a walk through the moss gardens of Saihō-ji, or a seated meditation in the rock garden at Ryōan-ji, emptied of visitors for you alone.",
      "Evenings return to the machiya, where kaiseki arrives as art — twelve courses, each a meditation on season and restraint.",
    ],
    whoIsItFor: [
      "Those drawn to silence as a practice, not an absence.",
      "Guests seeking spiritual depth without dogma.",
      "Individuals who find beauty in discipline, restraint, and the passage of seasons.",
    ],
  },
  {
    slug: "patagonia",
    destination: "Patagonia",
    region: "Argentina & Chile",
    tagline: "Solitude at the edge of the world",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "Dramatic snow-capped mountain peaks under a vast starlit sky in Patagonia",
    duration: "8 Nights",
    groupSize: "Maximum 8",
    season: "November — March",
    overview: [
      "Patagonia demands nothing and gives everything. This retreat places guests at the threshold of earth's most dramatic landscapes — glaciers, granite towers, and skies so vast they redefine perspective.",
      "Based at a private estancia on the shores of Lago Argentino, the experience moves between guided wilderness immersion, somatic bodywork, and long evenings around open fire.",
    ],
    included: [
      "Private estancia with exclusive-use accommodation",
      "Daily guided wilderness walks with a naturalist",
      "Horseback rides across the steppe",
      "Private glacier excursion by boat",
      "Nightly fire-roasted Argentine cuisine with estate wines",
      "Two somatic bodywork sessions per guest",
      "All internal flights and ground transfers",
    ],
    experience: [
      "Dawn breaks across the steppe like a slow exhalation. You wake to the sound of wind and nothing else. The land here is not backdrop — it is teacher.",
      "Days move between guided walks along glacial moraines, horseback journeys across open plain, and hours of chosen solitude in landscapes that make conversation unnecessary.",
      "There is no Wi-Fi by design. There is fire, wine, the southern sky in its full immensity, and the quiet company of those who also came to listen.",
    ],
    whoIsItFor: [
      "Those who are renewed by vast, untouched landscapes.",
      "Guests who find stillness in movement, and meaning in open space.",
      "Individuals seeking a reset that is physical, elemental, and unhurried.",
    ],
  },
  {
    slug: "maldives",
    destination: "Maldives",
    region: "Indian Ocean",
    tagline: "Weightless days on luminous water",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "Crystal clear turquoise waters of the Maldives with overwater villas",
    duration: "6 Nights",
    groupSize: "Maximum 4",
    season: "January — April",
    overview: [
      "A retreat that moves at the pace of the tide. Set on a private atoll with just four overwater residences, this experience is an exercise in luminous simplicity.",
      "Days are unstructured by design. Guests drift between the reef, the treatment pavilion, and their private deck — held by water, light, and the unhurried attention of a dedicated team.",
    ],
    included: [
      "Private overwater residence with plunge pool",
      "Daily Ayurvedic treatments tailored to each guest",
      "Private snorkelling and freediving with a marine biologist",
      "Plant-forward cuisine using ingredients from the island garden",
      "Sunrise yoga on the sandbank",
      "Seaplane transfers from Malé",
      "A dedicated retreat host for the duration of stay",
    ],
    experience: [
      "Time dissolves here. The horizon line between water and sky becomes uncertain. You are held by warmth, by turquoise, by the absence of urgency.",
      "Mornings begin with yoga on a sandbank that appears only at low tide. Afternoons are yours — reef, hammock, sleep, or the gentle hands of the Ayurvedic practitioner.",
      "As evening comes, the bioluminescence begins. Dinner is served on your deck, with the ocean lit from within beneath your feet.",
    ],
    whoIsItFor: [
      "Those seeking absolute stillness and sensory restoration.",
      "Couples or individuals who wish to be held by water and warmth.",
      "Guests for whom doing nothing, beautifully, is the ultimate luxury.",
    ],
  },
  {
    slug: "marrakech",
    destination: "Marrakech",
    region: "Morocco",
    tagline: "Ancient rhythms in a hidden riad",
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "Intricate Moroccan architecture with geometric tile patterns and soft light",
    duration: "5 Nights",
    groupSize: "Maximum 6",
    season: "October — May",
    overview: [
      "Behind the walls of the medina lies a world of cultivated stillness. This retreat occupies a private riad — centuries old, meticulously restored — where the geometry of Islamic art becomes a framework for contemplation.",
      "Guests move between artisan workshops, hammam rituals, and guided meditations in the riad's courtyard garden, where the sound of fountain water marks the only schedule.",
    ],
    included: [
      "Exclusive-use restored riad in the medina",
      "Daily private hammam and massage",
      "Guided visits to master artisan workshops — zellige, leather, textiles",
      "Private supper in a mountain kasbah",
      "Moroccan culinary instruction with a palace-trained chef",
      "Sunrise meditation in the Agafay desert",
      "All transfers and a dedicated cultural guide",
    ],
    experience: [
      "You enter through an unmarked door in the medina wall. Inside, the noise of the souks recedes entirely. Zellige tile catches the light. Orange blossom scents the air. You are elsewhere now.",
      "Days unfold around the courtyard — a morning hammam, an afternoon with a master calligrapher, an evening of Gnawa music performed for you alone in the candlelit salon.",
      "On the final morning, you rise before dawn and are driven to the Agafay desert, where silence and sand await. You sit. You breathe. You understand why you came.",
    ],
    whoIsItFor: [
      "Those who are nourished by beauty, craft, and sensory richness.",
      "Guests drawn to the intersection of spiritual tradition and living culture.",
      "Individuals who seek immersion, not observation.",
    ],
  },
  {
    slug: "bhutan",
    destination: "Bhutan",
    region: "Eastern Himalayas",
    tagline: "Happiness measured in altitude and prayer flags",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "Misty Himalayan mountain valley with traditional Bhutanese architecture",
    duration: "9 Nights",
    groupSize: "Maximum 6",
    season: "March — May, September — November",
    overview: [
      "The last Himalayan kingdom. A nation that measures prosperity in happiness. Bhutan is not a destination — it is a worldview, and this retreat invites guests to inhabit it fully.",
      "Travelling between Paro, Thimphu, and the Punakha Valley, guests engage in walking meditation, archery with local champions, and audience with monastic scholars — all held within the framework of Bhutan's living Buddhist tradition.",
    ],
    included: [
      "Private lodges and heritage farmhouses throughout",
      "Daily guided hikes including the Tiger's Nest approach",
      "Private audience with a Buddhist scholar-monk",
      "Traditional archery with national champions",
      "Farm-to-table Bhutanese cuisine at each lodge",
      "Hot stone bath ceremonies",
      "Sustainable tourism fee and all permits",
    ],
    experience: [
      "Bhutan reveals itself slowly, through altitude and effort. The climb to Tiger's Nest is not tourism — it is pilgrimage, and by the time you arrive, you understand the difference.",
      "Between valleys, the landscape shifts — from pine forest to rice terrace to the white-water rush of the Mo Chhu. At each lodge, the fire is lit before you arrive. Tea is waiting.",
      "On the final evening, a monk performs a blessing in the farmhouse chapel. Prayer flags are strung in your name. They will remain long after you have gone, carrying your intentions into the wind.",
    ],
    whoIsItFor: [
      "Those who walk to think, and think to find stillness.",
      "Guests seeking a culture that has chosen meaning over modernisation.",
      "Individuals ready for a journey that is both physical and deeply interior.",
    ],
  },
  {
    slug: "norwegian-fjords",
    destination: "Norwegian Fjords",
    region: "Scandinavia",
    tagline: "Northern light and infinite quiet",
    image:
      "https://images.unsplash.com/photo-1520769669658-f07657f5a307?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "Norwegian fjord reflecting dramatic mountains under the Northern Lights",
    duration: "7 Nights",
    groupSize: "Maximum 8",
    season: "June — September, January — March",
    overview: [
      "Where the mountains meet the sea in vertical silence. This retreat is set in a timber lodge on the edge of the Sognefjord — Norway's deepest, longest, and most magnificent waterway.",
      "Guests kayak beneath thousand-metre cliffs, forage with a local chef, and — in winter — witness the aurora borealis from a private glass-roofed cabin. The architecture of the landscape itself becomes the retreat.",
    ],
    included: [
      "Private timber lodge on the fjord edge",
      "Daily guided kayaking and wilderness walks",
      "Foraging excursions with a Michelin-trained Nordic chef",
      "Private sauna and cold-water immersion rituals",
      "Aurora viewing cabin (winter season)",
      "Midnight sun hikes (summer season)",
      "All internal transfers by boat and vehicle",
    ],
    experience: [
      "The fjord is still at dawn. Your kayak makes the only sound for miles. Above you, granite walls rise into cloud. Below, the water is so deep it appears black. You are held between two infinities.",
      "The chef meets you at the dock with a basket. Together you walk the hillside — wild thyme, juniper berries, mushrooms that appear only this week, only here. Dinner will tell the story of this day.",
      "In winter, the lodge grows quiet after dark. You walk alone to the glass cabin. Above you, the sky begins to move — green, then violet, then colours that have no name. You do not take a photograph. You do not need to.",
    ],
    whoIsItFor: [
      "Those who are restored by elemental landscapes — water, stone, sky.",
      "Guests who appreciate Nordic design, culinary craft, and deliberate simplicity.",
      "Individuals seeking the particular silence that only the far north provides.",
    ],
  },
];

export function getRetreatBySlug(slug: string): Retreat | undefined {
  return retreats.find((r) => r.slug === slug);
}
