import { Continent } from '@prisma/client';

const continentsData: Continent[] = [
  {
    id: 1,
    name: 'Africa',
    bio: "Africa straddles the equator which bestows a rich diversity of wildlife and landscapes on the world's second largest continent. Large predators roam the sweeping savannas among huge herds of grazing herbivores, while apes, monkeys and snakes inhabit its dark, dense forests. Widely regarded as the place where human life originated, Africa is home to many of the world's best loved and most fascinating animals, as well as to some of its most endangered. Yet it's also home to many species that are as familiar to us in the UK as they are to Africans.",
    image_url:
      'https://our-planet.s3-us-west-2.amazonaws.com/continents/africa.jpg',
  },
  {
    id: 2,
    name: 'Antarctica / Arctic',
    bio: `Antarctica holds the record for being the coldest place on Earth, which together with extensive ice cover and lack of winter sunlight makes the continent pretty inhospitable to life. The sea, rather than the land, is what supports most creatures such as penguins and seals. It's often warmer than the land, so is a good place to retreat to and warm up to a balmy -2 Celsius. Permanently land-living plants and animals in Antarctica are small and ground-hugging to avoid wind chill and the accompanying dehydration.
  The Arctic ice cap first formed some three million years ago, providing a new habitat - polar pack ice - for mammals and birds to exploit. Seals and polar bears are now the primary inhabitants of this sea ice. The bears travel over it and the seals under, meeting at the seals' breathing holes, to the detriment of the seals! On land, plants tough enough to survive the Arctic cold form the habitat known as tundra. Because of the harsh climate and prolonged darkness, many animals migrate away from the dark Arctic for the winter, returning to take advantage of the 24 hour summer sunshine to breed.`,
    image_url:
      'https://our-planet.s3-us-west-2.amazonaws.com/continents/antarctica+arctic.jpg',
  },
  {
    id: 3,
    name: 'Asia',
    bio: "Asia covers a vast area that reaches almost halfway round the Earth from east to west. As you'd expect with such a huge land area, it contains a diverse array of habitats. Biogeographically, Asia is part of the Eurasian landmass and some species - such as bears and golden eagles - are found on both continents. Asia began to take its present form about 50-55 million years ago when the Indian tectonic plate collided with the main body of Asia, birthing the Himalayas and the Tibetan Plateau and cutting the warm south off from the cold heart of the continent.",
    image_url:
      'https://our-planet.s3-us-west-2.amazonaws.com/continents/asia.jpg',
  },
  {
    id: 4,
    name: 'Australia',
    bio: "Australia's unusual fauna and flora is due to the continent having been isolated for millions of years. Continental drift tore Australia away from Africa and Antarctica and sent it on a 45 million year journey northwards. The original mammal passengers on this journey were the marsupials and egg layers (the monotremes). About 15 million years ago, as Australia drifted closer to Asia, rodents floated and bats flew over the sea to become the first placental mammal colonists. The journey north combined with global cooling to dry Australia out and give rise to its characteristic drought and fire-resistant plants.",
    image_url:
      'https://our-planet.s3-us-west-2.amazonaws.com/continents/australia.jpg',
  },
  {
    id: 5,
    name: 'Europe',
    bio: "Europe is defined as a separate continent in political terms, but biogeographically it's part of Eurasia. Europe has few natural wilderness areas as most of its habitats have been created or influenced by mankind over millennia. Left alone, most of Europe would revert to forest, as it was after the end of the last ice age. Even today, some 25% of the land is forested, if you include managed woodlands. Europe's original fauna and flora were therefore mostly forest dependant or tolerant species, such as bears, boar and badgers. As agriculture opened up the landscape, opportunities arose for other species.",
    image_url:
      'https://our-planet.s3-us-west-2.amazonaws.com/continents/europe.jpg',
  },
  {
    id: 6,
    name: 'North America',
    bio: "During its history, North America has been in contact with South America and Eurasia, and been colonised by animals and plants from both landmasses. Some of these have gone on to evolve into new species in their new home. North America also had native creatures that evolved in situ and spread across the world later, such as the horse family and reindeer. Those mountain ranges that run north to south, such as the Rockies and the Sierra Nevada, influence the continent's climate and create barriers to the movement of animals which makes for distinct ecological regions on either side.",
    image_url:
      'https://our-planet.s3-us-west-2.amazonaws.com/continents/north+america.jpg',
  },
  {
    id: 7,
    name: 'South America',
    bio: "Home to marsupials, monkeys and the world's largest rainforest, South America is the continent with everything - from glaciers to deserts. It became a continent in its own right on breaking away from Africa and Antarctica 120 million years ago. Its fauna and flora are therefore descended from organisms either on the continent then (marsupials, for instance) or that managed to make their way there during its isolation, New World monkeys for example, whose ancestors crossed the early Atlantic Ocean from Africa. Three million years ago, the Isthmus of Panama formed, uniting North and South America and allowing animals including big cats, bears, coral snakes and condors to move in.",
    image_url:
      'https://our-planet.s3-us-west-2.amazonaws.com/continents/south+america.jpg',
  },
  {
    id: 8,
    name: 'Oceans',
    bio: "To succinctly sum up the vast amount of life in our oceans would be near impossible. However, the Great Barrier Reef stands as an excellent example of the incredible variety of aquatic life. There is no doubt that the Great Barrier Reef is one of the world's richest areas of diversity; supporting a dazzling array of colourful corals, sponges, anemones and worms. Many species of tropical fish, birds, mammals and reptiles are also found here. No wonder it is one of the jewels in Australia's crown and a UNESCO World Heritage Site. Sadly, pollution, climate change and outbreaks of the crown-of-thorns starfish are all threats to this fragile ecosystem.",
    image_url:
      'https://our-planet.s3-us-west-2.amazonaws.com/continents/oceans.jpg',
  },
];

export default continentsData;
