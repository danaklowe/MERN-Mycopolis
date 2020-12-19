const products = [
  {
    name: '100 Shiitake Mushroom Plugs – Lentinus edodes',
    image: '/images/Shiitake-Mushrooms-Plugs.jpg',
    description:
      'Shiitake Mushroom Plugs for Outdoor Mushroom Growing! Sustainable – Grow Shiitake Mushrooms outdoors on Logs and Stumps. Shiitake Mushrooms are not only delectable, but they are also good for you.  Shiitake Mushrooms contain all the necessary amino acids that are needed in our diet. Shiitake is higher in amino acids than peanuts, soybeans, corn and kidney beans. Mushrooms are also a important source of vegetable proteins, iron, fiber, minerals and vitamins.',
    brand: 'Shiitake',
    category: 'Mushroom Kits',
    price: 21.95,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Morel Habitat Kit',
    image: '/images/morel-mushroom-kits-grow-your-own-300x300.jpg',
    description:
      'The Morel Habitat Kit ® was developed so everyone could grow wild morel mushrooms in their back yard and have a personal supply of fresh morel mushrooms to eat each spring. The Morel Habitat Kit ® is not designed for commercial production of morel mushrooms, but it can supply an individual with pounds of morel mushrooms in an earth friendly garden area as small as 4 – 5 sq. ft.  Grow Morel Mushroom Habitats are perennial and may be started any time your soil is workable – Spring, Summer, Fall and even Winter (in areas with a mild climate).  Morel Habitats may be started in any type of soil and have produced morel mushrooms in all areas of the United States that have a definite transition from winter to spring.',
    brand: 'Morel',
    category: 'Mushroom Kits',
    price: 33.95,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Lion’s Mane Mushroom Kit –Hericium erinaceus',
    image: '/images/LionsManeKit.jpg',
    description:
      'Pom Pom  or Lion’s mane is the common name given to a group of mushrooms of the genus Hericium.   Lion’s mane mushrooms have a coral-like shape, with spindly branches that shoot out from the stem. They are white, pinkish or creamy yellow in color, and are noted for their fresh crab-like flavor and texture when cooked.',
    brand: 'Lions Mane',
    category: 'Mushroom Kits',
    price: 19.95,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Blue Oyster Mushroom Kit',
    image: '/images/blueOyster.jpg',
    description:
      'The Blue Oyster Mushroom Kit allows you to grow some of the mushrooms used by the finest chefs in the world easily and quickly almost anywhere in your own home or office. The MUSHROOM LOG takes only a 9″ by 9″ space, requires no more care nor knowledge than a common tropical plant and comes with complete instructions. Mushroom Logs may be placed on a coffee table, counter, or desk – they will produce mushrooms virtually anywhere room temperature is maintained! Now you have the opportunity not only to enjoy watching these exotic mushrooms grow, but also to enjoy eating the freshest mushrooms possible.',
    brand: 'Oyster',
    category: 'Mushroom Kit',
    price: 19.95,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Organic King Oyster Mushroom Kit',
    image: '/images/Trumpet-Royale-mushroom.jpg',
    description:
      'Now you have the opportunity not only to enjoy watching these exotic mushrooms grow but also to enjoy eating the freshest mushrooms possible.  Pleurotus eryngi – Trumpet Royale – King Oyster Mushrooms likes to grow below 70 degrees Fahrenheit; 62 – 67 degrees Fahrenheit is optimal. Trumpet Royale Mushroom logs are produced through methods that integrate cultural, biological, and mechanical practices that foster cycling of resources, promote ecological balance, and conserve biodiversity. The total number of mushrooms you can expect to get on each log may vary from log to log, and depend on your care of the log and the environmental conditions in your home.',
    brand: 'Oyster',
    category: 'Mushroom Kit',
    price: 19.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Organic Reishi-Gen Mushroom Powder',
    image: '/images/red-reishi-mushroom.jpg',
    description:
      'Rei-Shi-Gen is a formulation of two of the most established nutraceutical medicinal mushrooms. Both mushrooms have a long history of use in Traditional Chinese Medicine (TCM) in supporting good health and vitality. Their legendary effects have been supported by recent scientific studies “Shiitake protects against certain cancers, tumors and infections—the latter through antiviral and antibiotic actions.” “Reishi’s bitter properties are due to its rich supply of terpenoids, elite plant chemicals that can work as antioxidants, immune-system stimulants, blood pressure regulators and anti-cholesterol agents.”* Specially selected proprietary strains of both Reishi and Shiitake are used. Their growth is carefully monitored and maintained. These strains are cultured under sterile conditions on a substrate of organic whole grain until they have reached the most active stage of the mushroom life cycle. Then this biomass is processed into powder. Nothing is added or removed – purity is always maintained. Production of all biomass eliminates the variations found in harvested wild mushrooms and allows control over every aspect of culturing, processing, and quality assurance. Size: 4 ounces.',
    brand: 'Reishi',
    category: 'Powder',
    price: 79.99,
    countInStock: 0,
    rating: 3,
    numReviews: 12,
  },

  {
    name: 'Morel Mushrooms, Dried',
    image: '/images/morels-dried.jpg',
    description:
      'Tasting a bit like veal or beef, and possessing a rustic texture the morel is one of the most coveted mushrooms in haute cuisine, particularly French. The definition of fine food when it comes to mushrooms. Size: 4 ounces.',
    brand: 'Morel',
    category: 'Dried Mushrooms',
    price: 72.0,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Porcini Mushrooms, Dried (Grade AA)',
    image: '/images/porcini-mushrooms-premium-grade_5.jpg',
    description:
      'The Grade AA Porcini is one that has the perfect size. The Grade AA Porcini is one that has no worm holes. The Grade AA Porcini is one with an ivory interior and milk chocolate exterior. The Grade AA Porcini is one that produces a dark, fragrant broth whose aroma permeates the room.This is a Porcini that should not be hidden in soups or stews. Dried porcini mushrooms should be sautéed or grilled with a touch of garlic and ginger. It should adorn a steak and be slathered in melted herb butter. It should be the highlight of a salad; the ingredient that everyone eats first before addressing anything green on the plate. Size: 4 ounces.',
    brand: 'Porcini',
    category: 'Dried Mushrooms',
    price: 19.99,
    countInStock: 7,
    rating: 5.0,
    numReviews: 8,
  },
  {
    name: 'Portabella Mushrooms, Dried',
    image: '/images/portobello-mushrooms_2.jpg',
    description:
      'The vegetarian’s savior. This big, meaty mushroom is probably what saved the diet of so many weekend and life long vegetarians. Packed with glutamate and with a meat-like texture this is a perfect stand in for beef. However, the Portabella should be celebrated for its own merits. Size: 4 ounces.',
    brand: 'Portobello',
    category: 'Dried Mushrooms',
    price: 13.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Turkey Tail Mushrooms, Dried',
    image: '/images/turkey-tail-mushrooms.jpg',
    description:
      'One look and you can easily tell how this particular mushroom got its name. Turkey tail mushrooms are considered first and foremost a medicinal mushroom. The leathery mushrooms are usually combined with reishi mushrooms and boiled into a delicate and woodsy tisane to boost immunity and promote wellness. Size: 4 ounces.',
    brand: 'Turkey Tail',
    category: 'Dried Mushrooms',
    price: 9.99,
    countInStock: 11,
    rating: 4.0,
    numReviews: 12,
  },
  {
    name: 'Shiitake Mushroom Caps, Dried',
    image: '/images/flower-top-shitake-caps_2.jpg',
    description:
      'Beautifully ornate and looking like hand carved wood hardware these flower top shiitake caps are one of the most striking mushrooms around. Their flavor is as floral as their appearance while maintaining their meaty flavor. The perfect mushroom when plating matters as much as the taste. Size: 4 ounces.',
    brand: 'Shiitake',
    category: 'Dried Mushrooms',
    price: 19.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Bolete Mushroom Powder',
    image: '/images/bolete_mushroom_powder.jpg',
    description:
      'An edible mushroom that originated in Western Europe and then spread out through Eastern Europe and South America. They grow under the dark and damp shade of conifer and hardwood forests where they bulk up their fat bottoms and spongy caps (which are porous instead of having gills like most mushrooms). The bolete grows chubby and large; so much so it is often considered the King of the Mushrooms. In fact, some boletes can grow to be 18 inches tall and more than a foot in diameter. The taste of a bolete is hit or miss. Dried, the bolete reeks of dark soy sauce and Chinese black vinegar. That being the case we love to dust freshly made dishes of udon or ramen with this bolete powder. In addition, Bolete mushroom powder makes a seriously addicting rub for beef ribs when mixed with salt, black pepper, and thyme. Size: 4 ounces.',
    brand: 'Bolete',
    category: 'Powder',
    price: 14.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
];

export default products;
