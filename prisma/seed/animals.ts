const animalsData = [
  {
    name: 'Arctic Fox',
    status: 'Least Concern',
    population: 'Several Hundred Thousand',
    scientific_name: 'Vulpes lagopus',
    height: '11 inches',
    weight: '3 to 20 pounds',
    length: '18 to 27 inches',
    habitat: 'Antarctica / Arctic',
    facts:
      'The Arctic fox is primarily a carnivore that lives inland, away from the coasts. They are dependent on the presence of smaller animals (most often lemmings) to survive.  Arctic foxes also hunt for sea birds, fish, and other marine life. Smaller rodent populations waver between times of abundance and scarcity, which leaves the Arctic fox vulnerable when these creatures are low in numbers.',
    human_benefit:
      'The protection of the Arctic fox ensures the safety of a variety of other wildlife in the Arctic region.',
    id: 1,
  },
  {
    name: 'Arctic Wolf',
    status: 'Least Concern',
    population: '',
    scientific_name: 'Vulpes lagopus',
    height: '',
    weight: '70 to 175 pounds',
    length: '3.2 to 5.9 feet',
    habitat: 'Antarctica / Arctic',
    facts:
      'Often called the "polar wolf" or "white wolf," Arctic wolves inhabit the Arctic regions of North America and Greenland. Thanks to its isolation, the Arctic wolf is not threatened by hunting and habitat destruction in the same way as its southern relatives.',
    human_benefit:
      'Arctic wolves are carnivorous hunters. By nature they help to control the populations of other animals in the region like the musk ox, caribou and Arctic hares.',
    id: 2,
  },
  {
    name: 'Bowhead Whale',
    status: 'Least Concern',
    population: 'Approximately 10,000',
    scientific_name: 'Balaena mysticetus',
    height: '',
    weight: '75 - 100 tons',
    length: 'Average of 50 - 60 feet',
    habitat: 'Oceans',
    facts:
      'This predominantly Arctic species is associated with ice floes. Its movement patterns are therefore influenced by the melting and freezing of the ice.\n' +
      '  Bowhead whales are capable of breaking through sea ice at least seven inches thick with their large skulls and powerful bodies.\n' +
      '  Adult bowheads are entirely black except the front part of the lower jaw which is white and prominently upturned. They can grow up to 60 feet long while still being able to leap entirely out of water. Bowheads filter their food through baleen by opening their mouths and straining plankton from the surface, the water column, or the sea floor.\n' +
      '  Data has shown that bowhead whales may be among the longest-lived animals on earth. Based on the recovery of stone harpoon tips in their blubber, and from analysis of eye tissue, scientists believe that the life-span of bowhead whales can be over 200 years.',
    human_benefit:
      'Whales are at the top of the food chain and have an important role in the overall health of the marine environment. The bowhead whale’s conservation status is listed as “least concern” overall, but some populations (such as near Greenland) are endangered. They have traditionally been hunted by commercial whalers until the last century for oil, meat, and baleen.  Today, native communities in both the U.S. and Russia hunt bowheads for subsistence purposes. This subsistence whaling is approved and its sustainability is ensured by the International Whaling Commission (IWC).',
    id: 3,
  },
  {
    name: 'Brown Bear',
    status: 'Least Concern',
    population: 'Over 200,000',
    scientific_name: 'Ursus arctos',
    height: '3.35 feet to shoulders',
    weight: 'Up to 1,500 lbs',
    length: '6.5 feet',
    habitat: 'Antarctica / Arctic',
    facts:
      'Few animals have captured the imagination like brown bears. They can stand on two legs, walk on the soles of their feet, pick things up with their “fingers,” and often eat what we eat. This—coupled with their ability to communicate with one another through scratch marks left on trees, smells and sounds— establishes a similarity to our own way of life. Some of the largest living carnivores, brown bears have fallen prey to hunting and other conflicts with humans.',
    human_benefit:
      'While brown bear population numbers are currently stable, they are considered a high priority in conservation. Given their dependence on large natural areas, brown bears are important management indicators for a number of other wildlife species. Brown bears also play important roles as predators who keep other animal populations in check. Additionally, they act as seed dispersers, helping to sustain their own environment.',
    id: 4,
  },
  {
    name: 'Gray whale',
    status: 'Least Concern',
    population:
      'estimated 150 individuals (western population); stable (eastern population)',
    scientific_name: 'Eschrichtius robustus',
    height: '',
    weight: '',
    length: 'Between 40 and 50 feet long',
    habitat: 'Oceans',
    facts:
      'Gray whales have a hump and a ridge of sharp bumps along their backs, instead of a dorsal fin. They are a type of baleen whale, which means they filter food from the water through special bristly structures in their mouths. Gray whales stay close to shore and feed in shallow water. Their well-known migrations take them between feeding and breeding areas, swimming as much as 12,000 miles round trip.\n' +
      '   Critically endangered western gray whales migrate into their summer feeding grounds near Sahkalin Island, Russia in late May or early June and return to their winter feeding grounds in the South China Sea in late autumn. Summer feeding grounds for the eastern population lie in the Bering and Chukchi Seas between Alaska and Russia. In the winter, these eastern gray whales migrate south along the west coast of the U.S to Mexico to breed and have their calves.',
    human_benefit:
      'Whales are at the top of the food chain and have an important role in the overall health of the marine environment. They are also highly vulnerable to human activities in the ocean.',
    id: 5,
  },
  {
    name: 'Macaw',
    status: 'Least Concern',
    population: '',
    scientific_name: 'Ara ararauna',
    height: '',
    weight: '',
    length: '',
    habitat: 'South America',
    facts:
      "The Amazonian rain forest is a bird lover's paradise, home to over a thousand different species, including the blue-and-yellow macaw. Macaws are highly intelligent, mate for life and can live up to 60 years. The vibrant color and pattern of their feathers make them a popular species in the illegal pet trade, which has devastated populations of wild exotic birds.",
    human_benefit: '',
    id: 6,
  },
  {
    name: 'Pronghorn',
    status: 'Least Concern',
    population: 'about 1 million',
    scientific_name: 'Antilocarpa americana',
    height: 'Approximately 3 feet at the shoulder',
    weight: '110 - 125 pounds',
    length: '39 - 59 inches',
    habitat: 'North America',
    facts:
      'The pronghorn antelope is the fastest hoofed animal in North America and is capable of reaching speeds up to 60 mph. Most pronghorn populations remain stable, but have experienced a historic decline. Pronghorn follow the same migration corridors year after year, generation after generation. Today, the thoroughfares that link the summer breeding grounds and winter grazing areas are being fragmented by roads, cities, fences and energy development. These fragmentations threaten the migratory routes and survival of pronghorn.',
    human_benefit:
      'Pronghorn are an indicator of healthy sagebrush systems which can suffer from fragmentation and degradation. They are North America’s fastest land mammal and embark on the longest land migration of any hoofed animal in America’s lower 48 states.',
    id: 7,
  },
  {
    name: 'Skipjack Tuna',
    status: 'Least Concern',
    population: '',
    scientific_name: 'Katsuwonus pelamis',
    height: '',
    weight: '40 pounds',
    length: 'Up to 3 feet',
    habitat: 'Oceans',
    facts:
      'Skipjack are the smallest and most abundant of the major commercial tuna species. They have a streamlined body that is mostly without scales. Their backs are dark purple-blue and their lower sides and bellies are silver with four to six dark bands. Skipjack can live as long as 8-10 years. They are found mainly in the tropical areas of the Atlantic, Indian and Pacific Oceans, with the greatest abundance seen near the equator. Skipjack usually swim near the surface at night and can dive up to 850 feet during the day. Large schools of adult skipjack tuna often mix with juvenile yellowfin and bigeye tuna.',
    human_benefit:
      'Skipjack are commercially important as the main species of canned tuna. Although tuna do provide food and livelihoods for people, they are more than just seafood. Tuna are a top predator in the marine food chain, maintaining a balance in the ocean environment.',
    id: 8,
  },
  {
    name: 'Swift Fox',
    status: 'Least Concern',
    population: '',
    scientific_name: 'Vulpes velox',
    height: '12 inches',
    weight: '5 - 7 pounds',
    length: '23 - 34 inches',
    habitat: 'North America',
    facts:
      'Although historically common and widely distributed in short- and mixed-grass prairies of the Great Plains, swift foxes have experienced significant population declines and are now estimated to occupy less than half of their historic range in the United States. In the face of this enormous decline, a multi-stakeholder, comprehensive approach is required to restore swift fox populations across the Northern Great Plains and beyond. Collaboration among tribal communities, universities, conservation organizations, state and government agencies, and private landowners is essential for the swift fox to make a viable comeback.',
    human_benefit:
      'Where present, swift foxes are indicators an intact grassland ecosystem. Conserving habitat for and populations of swift foxes benefits other wildlife species that share similar habitat, such as prairie dogs, ground squirrels, and grassland birds.',
    id: 9,
  },
  {
    name: 'Tree Kangaroo',
    status: 'Least Concern',
    population: '',
    scientific_name: 'Dendrolagus sp.',
    height: '',
    weight: 'up to 32 pounds',
    length: '16 to 30 inches, tail length additional 16 to 34 inches',
    habitat: 'Australia',
    facts:
      'The same factors that threaten the golden-mantled tree kangaroo also put many of the 13 other tree kangaroo species at risk. Many tree kangaroo species are incredibly rare and most are decreasing in number. These animals represent an interesting divergence in the evolution of Macropods—the family of marsupials that includes kangaroos and wallabies. Macropods were once all tree dwellers but millions of years ago they descended from the trees to live on the ground. The ancestors of tree kangaroos eventually headed back up into the foliage and they are now the largest tree-dwelling mammals in Australia.\n' +
      '  Tree kangaroos live in lowland and mountainous rainforests in Papua New Guinea, Indonesia and the far north of Queensland, Australia. They have adapted to life in the trees, with shorter legs and stronger forelimbs for climbing, giving them somewhat of the appearance of a cross between a kangaroo and a lemur.',
    human_benefit:
      'Millions of years ago the ancestors of Macropods—the family of marsupials that includes kangaroos and wallabies—descended from the trees. But one group of Macropods, known as tree kangaroos, eventually returned to that arboreal life.',
    id: 10,
  },
  {
    name: 'Albacore Tuna',
    status: 'Near Threatened',
    population: '',
    scientific_name: 'Thunnus alalunga',
    height: '',
    weight: '',
    length: 'Up to 4 feet long',
    habitat: 'Oceans',
    facts:
      'Albacore is one of the smaller tuna species, reaching sizes between skipjack and yellowfin. They are bullet-shaped with a dark blue back and lighter blue-gray sides and belly. Albacore tuna also have very long pectoral fins and live for around 12 years. They tend to travel in single species schools, without the level of mixing as seen in other species and migrate throughout all ocean waters and the Mediterranean.',
    human_benefit:
      'These fish are important commercially, as they are one of the two main canned tuna species (along with skipjack), and labeled as ‘solid white’ tuna. Although tuna do provide food and livelihoods for people, they are more than just seafood. Tuna are a top predator in the marine food chain, maintaining a balance in the ocean environment.',
    id: 11,
  },
  {
    name: 'Beluga',
    status: 'Near Threatened',
    population: 'over 150,000',
    scientific_name: 'Delphinapterus leucas',
    height: '',
    weight: '1500 - 3500 pounds (up to 1.5 tons)',
    length: '8.5 to 22 feet',
    habitat: 'Oceans',
    facts:
      'Belugas are extremely sociable mammals that live, hunt and migrate together in pods, ranging from a few individuals to hundreds of whales. Their bulbous forehead, called a "melon”, is flexible and capable of changing shape. This allows them to make different facial expressions. Belugas can produce a series of chirps, clicks, whistles and squeals, which give the beluga its other name, "the canary of the sea." They may sound like music or even nonsense to us, but to fellow belugas they convey important information.\n' +
      '  Many populations of belugas migrate as the sea ice changes in the Arctic. They move south in the fall as the ice forms and then return to feed again in the spring, as the ice breaks up. They can also be found near river mouths, and sometimes even venture up river. Belugas feed on a variety of fish species, such as salmon and herring, as well as shrimp, crabs and mollusks.',
    human_benefit:
      'Whales, like the beluga, are at the top of the food chain and have an important role in the overall health of the marine environment. Beluga whales are also culturally important to indigenous communities in the Arctic. Like polar bears, the beluga depends on sea ice for its existence and can be directly impacted by climate change.',
    id: 12,
  },
  {
    name: 'Greater Sage-grouse',
    status: 'Near Threatened',
    population: '100,000 to 500,000',
    scientific_name: 'Centrocercus urophasianus',
    height: '2 feet',
    weight: '2 - 7 pounds',
    length: '21 - 30 inches',
    habitat: 'North America',
    facts:
      'Greater sage-grouse were once found across 13 western U.S. states and 3 Canadian provinces. Unfortunately, because of oil and gas development, conversion of land for agricultural use, climate change and human development, sage-grouse only inhabit half their historic range. Well known for their spectacular mating dances performed on specific mating grounds called "leks," these large birds are icons in the western U.S. and Canada.',
    human_benefit:
      'Sage-grouse are indicators of healthy, intact sagebrush habitat. The protection of sage-grouse impacts the other species that share the same habitat, such as pronghorn and songbirds.',
    id: 13,
  },
  {
    name: 'Jaguar',
    status: 'Near Threatened',
    population: '',
    scientific_name: 'Panthera onca',
    height: '',
    weight: '',
    length: 'Up to 6 ft.',
    habitat: 'South America',
    facts:
      'Jaguars are strong swimmers and climbers and require large areas of tropical rain forest and stretches of riverbank to survive. Hunting and habitat loss due to deforestation continue to threaten the survival of these marvelous cats. The World Wildlife Fund has worked with the government of Brazil to successfully protect large blocks of Amazon forest for the jaguar.',
    human_benefit: '',
    id: 14,
  },
  {
    name: 'Mountain Plover',
    status: 'Near Threatened',
    population: '15,000 - 20,000',
    scientific_name: 'Charadrius montanus',
    height: '5 - 9 inches',
    weight: '3.6 ounces',
    length: '8 - 10 inches',
    habitat: 'North America',
    facts:
      "Mountain plovers are one of only 12 grassland birds endemic to the western Great Plains. They nest across the western Great Plains and Rocky Mountain states, from the Canadian border to northern Mexico, and winter in California, southern Arizona, Texas and Mexico. Mountain plovers only nest in areas with sparse vegetation or bare ground, such as prairie dog towns. Loss of these areas because of crop planting or the removal of prairie dogs, is the biggest threat to the mountain plover's population.",
    human_benefit: '',
    id: 15,
  },
  {
    name: 'Narwhal',
    status: 'Near Threatened',
    population: 'More than 80,000',
    scientific_name: 'Monodon monoceros',
    height: '',
    weight: 'Up to 4200 pounds',
    length: 'Up to 17 feet',
    habitat: 'Oceans',
    facts:
      'The narwhal looks like a cross between a whale and a unicorn with its long, spiraled tusk jutting from its head. Males most commonly have tusks, and some may even have two. The tusk, which can grow as long as 10 feet, is actually an enlarged tooth. Ongoing research indicates that the tusk has sensory capability, with up to 10 million nerve endings inside. The tusk may also play a role in the ways males exert dominance.\n' +
      '  Narwhals spend their lives in the Arctic waters of Canada, Greenland, Norway and Russia. The majority of the world’s narwhals winter for up to five months under the sea ice in the Baffin Bay-Davis Strait area (between Canada and western Greenland). Cracks in the ice allow them to breathe when needed, especially after dives, which can be up to a mile and a half deep. They feed mainly on Greenland halibut, along with other fish, squid and shrimp.',
    human_benefit:
      'Whales, like the narwhal, are at the top of the food chain and have an important role in the overall health of the marine environment. Narwhals are also culturally important to indigenous communities in the Arctic. Like polar bears, the narwhal depends on sea ice for its existence and can be directly impacted by climate change.',
    id: 16,
  },
  {
    name: 'Plains Bison',
    status: 'Near Threatened',
    population: '20,504',
    scientific_name: 'Bison bison bison',
    height: '',
    weight: '701 to 2,000 pounds',
    length: '7 - 12 ft.',
    habitat: 'North America',
    facts:
      'Symbols of strength and determination, bison are Ice Age survivors. Clearing away snow and brush with their massive heads, they weigh up to 2,000 pounds and can run up to 40 miles per hour. Once numbering 30-60 million in North America, their numbers were decimated in just a few decades as expansion pressed westward. No other species on Earth has declined so quickly.',
    human_benefit:
      'Historically bison were the dominant grazer on the Northern Great Plains landscape. This dominance shaped the landscape by affecting the pattern and structure of the grasses and vegetation that grew. Expansive areas of native grasslands allowed animals to flourish along with many species of other prairie wildlife.',
    id: 17,
  },
  {
    name: 'White Rhino',
    status: 'Near Threatened',
    population: '19,600 – 21,000',
    scientific_name: 'Ceratotherium simum',
    height: '5 - 6 feet',
    weight: '3,080 - 7,920 pounds',
    length: '',
    habitat: 'Africa',
    facts:
      'White rhinos are the second largest land mammal and their name comes from the Afrikaan’s, a West Germanic language, word “weit” which means wide and refers to the animal’s muzzle. Also known as the square-lipped rhinoceros, white rhinos have a square upper lip with almost no hair. The majority (98.8%) of white rhinos occur in just four countries: South Africa, Namibia, Zimbabwe, and Kenya. Northern white rhinos and southern white rhinos are genetically distinct subspecies and are found in two different regions in Africa. Southern white rhinos were thought to be extinct in the late 19th century, but in 1895 a small population of less than 100 individuals was discovered in Kwazulu-Natal, South Africa. After more than a century of protection and management, they are now classified as Near Threatened and 19,600 – 21,000 animals exist in protected areas and private game reserves. They are the only rhinos that are not endangered.',
    human_benefit:
      'In almost all rhino conservation areas, there are other valuable plants and animals. The protection of rhinos helps protect other species. Rhinos contribute to economic growth and sustainable development through the tourism industry, which creates job opportunities and provides tangible benefits to local communities living alongside rhinos.',
    id: 18,
  },
  {
    name: 'Yellowfin Tuna',
    status: 'Near Threatened',
    population: '',
    scientific_name: 'Thunnus albacares',
    height: '',
    weight: 'Up to 450 pounds',
    length: 'Up to 7 feet',
    habitat: 'Oceans',
    facts:
      'Yellowfin tuna are torpedo-shaped with dark metallic blue backs, yellow sides, and a silver belly. They have very long anal and dorsal fins and finlets that are bright yellow. Yellowfin can live up to six or seven years. They are highly migratory and are found throughout the Pacific, Atlantic and Indian Oceans. They form schools with other tunas like skipjack and bigeye, and are also known to associate with dolphins.',
    human_benefit:
      'Yellowfin are an important commercial tuna species, particularly the raw sashimi market. Although tuna do provide food and livelihoods for people, they are more than just seafood. Tuna are a top predator in the marine food chain, maintaining a balance in the ocean environment.',
    id: 19,
  },
  {
    name: 'African Elephant',
    status: 'Vulnerable',
    population: 'Approximately 415,000 in the wild',
    scientific_name: 'Loxodonta africana',
    height: 'Shoulder height is 11 feet',
    weight: '6 tons',
    length: '19 - 24 feet',
    habitat: 'Africa',
    facts:
      'The African elephant is the largest animal walking the Earth. Their herds wander through 37 countries in Africa. They are easily recognized by their trunk that is used for communication and handling objects. And their large ears allow them to radiate excess heat. Upper incisor teeth develop into tusks in African elephants and grow throughout their lifetime. There are two subspecies of African elephants—the Savanna (or bush) elephant and the Forest elephant. Savanna elephants are larger than forest elephants, and their tusks curve outwards. In addition to being smaller, forest elephants are darker and their tusks are straighter and point downward. There are also differences in the size and shape of the skull and skeleton between the two subspecies.',
    human_benefit:
      'The presence of African elephants helps to maintain suitable habitats for many other species. In central African forests, up to 30 percent of tree species may require elephants to help with dispersal and germination. They play a pivotal role in shaping their habitat because of the enormous impact they have on factors ranging from fresh water to forest cover.',
    id: 20,
  },
  {
    name: 'Bigeye Tuna',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Thunnus obesus',
    height: '',
    weight: 'Up to 460 pounds',
    length: 'Up to 6 feet',
    habitat: 'Oceans',
    facts:
      'Bigeye tuna are generally smaller than bluefin and larger than yellowfin. They are long and streamlined, have dark metallic blue on their backs and upper sides, and are nearly white on their lower sides and belly. They can live as long as 10 to 12 years. Bigeye are found in the subtropical and tropical areas of the Atlantic (but not in the Mediterranean), Indian and Pacific Oceans.',
    human_benefit:
      'Bigeye tuna are an important commercial fish, usually marketed as fresh or frozen. Although tuna do provide food and livelihoods for people, they are more than just seafood. Tuna are a top predator in the marine food chain, maintaining a balance in the ocean environment.',
    id: 21,
  },
  {
    name: 'Black Spider Monkey',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Ateles paniscus',
    height: '16 - 24 inches',
    weight: '15 - 19 pounds',
    length: '16 - 24 inches (body), 24 - 32 inches (tail)',
    habitat: 'South America',
    facts:
      'The black spider monkey—also known as the Guiana or red-faced spider monkey—is found in eastern South America in areas north of the Amazon River. They are one of seven species of spider monkeys found in Latin America and one of the largest primate species in South America.',
    human_benefit:
      'The black spider monkey is an essential part of the tropical rainforest ecosystem. They play a key role in seed dispersal, allowing their forest environment to continue to grow and thrive.',
    id: 22,
  },
  {
    name: 'Dugong',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Dugong dugon',
    height: '',
    weight: 'Over 800 pounds',
    length: 'Nearly 10 feet',
    habitat: 'Oceans',
    facts:
      'Dugongs are cousins of manatees and share a similar plump appearance, but have a dolphin fluke-like tail. And unlike manatees, which use freshwater areas, the dugong is strictly a marine mammal. Commonly known as "sea cows," dugongs graze peacefully on sea grasses in shallow coastal waters of the Indian and western Pacific Oceans.',
    human_benefit:
      'Dugongs have become an important tourist attraction. Tourists can swim with them or observe them from boats.',
    id: 23,
  },
  {
    name: 'Forest Elephant',
    status: 'Vulnerable',
    population: '',
    scientific_name: '',
    height: '8 - 10 feet',
    weight: '2 - 5 tons',
    length: '',
    habitat: 'Africa',
    facts:
      'Forest elephants are an elusive subspecies of African elephants and inhabit the densely wooded rainforests of west and central Africa. Their preference for dense forest habitat prohibits traditional counting methods such as visual identification. Their population is usually estimated through "dung counts"—an analysis on the ground of the density and distribution of the feces.\n' +
      '  Forest elephants are smaller than savanna elephants, the other African elephant subspecies. Their ears are more oval-shaped ears and their tusks are straighter and point downward (the tusks of savanna elephants curve outwards). There are also differences in the size and shape of the skull and skeleton. Forest elephants are found most commonly in countries with relatively large blocks of dense forest such as Gabon, the Democratic Republic of Congo (DRC), Cameroon and Central African Republic in central Africa and Côte d’Ivoire, Liberia, and Ghana in west Africa.',
    human_benefit:
      'Forest elephants are found in dense forests and are essential for the germination of many rain forest trees. The seeds of these trees only germinate after passing through the elephant’s digestive tract.',
    id: 24,
  },
  {
    name: 'Giant Panda',
    status: 'Vulnerable',
    population: '1,864 in the wild',
    scientific_name: 'Ailuropoda melanoleuca',
    height: 'Adults can grow to more than four feet.',
    weight: '220 - 330 pounds',
    length: '',
    habitat: 'Asia',
    facts:
      'This peaceful creature with a distinctive black and white coat is adored by the world and considered a national treasure in China.\n' +
      '  Pandas live mainly in bamboo forests high in the mountains of western China, where they subsist almost entirely on bamboo. They must eat from 26 to 84 pounds of it every day, a formidable task for which they use their enlarged wrist bones that function as opposable thumbs.\n' +
      '  A newborn panda is about the size of a stick of butter—about 1/900th the size of its mother—but can grow to up to 330 pounds as an adult. These bears are excellent tree climbers despite their bulk.',
    human_benefit:
      'Pandas play a crucial role in the bamboo forests where they roam by spreading seeds and facilitating growth of vegetation. In the Yangtze Basin where pandas live, the forests are home to a stunning array of wildlife such as dwarf blue sheep, multicolored pheasants and other endangered species, including the golden monkey, takin and crested ibis.\n' +
      '  The panda’s habitat is at the geographic and economic heart of China, home to millions of people. By making this area more sustainable, we are also helping to increase the quality of life of local populations. Pandas bring huge economic benefits to local communities through ecotourism.',
    id: 25,
  },
  {
    name: 'Giant Tortoise',
    status: 'Vulnerable',
    population: '',
    scientific_name: '',
    height: '',
    weight: 'Up to 700 pounds',
    length: 'Up to 4 feet long',
    habitat: 'Oceans',
    facts:
      'There are many subspecies of giant tortoises that are found on different islands and have different appearances. Those that live on the larger islands where there is more rain have “dome” shaped shells, while those that live in drier conditions are smaller tortoises and have a “saddleback” shell.\n' +
      '  On June 24, 2012, the world-famous giant tortoise affectionately known as “Lonesome George” passed away. He was the last surviving land tortoise from Pinta Island, one of the northern islands in the Galápagos. Thought to be 100 years old, Lonesome George lived at the Charles Darwin Research Station since he was found in 1971. For more than three decades, the Galápagos National Park tried to save the Pinta subspecies by finding George a mate. Unfortunately they did not succeed. Sadly with Lonesome George’s passing, there will be no more Pinta Island tortoises.',
    human_benefit:
      'The giant tortoise is an iconic species from the Galápagos and is only found on these islands. They are the largest living tortoise in the world.',
    id: 26,
  },
  {
    name: 'Great White Shark',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Carcharodon carcharias',
    height: '',
    weight: '4,000 - 7,000 pounds',
    length: '16 - 20 feet',
    habitat: 'Oceans',
    facts:
      "The great white shark is the world's largest known predatory fish. It has 300 teeth, yet does not chew its food. Sharks rip their prey into mouth-sized pieces which are swallowed whole. The shark’s heavy, torpedo-shaped body allows it to cruise efficiently for long periods of time, and then suddenly switch to high speed bursts in pursuit of prey—sometimes leaping out of the water. It feeds on a broad spectrum of prey, from small fish, such as halibut, to large seals and dolphins.",
    human_benefit:
      'As large and powerful predators, great white sharks play an important role at the top of the marine food chain. Despite its fame and reputation, little is actually known about the great white shark’s biology and behavior.',
    id: 27,
  },
  {
    name: 'Greater One-Horned Rhino',
    status: 'Vulnerable',
    population: '3,500+ individuals',
    scientific_name: 'Rhinoceros unicornis',
    height: '5.75 - 6.5 feet',
    weight: '4,000 - 6,000 pounds',
    length: '10 - 12.5 feet',
    habitat: 'Asia',
    facts:
      'The greater one-horned rhino (or “Indian rhino”) is the largest of the rhino species. Once widespread across the entire northern part of the Indian sub-continent, rhino populations plummeted as they were hunted for sport or killed as agricultural pests. This pushed the species very close to extinction and by the end of the 20th century, fewer than 200 animals remained.\n' +
      '  The recovery of the greater one-horned rhino is among the greatest conservation success stories in Asia. Thanks to strict protection and management from Indian and Nepalese wildlife authorities, the greater one-horned rhino was brought back from the brink. Today populations have increased to around 3,500 rhinos in northeastern India and the Terai grasslands of Nepal.',
    human_benefit:
      'Rhinos share their homes with other valuable plants and animals. When we protect greater one-horned rhinos, we also help protect these other species. These rhinos are also a symbol of national pride in the countries where they are found, which inspires environmental stewardship among local communities. These communities also benefit from the revenue generated through rhino ecotourism.',
    id: 28,
  },
  {
    name: 'Hippopotamus',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Hippopotamus amphibius',
    height: '',
    weight: '',
    length: '',
    habitat: 'Africa',
    facts:
      'The hippopotamus, also known as the “river horse,” lives along the rivers and lakes throughout sub-Saharan Africa. Weighing up to 8,000 pounds, the hippo is the heaviest land animal after the elephant. Hippos seek refuge from the heat by living in water during the day, and at night they come ashore to feed on short, soft grasses and fallen fruit. The eyes and ears of a hippopotamus are on top of its head, so it can keep watch for enemies—mainly crocodiles—while lying low in the water. These giants are currently at risk from habitat loss.',
    human_benefit: '',
    id: 29,
  },
  {
    name: 'Irrawaddy Dolphin',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Orcaella brevirostris',
    height: '',
    weight: '198 - 440 pounds',
    length: '5.9 - 9 feet',
    habitat: 'Oceans',
    facts:
      'Irrawaddy dolphins are found in coastal areas in South and Southeast Asia, and in three rivers: the Ayeyarwady (Myanmar), the Mahakam (Indonesian Borneo) and the Mekong. The Mekong River Irrawaddy dolphins inhabit a 118-mile stretch of the river between Cambodia and Lao PDR and are scarce—between 78 and 91 individuals are estimated to still exist. These dolphins have a bulging forehead, short beak, and 12-19 teeth on each side of both jaws.',
    human_benefit:
      'The protection of the Irrawaddy dolphin is crucial for the overall health of the Mekong River—home to an estimated 1,100 species of fish. The Irrawaddy dolphin is also regarded as a sacred animal by both Khmer and Lao people, and is an important source of income and jobs for communities involved in dolphin-watching ecotourism.',
    id: 30,
  },
  {
    name: 'Leatherback Turtle',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Dermochelys coriacea',
    height: '',
    weight: '600 - 1500 pounds',
    length: '55 - 63 inches',
    habitat: 'Oceans',
    facts:
      'Leatherback turtles are named for their shell, which is leather-like rather than hard, like other turtles.\n' +
      '  They are the largest sea turtle species and also one of the most migratory, crossing both the Atlantic and Pacific Oceans. Pacific leatherbacks migrate from nesting beaches in the Coral Triangle all the way to the California coast to feed on the abundant jellyfish every summer and fall.\n' +
      '  Although their distribution is wide, numbers of leatherback turtles have seriously declined during the last century as a result of intense egg collection and fisheries bycatch. Globally, leatherback status according to IUCN is listed as Vulnerable, but many subpopulations (such as in the Pacific and Southwest Atlantic) are Critically Endangered.',
    human_benefit:
      'Marine turtles are the living representatives of a group of reptiles that has existed on Earth and traveled our seas for the last 100 million years. They are a fundamental link in marine ecosystems. Leatherback turtles consume large numbers of jellyfish which helps to keep populations of these marine organisms in check. Marine turtles, including leatherbacks, also provide a vital source of income as a draw for ecotourism in coastal communities, especially in the Coral Triangle.',
    id: 31,
  },
  {
    name: 'Loggerhead Turtle',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Caretta caretta',
    height: '',
    weight: '175 - 400 pounds',
    length: '33 - 48 inches',
    habitat: 'Oceans',
    facts:
      'Loggerhead turtles are named for their large heads that support powerful jaw muscles, allowing them to crush hard-shelled prey like clams and sea urchins. They are less likely to be hunted for their meat or shell compared to other sea turtles. Bycatch, the accidental capture of marine animals in fishing gear, is a serious problem for loggerhead turtles because they frequently come in contact with fisheries.\n' +
      '  Loggerheads are the most common turtle in the Mediterranean, nesting on beaches from Greece and Turkey to Israel and Libya. Many of their nesting beaches are under threat from tourism development. Sea turtles are the living representatives of a group of reptiles that has existed on Earth and travelled our seas for the last 100 million years. They are a fundamental link in marine ecosystems and help maintain the health of coral reefs and sea grass beds.',
    human_benefit:
      'The way loggerhead turtles feed on their hard-shelled prey recycles important nutrients and keeps ocean floor sediments in balance. Loggerhead turtles carry colonies of small plants and animals on their shells which serve as important habitat themselves. As many as 100 species of animals and plants have been recorded living on one single loggerhead turtle.',
    id: 32,
  },
  {
    name: 'Marine Iguana',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Amblyrhynchus cristatus',
    height: '',
    weight: '',
    length: '2 - 5.6 feet long',
    habitat: 'Oceans',
    facts:
      'One of the main nesting zones for iguanas is located on a central tourist beach in the waterfront area of Puerto Villamil on Isabela Island. For several years, the Galápagos National Park protected only the central part of the nesting zone. In 2012, the World Wildlife Fund, the Municipality of Isabela and the Charles Darwin Foundation extended the protected area to include the entire nesting zone. As part of this effort, additional signs for both tourists and local communities inform them about the importance of this nesting zone. A temporary fence was also built to protect the area and allow iguanas to pass through.',
    human_benefit:
      'Marine iguanas are the world’s only oceangoing lizard. They are also only found in the Galápagos, where they can be seen resting on the rocky shores.',
    id: 33,
  },
  {
    name: 'Olive Ridley Turtle',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Lepidochelys olivacea',
    height: '',
    weight: '75 - 110 pounds',
    length: '24 - 28 inches',
    habitat: 'Oceans',
    facts:
      'The name for this sea turtle is tied to the color of its shell—an olive green hue. They are currently the most abundant of all sea turtles. Their vulnerable status comes from the fact that they nest in a very small number of places, and therefore any disturbance to even one nest beach could have huge repercussions on the entire population.',
    human_benefit:
      'Sea turtles are a fundamental link in marine ecosystems and help maintain the health of coral reefs and sea grass beds.',
    id: 34,
  },
  {
    name: 'Polar Bear',
    status: 'Vulnerable',
    population: '22,000 - 31,000',
    scientific_name: 'Ursus maritimus',
    height: '',
    weight: '800–1,300 pounds',
    length: '6–9 feet',
    habitat: 'Antarctica / Arctic',
    facts:
      'Polar bears are classified as marine mammals because they spend most of their lives on the sea ice of the Arctic Ocean. They have a thick layer of body fat and a water-repellant coat that insulates them from the cold air and water. Considered talented swimmers, they can sustain a pace of six miles per hour by paddling with their front paws and holding their hind legs flat like a rudder.\n' +
      '  Polar bears spend over 50% of their time hunting for food. A polar bear might catch only one or two out of ten seals it hunts, depending on the time of year and other variables. Their diet mainly consists of ringed and bearded seals because they need large amounts of fat to survive.\n' +
      '  Scientists have divided the total polar bear population into 19 units or subpopulations. Of those, the latest data from the IUCN Polar Bear Specialist Group show that three subpopulations are in decline and that there is a high estimated risk of future decline due to climate change.',
    human_benefit:
      'Polar bears are at the top of the food chain and have an important role in the overall health of the marine environment. Over thousands of years, polar bears have also been an important part of the cultures and economies of Arctic peoples. Polar bears depend on sea ice for their existence and are directly impacted by climate change—serving as an important indicator species.',
    id: 35,
  },
  {
    name: 'Savanna Elephant',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Loxodonta africana africana',
    height: '10 - 13 feet',
    weight: '4 - 7 tons',
    length: '',
    habitat: 'Africa',
    facts:
      'Savanna elephants are the largest subspecies of elephant. They are easily distinguished by their very large ears—which allow them to radiate excess heat—and front legs which are noticeably longer than the hind legs. They are found throughout the grassy plains and bushlands of Africa. Savanna elephants live in eastern and southern Africa, where the highest densities are found in Botswana, Tanzania, Zimbabwe, Kenya, Namibia, Mozambique and South Africa.',
    human_benefit:
      'Savanna elephants contribute to the maintenance of the savannas and open woodlands by reducing tree densities. Without them, many other plants and animals would not survive in the woodland areas.',
    id: 36,
  },
  {
    name: 'Sea Turtle',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Cheloniidae and Dermochelyidae families',
    height: '',
    weight: '',
    length: '2 - 6 feet',
    habitat: 'Oceans',
    facts:
      'Seven different species of sea (or marine) turtles grace our ocean waters, from the shallow seagrass beds of the Indian Ocean, to the colorful reefs of the Coral Triangle, and even the sandy beaches of the Eastern Pacific. WWF’s work on sea turtles focuses on five of those species: green, hawksbill, loggerhead, leatherback and olive ridley.\n' +
      '  Human activities have tipped the scales against the survival of these ancient mariners. Nearly all species of sea turtle are classified as Endangered. Slaughtered for their eggs, meat, skin and shells, sea turtles suffer from poaching and over-exploitation. They also face habitat destruction and accidental capture in fishing gear. Climate change has an impact on turtle nesting sites. It alters sand temperatures, which then affects the sex of hatchlings.',
    human_benefit:
      'Sea turtles are a fundamental link in marine ecosystems. They help maintain the health of sea grass beds and coral reefs that benefit commercially valuable species such as shrimp, lobster and tuna. Sea turtles are the live representatives of a group of reptiles that have existed on Earth and traveled our seas for the last 100 million years. Turtles have major cultural significance and tourism value.',
    id: 37,
  },
  {
    name: 'Snow Leopard',
    status: 'Vulnerable',
    population: 'Total estimated 4,080 - 6,590',
    scientific_name: 'Panthera uncia',
    height: '',
    weight: '',
    length: '2 - 5 ft.',
    habitat: 'Asia',
    facts:
      'The snow leopard’s powerful build allows it to scale great steep slopes with ease. Its hind legs give the snow leopard the ability to leap six times the length of its body. A long tail provides balance and agility and also wraps around the resting snow leopard as protection from the cold.\n' +
      '  For millennia, this magnificent cat was the king of the mountains. The mountains were rich with their prey such as blue sheep, Argali wild sheep, ibex, marmots, pikas and hares. Snow leopards are found in 12 countries—including China, Bhutan, Nepal, India, Pakistan, Afghanistan, Russia, and Mongolia—but their population is dropping.',
    human_benefit:
      'Snow leopards play a key role as both top predator and as an indicator of the health of their high-altitude habitat. If snow leopards thrive, so will countless other species.',
    id: 38,
  },
  {
    name: 'Southern Rockhopper Penguin',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Eudyptes chrysocome',
    height: '',
    weight: '',
    length: '',
    habitat: 'Oceans',
    facts:
      'Much smaller in size than the emperor penguin, rockhopper penguins weigh less than 10 lbs. They were named for their distinctive hopping movements over the rocky hills and cliffs where they live and breed. In the last 30 years, it is estimated that the population of rockhoppers has fallen by nearly 25 percent—and now climate change could place them at even greater risk.',
    human_benefit: '',
    id: 39,
  },
  {
    name: 'Whale Shark',
    status: 'Vulnerable',
    population: '',
    scientific_name: 'Rhincodon typus',
    height: '',
    weight: 'Around 11 tons',
    length: 'Around 40 feet',
    habitat: 'Oceans',
    facts:
      'The whale shark is the biggest fish and shark in the world. These gentle marine giants roam the oceans around the globe, generally alone. However, large numbers of whale sharks often gather in areas with abundant plankton food—making them prime tourist attractions. Its enormous mouth (nearly five feet wide) engulfs large quantities of tiny plankton that it filters through its gills as it swims.',
    human_benefit:
      'The whale shark is the biggest fish and shark in the world. These gentle marine giants roam the oceans around the globe, generally alone. However, large numbers of whale sharks often gather in areas with abundant plankton food—making them prime tourist attractions.The distribution of whale sharks indicates the presence of plankton and the overall health of our oceans.',
    id: 40,
  },
  {
    name: 'African Wild Dog',
    status: 'Endangered',
    population: '6,600',
    scientific_name: 'Lycaon pictus',
    height: '30 inches',
    weight: '40 - 70 pounds',
    length: '30 - 56 inches',
    habitat: 'Africa',
    facts:
      'The wild dog is one of the world’s most endangered mammals. The largest populations remain in southern Africa and the southern part of East Africa (especially Tanzania and northern Mozambique).\n' +
      '  Wild dogs are social and gather in packs of around ten individuals, but some packs number more than 40. They are opportunistic predators that hunt medium-sized ruminants, such as gazelles. In a sprint, African wild dogs can reach speeds of more than 44 miles per hour.',
    human_benefit: '',
    id: 41,
  },
  {
    name: 'Amur Tiger',
    status: 'Endangered',
    population: 'As many as 540',
    scientific_name: 'Panthera tigris altaica',
    height: '',
    weight: '396–660 pounds',
    length: 'Up to 10 feet',
    habitat: 'Asia',
    facts:
      'Amur tigers were once found throughout the Russian Far East, northern China and the Korean peninsula. By the 1940s, hunting had driven the Amur tiger to the brink of extinction—with no more than 40 individuals remaining in the wild. The subspecies was saved when Russia became the first country in the world to grant the tiger full protection.\n' +
      '  By the 1980s, the Amur tiger population had increased to around 500. Although poaching increased after the collapse of the Soviet Union, continued conservation and antipoaching efforts by many partners have helped keep the population stable at around 540 individuals.\n' +
      '  Amur tigers have the largest home range of any tiger subspecies because they have to search over large areas to find food due to low prey densities. They represent the largest unfragmented tiger population in the world.',
    human_benefit:
      'The vast tracts of tiger forests in the Amur-Heilong landscape are unique. This region comprises Korean pine and Mongolian oak, which provide an important habitat for the Amur tiger and its prey—as well as important economic resources for local communities.',
    id: 42,
  },
  {
    name: 'Asian Elephant',
    status: 'Endangered',
    population: 'Fewer than 50,000',
    scientific_name: 'Elephas maximus indicus',
    height: '6.5– 11.5 feet',
    weight: 'Around 11,000 pounds',
    length: 'Around 21 feet',
    habitat: 'Asia',
    facts:
      'Elephants are an important cultural icon in Asia. According to Hindu mythology, the gods (deva) and the demons (asura) churned the oceans in a search for the elixir of life so that they would become immortal. As they did so, nine jewels surfaced, one of which was the elephant. In Hinduism, the powerful deity honored before all sacred rituals is the elephant-headed Lord Ganesha, who is also called the Remover of Obstacles.\n' +
      '  Asian elephants are extremely sociable, forming groups of six to seven related females that are led by the oldest female, the matriarch. Like African elephants, these groups occasionally join others to form herds, although these associations are relatively transient.',
    human_benefit:
      'Elephants are not only a cultural icon throughout Asia, they also help to maintain the integrity of forest and grassland habitats.',
    id: 43,
  },
  {
    name: 'Bengal Tiger',
    status: 'Endangered',
    population: 'More than 2,500',
    scientific_name: 'Panthera tigris tigris',
    height: '',
    weight: 'Around 550 pounds',
    length: 'Nearly 10 feet',
    habitat: 'Asia',
    facts:
      'The Bengal tiger is found primarily in India with smaller populations in Bangladesh, Nepal, Bhutan, China and Myanmar. It is the most numerous of all tiger subspecies with more than 2,500 left in the wild. The creation of India’s tiger reserves in the 1970s helped to stabilize numbers, but poaching to meet a growing demand from Asia in recent years has once again put the Bengal tiger at risk. The mangroves of the Sundarbans—shared between Bangladesh and India—are the only mangrove forests where tigers are found. The Sundarbans are increasingly threatened by sea level rise as a result of climate change.',
    human_benefit:
      'This tiger subspecies is at the top of the food chain in the wild. But tigers are also a vital link in maintaining the rich diversity of nature. When tigers are protected, we save so much more. For example, with just one tiger, we protect around 25,000 acres of forest. These ecosystems supply both nature and people with fresh water, food, and health.',
    id: 44,
  },
  {
    name: 'Black-footed Ferret',
    status: 'Endangered',
    population: 'Approximately 370 in the wild',
    scientific_name: 'Mustela nigripes',
    height: '',
    weight: '1.5 - 2.5 pounds',
    length: '18 - 24 inches',
    habitat: 'North America',
    facts:
      'Once thought to be globally extinct, black-footed ferrets are making a comeback. For the last thirty years, concerted efforts from many state and federal agencies, zoos, Native American tribes, conservation organizations and private landowners have given black-footed ferrets a second chance for survival. Today, recovery efforts have helped restore the black-footed ferret population to nearly 300 animals across North America. Although great strides have been made to recover the black-footed ferret, habitat loss and disease remain key threats to this highly endangered species.',
    human_benefit:
      'Black-footed ferrets are one of the most endangered mammals in North America and are the only ferret species native to the continent. Their recovery in the wild signifies the health of the grassland ecosystem which they depend on to survive.',
    id: 45,
  },
  {
    name: 'Blue Whale',
    status: 'Endangered',
    population: '10,000 - 25,000 individuals',
    scientific_name: 'Balaenoptera musculus',
    height: '',
    weight: 'Close to 200 tons',
    length: '80 - 100 feet',
    habitat: 'Oceans',
    facts:
      'The blue whale is the largest animal on the planet, weighing as much as 200 tons (approximately 33 elephants). The blue whale has a heart the size of a Volkswagen Beetle. Its stomach can hold one ton of krill and it needs to eat about four tons of krill each day. They are the loudest animals on Earth and are even louder than a jet engine. Their calls reach 188 decibels, while a jet reaches 140 decibels. Their low frequency whistle can be heard for hundreds of miles and is probably used to attract other blue whales.',
    human_benefit:
      'Whales are at the top of the food chain and have an important role in the overall health of the marine environment. During the 20th century, the blue whale was an important whaling target and even after it was protected and commercial whaling stopped in 1966, exploitation efforts by the former Soviet Union persisted.',
    id: 46,
  },
  {
    name: 'Bluefin Tuna',
    status: 'Endangered',
    population: '',
    scientific_name: 'Thunnus spp',
    height: '',
    weight: '1,500 pounds',
    length: '6 - 10 feet',
    habitat: 'Oceans',
    facts:
      'Bluefin are the largest tuna and can live up to 40 years. They migrate across oceans and can dive more than 4,000 feet. Bluefin tuna are made for speed: built like torpedoes, have retractable fins and their eyes are set flush to their body. They are tremendous predators from the moment they hatch, seeking out schools of fish like herring, mackerel and even eels. They hunt by sight and have the sharpest vision of any bony fish. There are three species of bluefin: Atlantic (the largest and most endangered), Pacific, and Southern. Most catches of the Atlantic bluefin tuna are taken from the Mediterranean Sea, which is the most important bluefin tuna fishery in the world.',
    human_benefit:
      'The Atlantic bluefin is a highly sought-after delicacy for sushi and sashimi in Asia—a single fish has sold for over $1.75 million! Driven by such high prices, fishermen use even more refined techniques to catch tuna. And the fish are disappearing as a result. Although tuna do provide food and livelihoods for people, they are more than just seafood. Tuna are a top predator in the marine food chain, maintaining a balance in the ocean environment.',
    id: 47,
  },
  {
    name: 'Bonobo',
    status: 'Endangered',
    population: '10,000 to 50,000',
    scientific_name: 'Pan paniscus',
    height: '28 to 35 inches',
    weight: '68 to 86 pounds',
    length: '',
    habitat: 'Africa',
    facts:
      'Bonobos and chimpanzees look very similar and both share 98.7% of their DNA with humans—making the two species our closest living relatives. Bonobos are usually a bit smaller, leaner and darker than chimpanzees. Their society is also different—bonobo groups tend to be more peaceful and are led by females. They also maintain relationships and settle conflicts through sex. However, bonobo life isn’t entirely violence free; if two groups of bonobos come together, they may engage in serious fighting.\n' +
      '  Civil unrest and increasing poverty in the area around the bonobos’ forests have contributed to bonobo poaching and deforestation. Though the size of the bonobo population is largely unknown, it has likely been declining for the last 30 years. Scientists believe that the decline will continue for the next 45 to 55 years due to the bonobo’s low reproductive rate and growing threats.',
    human_benefit:
      'Bonobos share 98.7% of their genetic code with humans, making them, along with chimpanzees, our closest living relatives. As the last great ape to be scientifically discovered, much still remains unknown about the bonobo.',
    id: 48,
  },
  {
    name: 'Borneo Pygmy Elephant',
    status: 'Endangered',
    population: 'Approximately 1,500',
    scientific_name: 'Elephas maximus borneensis',
    height: '8.2 - 9.8 feet',
    weight: '',
    length: '',
    habitat: 'Asia',
    facts:
      "Walt Disney himself couldn't have crafted a cuter elephant. The pygmy elephants of Borneo are baby-faced with oversized ears, plump bellies and tails so long they sometimes drag on the ground as they walk. They are also more gentle-natured than their Asian elephant counterparts.\n" +
      '  Once believed to be remnants of a domesticated herd given to the Sultan of Sulu in the 17th century, pygmy elephants were determined by the World Wildlife Fund to be genetically different from other Asian elephants. DNA evidence proved these elephants were isolated about 300,000 years ago from their cousins on mainland Asia and Sumatra. Over time, they became smaller with relatively larger ears, longer tails and straighter tusks. Today, the pygmy elephants of Borneo are the smallest elephants in Asia.',
    human_benefit:
      'Borneo’s elephants are a high conservation priority, yet they remain the least-understood elephants in the world.',
    id: 49,
  },
  {
    name: 'Chimpanzee',
    status: 'Endangered',
    population: '172,700 to 299,700',
    scientific_name: 'Pan troglodytes',
    height: '',
    weight: '',
    length: '',
    habitat: 'Africa',
    facts:
      'Like us, chimps are highly social animals, care for their offspring for years and can live to be over 50. In fact, chimpanzees are our closest cousins; we share about 98 percent of our genes.\n' +
      '  In their habitat in the forests of central Africa, chimpanzees spend most of their days in the tree tops. When they do come down to earth, chimps usually travel on all fours, though they can walk on their legs like humans for as far as a mile. They use sticks to fish termites out of mounds and bunches of leaves to sop up drinking water.',
    human_benefit:
      'Despite our shared lineage, humans are pushing chimpanzees toward extinction. Chimps have already disappeared completely from four countries and are under tremendous pressure everywhere else they live.',
    id: 50,
  },
  {
    name: 'Fin Whale',
    status: 'Endangered',
    population: 'Between 50,000 - 90,000',
    scientific_name: 'Balaenoptera physalus',
    height: '',
    weight: 'Almost 80 tons',
    length: '65 - 80 feet',
    habitat: 'Oceans',
    facts:
      'Some scientists have speculated that fin whales circle schools of fish with the white side facing the prey and frightening them into denser schools that are easier for the whale to catch. The fin whale, like other baleen whales, strains its food from the water through baleen plates.\n' +
      '  Next to the blue whale, the fin whale is the second largest mammal in the world. They have a distinct ridge along their back behind the dorsal fin, which gives it the nickname "razorback.” Fin whales have a very unusual feature: the lower right jaw is bright white and the lower left jaw is black.',
    human_benefit:
      'Whales are at the top of the food chain and have an important role in the overall health of the marine environment. The fin whale has been severely impacted worldwide by commercial whaling. Nearly 750,000 animals were killed in areas of the Southern Hemisphere alone between 1904 and 1979, and they are rarely seen there today. Their current status is unknown in most areas outside of the North Atlantic.',
    id: 51,
  },
  {
    name: 'Galápagos Penguin',
    status: 'Endangered',
    population: 'Fewer than 2000',
    scientific_name: 'Spheniscus mendiculus',
    height: '',
    weight: '5.5 pounds',
    length: '19 inches',
    habitat: 'Oceans',
    facts:
      'This is the only penguin species found north of the equator and in the Galápagos.',
    human_benefit: '',
    image_url:
      'https://our-planet.s3-us-west-2.amazonaws.com/animals/gala%CC%81pagos+penguin.jpg',
    id: 52,
  },
  {
    name: 'Ganges River Dolphin',
    status: 'Endangered',
    population: '1,200–1,800',
    scientific_name: 'Platanista gangetica gangetica',
    height: '',
    weight: '330 - 374 pounds',
    length: '7 - 8.9 feet',
    habitat: 'Asia',
    facts:
      'Dolphins are one of the oldest creatures in the world along with some species of turtles, crocodiles and sharks. The Ganges river dolphin was officially discovered in 1801. Ganges river dolphins once lived in the Ganges-Brahmaputra-Meghna and Karnaphuli-Sangu river systems of Nepal, India, and Bangladesh. But the species is extinct from most of its early distribution ranges.\n' +
      '  The Ganges river dolphin can only live in freshwater and is essentially blind. They hunt by emitting ultrasonic sounds, which bounces off of fish and other prey, enabling them to “see” an image in their mind. They are frequently found alone or in small groups, and generally a mother and calf travel together. Calves are chocolate brown at birth and then have grey-brown smooth, hairless skin as adults. Females are larger than males and give birth once every two to three years to only one calf.',
    human_benefit:
      'The Ganges river dolphin is important because it is a reliable indicator of the health of the entire river ecosystem. The government of India declared it the National Aquatic Animal in 2009.',
    id: 53,
  },
  {
    name: 'Green Turtle',
    status: 'Endangered',
    population: '',
    scientific_name: 'Chelonia mydas',
    height: '',
    weight: '150 - 400 pounds',
    length: '31 - 47 inches',
    habitat: 'Oceans',
    facts:
      'The green turtle is one of the largest sea turtles and the only herbivore among the different species. Green turtles are in fact named for the greenish color of their cartilage and fat, not their shells. In the Eastern Pacific, a group of green turtles that have darker shells are called black turtles by the local community. Green turtles are found mainly in tropical and subtropical waters. Like other sea turtles, they migrate long distances between feeding grounds and the beaches from where they hatched. Classified as endangered, green turtles are threatened by overharvesting of their eggs, hunting of adults, being caught in fishing gear and loss of nesting beach sites.',
    human_benefit:
      'Green turtles graze on seagrasses and algae, which maintains the seagrass beds and makes them more productive (much like mowing the lawn to keep it healthy). Seagrass consumed by green turtles is quickly digested and becomes available as recycled nutrients to the many species of plants and animals that live in the sea grass ecosystem. Seagrass beds also function as nurseries for several species of invertebrates and fish, many of which are of considerable value to commercial fisheries and therefore important to human food security.',
    id: 54,
  },
  {
    name: "Hector's Dolphin",
    status: 'Endangered',
    population: 'Estimated at 7,000',
    scientific_name: 'Cephalorhynchus hectori',
    height: '',
    weight: 'Up to 110 pounds',
    length: '4 feet',
    habitat: 'Oceans',
    facts:
      'Hector’s dolphins are the smallest and rarest marine dolphins in the world. They have distinct black facial markings, short stocky bodies and a dorsal fin shaped like a Mickey Mouse ear. There is a subspecies of Hector’s dolphin known as Maui’s dolphin that is critically endangered and estimated to have a population of only 55. They are found only in the shallow coastal waters along western shores of New Zealand’s North Island.',
    human_benefit:
      'Hector’s and Maui’s dolphins only live in New Zealand’s shallow coastal waters. They are both at risk of becoming extinct.',
    id: 55,
  },
  {
    name: 'Humphead Wrasse',
    status: 'Endangered',
    population: '',
    scientific_name: 'Cheilinus undulatus',
    height: '',
    weight: 'Over 400 pounds',
    length: '6 feet',
    habitat: 'Oceans',
    facts:
      'The humphead wrasse is an enormous coral reef fish—growing over six feet long—with a prominent bulge on its forehead. Some of them live to be over 30 years old. They roam through coral reefs in search of hard shelled prey such as mollusks, starfish, or crustaceans.\n' +
      '  Local governments in the Coral Triangle have been urged to stop the trade and consumption of humphead wrasse—one of the most expensive live reef fishes in the world. Live reef fish trade in Southeast Asia continues to be a significant problem that threatens the region’s food security as well as its reefs, as poachers often resort to legal and destructive fishing methods to catch them.',
    human_benefit:
      'These fish are very important to coral reef health. They eat crown-of-thorn starfish and therefore keep populations of this damaging coral reef predator in check.',
    id: 56,
  },
  {
    name: 'Indian Elephant',
    status: 'Endangered',
    population: '20,000 - 25,000',
    scientific_name: 'Elephas maximus indicus',
    height: '6 - 11 feet at the shoulder',
    weight: '5 tons',
    length: 'Up to 21 feet',
    habitat: 'Asia',
    facts:
      'Indian elephants may spend up to 19 hours a day feeding and they can produce about 220 pounds of dung per day while wandering over an area that can cover up to 125 square miles. This helps to disperse germinating seeds. They feed mainly on grasses, but large amounts of tree bark, roots, leaves and small stems are also eaten. Cultivated crops such as bananas, rice and sugarcane are favored foods as well. Since they need to drink at least once a day, these elephants are always close to a source of fresh water.',
    human_benefit:
      'Elephants are not only a cultural icon in India and throughout Asia, they also help to maintain the integrity of their forest and grassland habitats.',
    id: 57,
  },
  {
    name: 'Indochinese Tiger',
    status: 'Endangered',
    population: 'Around 350 (2010 estimate)',
    scientific_name: 'Panthera tigris corbetti',
    height: '',
    weight: '396–550 pounds',
    length: 'Average of nine feet from nose to tail',
    habitat: 'Asia',
    facts:
      'The region contains the largest combined area of tiger habitat in the world—equal to roughly the size of France. However, rapid development, such as road construction, is fragmenting habitats. Due to decades of rampant poaching many of the landscapes of this region have no tigers left in them.\n' +
      '  There is hope in other remaining Indochinese tiger habitats, which have a relatively low human presence and offer a unique opportunity for tiger conservation. The best hope of the survival of this subspecies is in the Dawna Tennaserim landscape on the Thailand-Myanmar border where perhaps 250 tigers remain. The forests of the Lower Mekong are considered a restoration landscape with the possibility of reintroducing tigers as the habitat and prey base are there. Southern Laos and Central Vietnam also have potential for recovery of wild tiger populations.',
    human_benefit:
      'Maintaining tiger habitats in the Greater Mekong directly benefits a host of other globally important species like Asian elephants, Asiatic black bear, a suite of wild cattle and many endemic deer.',
    id: 58,
  },
  {
    name: 'Indus River Dolphin',
    status: 'Endangered',
    population: 'Approximately 1,100',
    scientific_name: 'Platanista minor',
    height: '',
    weight: '155 - 245 pounds',
    length: '8.2 ft',
    habitat: 'Asia',
    facts:
      'Indus river dolphins are one of only four river dolphin species and subspecies in the world that spend all of their lives in freshwater. They are believed to have originated in the ancient Tethys Sea. When the sea dried up approximately 50 million years ago, the dolphins were forced to adapt to its only remaining habitat—rivers. Only about 1,100 exist today in the lower parts of the Indus River in Pakistan. Numbers declined dramatically after the construction of an irrigation system. Most dolphins are confined to a 750 mile stretch of the river and divided into isolated populations by six barrages. They have adapted to life in the muddy river and are functionally blind. They rely on echolocation to navigate, communicate and hunt prey including prawns, catfish and carp.',
    human_benefit:
      'Indus river dolphins are found only in Pakistan. Like other freshwater dolphins, the Indus river dolphin is an important indicator of the health of a river.',
    id: 59,
  },
  {
    name: 'North Atlantic Right Whale',
    status: 'Endangered',
    population: '300 - 350 individuals',
    scientific_name: 'Eubalaena glacialis',
    height: '',
    weight: 'Up to 70 tons',
    length: '45 - 55 geet',
    habitat: 'Oceans',
    facts:
      'The North Atlantic right whale can easily be identified by the white calluses on its head, which are very noticeable against the whale’s dark gray body. It has a broad back without a dorsal fin and a long arching mouth that begins above the eye. A baleen whale, it feeds by swimming through a swarm of plankton with its mouth open and the head slightly above the surface. Right whales are found more often in coastal waters, especially during the breeding season.',
    human_benefit:
      'The North-Atlantic right whale is one of the most endangered of all large whales, with a long history of human exploitation and no signs of recovery despite protection from whaling since the 1930s. It is now mostly found along the Atlantic coast of North America, where it is threatened by entanglement in fishing gear and ship collisions. Some scientists believe these whales have gone extinct in the eastern North Atlantic and now survive only along the east coast of the U.S. and Canada.',
    id: 60,
  },
  {
    name: 'Red Panda',
    status: 'Endangered',
    population: 'Less than 10,000 individuals',
    scientific_name: 'Ailurus fulgens',
    height: '',
    weight: '',
    length: '2 feet',
    habitat: 'Asia',
    facts:
      'The red panda is slightly larger than a domestic cat with a bear-like body and thick russet fur. The belly and limbs are black, and there are white markings on the side of the head and above its small eyes. Red pandas are very skillful and acrobatic animals that predominantly stay in trees. Almost 50% of the red panda’s habitat is in the Eastern Himalayas. They use their long, bushy tails for balance and to cover themselves in winter, presumably for warmth. Primarily an herbivore, the name panda is said to come from the Nepali word ‘ponya,’ which means bamboo or plant eating animal.',
    human_benefit:
      'Almost 50 percent of the red panda’s habitat is in the Eastern Himalayas. The loss of nesting trees and bamboo is causing a decline in red panda populations across much of their range because their forest home is being cleared.',
    id: 61,
  },
  {
    name: 'Sea Lions',
    status: 'Endangered',
    population: '',
    scientific_name: 'Zalophus wollebaeki',
    height: '',
    weight: 'Around 400 pounds',
    length: '6 feet',
    habitat: 'Oceans',
    facts:
      'Sea lions haul out in large colonies on rocks and sandy shores on the Islands. They move into the water to feed and cool off as needed',
    human_benefit: 'The sea lion is the most common mammal in the Galápagos.',
    id: 62,
  },
  {
    name: 'Sei Whale',
    status: 'Endangered',
    population: '',
    scientific_name: 'Balaenoptera borealis',
    height: '',
    weight: 'About 20 tons',
    length: '45 to 66 feet',
    habitat: 'Oceans',
    facts:
      'The sei whale is one of the fastest whales, reaching speeds of up to 30 miles per hour. Sei whales inhabit all oceans and adjoining seas except in tropical and polar regions. Like other great whales, they prefer to spend the summer feeding in cooler waters before migrating to warmer waters to breed and give birth to their calves.',
    human_benefit:
      'Whales are at the top of the food chain and have an important role in the overall health of the marine environment. They are also highly vulnerable to human activities in the ocean. The sei whale became a major target for commercial whaling after the preferred stocks of blue and fin whales had been depleted. Today, although commercial whaling has been officially halted, the species is subject to "scientific whaling" by Japan—that is, killing whales for scientific research. ',
    id: 63,
  },
  {
    name: 'Sri Lankan Elephant',
    status: 'Endangered',
    population: '2,500 - 4,000',
    scientific_name: 'Elephas maximus maximus',
    height: '8 - 10 feet at shoulder',
    weight: '4,400 and 12,000 pounds',
    length: '',
    habitat: 'Asia',
    facts:
      'The Sri Lankan subspecies is the largest and also the darkest of the Asian elephants, with patches of depigmentation—areas with no skin color—on its ears, face, trunk and belly. Once found throughout the tear-shaped island at the bottom of India’s southern tip, these elephants are now being pushed into smaller areas as development activities clear forests and disrupt their ancient migratory routes.\n' +
      '  The herd size in Sri Lanka ranges from 12-20 individuals or more. It is led by the oldest female, or matriarch. In Sri Lanka, herds have been reported to contain nursing units, consisting of lactating females and their young, and juvenile care units, containing females with juveniles. The Sri Lankan elephant population has fallen almost 65% since the turn of the 19th century. Today, the Sri Lanka elephant is protected under the Sri Lankan law and killing one carries the death penalty.',
    human_benefit:
      'Elephants hold symbolic, cultural and economic importance in Sri Lanka. They attract tourists who visit national parks to observe elephants in the wild. They support logging operations by dragging felled logs and have special significance in religious events.',
    id: 64,
  },
  {
    name: 'Tiger',
    status: 'Endangered',
    population: 'Around 3,890',
    scientific_name: 'Panthera tigris',
    height: '',
    weight: '220 - 660 pounds',
    length: '6 - 10 feet',
    habitat: 'Asia',
    facts:
      'The largest of all the Asian big cats, tigers rely primarily on sight and sound rather than smell for hunting. They typically hunt alone and stalk prey. A tiger can consume up to 88 pounds of meat at one time. On average, tigers give birth to two to four cubs every two years. If all the cubs in one litter die, a second litter may be produced within five months.\n' +
      '  Tigers generally gain independence at two years of age and attain sexual maturity at age three or four for females and at four or five years for males. Juvenile mortality is high however—about half of all cubs do not survive more than two years. Tigers have been known to reach up to 20 years of age in the wild.',
    human_benefit:
      'As a large predator, the tiger plays a key role in maintaining healthy ecosystems. These ecosystems supply both nature and people with fresh water, food, and health—which means that by saving tigers, we are helping people too.',
    id: 65,
  },
  {
    name: 'Whale',
    status: 'Endangered',
    population:
      'Few as 300 North Atlantic right whales remain; other species vary: 10,000-90,000',
    scientific_name: 'Balaenoptera, Balaena, Eschrichtius, and Eubalaen',
    height: '',
    weight: '20 - 200 tons',
    length: '45 - 100 feet',
    habitat: 'Oceans',
    facts:
      'Whales roam throughout all of the world’s oceans, communicating with complex and mysterious sounds. Their sheer size amazes us: the blue whale can reach lengths of more than 100 feet and weigh up to 200 tons—as much as 33 elephants.\n' +
      '  Despite living in the water, whales breathe air. And like humans, they are warm-blooded mammals who nurse their young. A thick layer of fat called blubber insulates them from cold ocean waters.\n' +
      '  Some whales are known as baleen whales including blue, right, bowhead, sei and gray whales. This refers to the fact that they have special bristle-like structures in their mouths (called baleen) that strains food from the water. Other whales, such as beluga or sperm whales, have teeth.',
    human_benefit:
      'Whales are at the top of the food chain and have an important role in the overall health of the marine environment. Unfortunately their large size and mythical aura does not protect them; six out of the 13 great whale species are classified as endangered, even after decades of protection.',
    id: 66,
  },
  {
    name: 'Amur Leopard',
    status: 'Critically Endangered',
    population: 'More than 60 individuals',
    scientific_name: 'Panthera pardus orientalis',
    height: '',
    weight: '70 - 105 pounds',
    length: '',
    habitat: 'Asia',
    facts:
      'People usually think of leopards in the savannas of Africa but in the Russian Far East, a rare subspecies has adapted to life in the temperate forests that make up the northern-most part of the species’ range. Similar to other leopards, the Amur leopard can run at speeds of up to 37 miles per hour. This incredible animal has been reported to leap more than 19 feet horizontally and up to 10 feet vertically.\n' +
      '  The Amur leopard is solitary. Nimble-footed and strong, it carries and hides unfinished kills so that they are not taken by other predators. It has been reported that some males stay with females after mating, and may even help with rearing the young. Several males sometimes follow and fight over a female. They live for 10-15 years, and in captivity up to 20 years. The Amur leopard is also known as the Far East leopard, the Manchurian leopard or the Korean leopard.',
    human_benefit:
      'The Amur leopard is important ecologically, economically and culturally. Conservation of its habitat benefits other species, including Amur tigers and prey species like deer. With the right conservation efforts, we can bring them back and ensure long-term conservation of the region.',
    id: 67,
  },
  {
    name: 'Black Rhino',
    status: 'Critically Endangered',
    population: '5,000 - 5,400',
    scientific_name: 'Diceros bicornis',
    height: '5.2 feet',
    weight: '1,760 - 3,080 pounds',
    length: '',
    habitat: 'Africa',
    facts:
      'Black rhinos are the smaller of the two African rhino species. The most notable difference between white and black rhinos are their hooked upper lip. This distinguishes them from the white rhino, which has a square lip. Black rhinos are browsers rather than grazers, and their pointed lip helps them feed on leaves from bushes and trees. They have two horns, and occasionally a third, small posterior horn.\n' +
      '  Populations of black rhino declined dramatically in the 20th century at the hands of European hunters and settlers. Between 1960 and 1995, black rhino numbers dropped by a sobering 98%, to less than 2,500. Thanks to persistent conservation efforts across Africa, black rhino numbers have doubled from their historic low 20 years ago to between 5,042 and 5,455 today. Wildlife crime—in this case, poaching and black-market trafficking of rhino horn—continues to plague the species and threaten its recovery.',
    human_benefit:
      'Rhinos are one of the oldest groups of mammals, virtually living fossils. They play an important role in their habitats and in countries like Namibia, rhinos are an important source of income from ecotourism. The protection of black rhinos creates large blocks of land for conservation purposes. This benefits many other species, including elephants.',
    id: 68,
  },
  {
    name: 'Bornean Orangutan',
    status: 'Critically Endangered',
    population: 'About 104,700',
    scientific_name: 'Pongo pygmaeus',
    height: '3.3 – 4.6 feet',
    weight: '66 – 220 pounds',
    length: '',
    habitat: 'Asia',
    facts:
      "Bornean orangutan populations have declined by more than 50% over the past 60 years, and the species' habitat has been reduced by at least 55% over the past 20 years.\n" +
      '  The Bornean orangutan differs in appearance from the Sumatran orangutan, with a broader face and shorter beard and also slightly darker in color. Three subspecies are recognized, each localized to different parts of the island:\n' +
      '  Northwest Bornean orangutans are the most threatened subspecies. Its habitat has been seriously affected by logging and hunting, and a mere 1,500 individuals or so remain. Many habitat patches in the area are small and fragmented.\n' +
      '  Northeast Bornean orangutans are the smallest in size and found in Sabah and eastern Kalimantan as far as the Mahakam River.\n' +
      '  Central Bornean orangutans are the subspecies with the most animals, with at least 35,000 individuals.',
    human_benefit:
      'Orangutans play a critical role in seed dispersal, keeping forests healthy. Over 500 plant species have been recorded in their diet.',
    id: 69,
  },
  {
    name: 'Cross River Gorilla',
    status: 'Critically Endangered',
    population: '200 to 300 individuals',
    scientific_name: 'Gorilla gorilla diehli',
    height: '4 to 5.5 feet when standing on two feet',
    weight: 'Up to 440 pounds',
    length: '',
    habitat: 'Africa',
    facts:
      'This subspecies of the western gorilla is very similar in appearance to the more numerous western lowland gorilla, but subtle differences can be found in the skull and tooth dimensions. Cross River gorillas live in a region populated by many humans who have encroached upon the gorilla’s territory—clearing forests for timber and to create fields for agriculture and livestock. Poaching occurs in the forests as well, and the loss of even a few of these gorillas has a detrimental effect on such a small population.\n' +
      '  Efforts to protect these animals are focused on securing the forests that house them. The World Wildlife Fund and partners have worked with the governments of Cameroon and Nigeria to create a protected area for the Cross River gorilla that spans the border of these two nations.',
    human_benefit: '',
    id: 70,
  },
  {
    name: 'Hawksbill Turtle',
    status: 'Critically Endangered',
    population: 'Unknown',
    scientific_name: 'Eretmochelys imbricata',
    height: '',
    weight: '90 - 150 pounds',
    length: '30 - 35 inches',
    habitat: 'Oceans',
    facts: `Hawksbills are named for their narrow, pointed beak. They also have a distinctive pattern of overlapping scales on their shells that form a serrated-look on the edges. These colored and patterned shells make them highly-valuable and commonly sold as "tortoiseshell" in markets. Hawksbills are found mainly throughout the world's tropical oceans, predominantly in coral reefs. They feed mainly on sponges by using their narrow pointed beaks to extract them from crevices on the reef, but also eat sea anemones and jellyfish. Sea turtles are the living representatives of a group of reptiles that has existed on Earth and travelled our seas for the last 100 million years. They are a fundamental link in marine ecosystems and help maintain the health of coral reefs and sea grass beds.`,
    human_benefit: `Hawksbills are named for their narrow, pointed beak. They also have a distinctive pattern of overlapping scales on their shells that form a serrated-look on the edges. These colored and patterned shells make them highly-valuable and commonly sold as "tortoiseshell" in markets. Hawksbills are found mainly throughout the world's tropical oceans, predominantly in coral reefs. They feed mainly on sponges by using their narrow pointed beaks to extract them from crevices on the reef, but also eat sea anemones and jellyfish. Sea turtles are the living representatives of a group of reptiles that has existed on Earth and travelled our seas for the last 100 million years. They are a fundamental link in marine ecosystems and help maintain the health of coral reefs and sea grass beds.`,
    id: 71,
  },
  {
    name: 'Javan Rhino',
    status: 'Critically Endangered',
    population: '58 – 68',
    scientific_name: 'Rhinoceros sondaicus',
    height: '4.6 – 5.8 feet',
    weight: '1,984 - 5,071 pounds',
    length: '10 – 10.5 feet',
    habitat: 'Asia',
    facts:
      'Javan rhinos are the most threatened of the five rhino species, with only 58-68 individuals that live only in Ujung Kulon National Park in Java, Indonesia. Javan rhinos once lived throughout northeast India and Southeast Asia. Vietnam’s last Javan rhino was poached in 2010.\n' +
      '  This species is a dusky grey color and has a single horn of up to about 10 inches. Its skin has a number of loose folds, giving the appearance of armor plating. The Javan rhino is very similar in appearance to the closely-related greater one-horned rhinoceros, but has a much smaller head and less apparent skin folds.',
    human_benefit:
      'The population in Ujung Kulon National Park represents the only hope for the survival of a species that is on the brink of extinction. Until the late 19th century and early 20th century, Javan rhinos existed from northeast India and the Sunderbans , throughout mainland Southeast Asia, and on the island of Sumatra. If we lose the population in Java, the entire species will disappear.',
    id: 72,
  },
  {
    name: 'Malayan Tiger',
    status: 'Critically Endangered',
    population: '250 - 340',
    scientific_name: 'Panthera tigris jacksoni',
    height: '',
    weight: '220 – 264 pounds',
    length: '',
    habitat: 'Asia',
    facts:
      'Malayan tigers were classified as Indochinese tigers until DNA testing in 2004 showed them to be a separate subspecies. Their Latin name—Panthera tigris jacksoni—honors Peter Jackson, the famous tiger conservationist. Malayan tigers are found only on the Malay Peninsula and in the southern tip of Thailand.',
    human_benefit:
      'Protecting tiger habitats in Malaysia safeguards other species such as Asian elephants and mainland clouded leopards.',
    id: 73,
  },
  {
    name: 'Mountain Gorilla',
    status: 'Critically Endangered',
    population: '880',
    scientific_name: 'Gorilla beringei beringei',
    height: '4 to 5.5 feet when standing on two feet',
    weight: 'Up to 440 pounds',
    length: '',
    habitat: 'Africa',
    facts:
      'As their name implies, mountain gorillas live in forests high in the mountains, at elevations of 8,000 to 13,000 feet. They have thicker fur, and more of it, compared to other great apes. The fur helps them to survive in a habitat where temperatures often drop below freezing. But as humans have moved more and more into the gorillas’ territory, the gorillas have been pushed farther up into the mountains for longer periods, forcing them to endure dangerous and sometimes deadly conditions.\n' +
      '  What might have been a bleak outlook for the subspecies just a couple of decades ago has brightened in recent years due to conservation efforts. Despite ongoing civil conflict, poaching and an encroaching human population, both populations of mountain gorillas have increased in numbers.',
    human_benefit:
      'Despite years of civil unrest in the region where mountain gorillas live, conservation efforts have found success. The gorilla population increased from 620 animals in 1989 to around 880 today.',
    id: 74,
  },
  {
    name: 'Orangutan',
    status: 'Critically Endangered',
    population: 'About 104,700 (Bornean), 14,613 (Sumatran), 800 (Tapanuli)',
    scientific_name: 'Pongo abelii, Pongo pygmaeus',
    height: '',
    weight: 'Up to 200 pounds',
    length: '',
    habitat: 'Asia',
    facts:
      'The name orangutan means "man of the forest" in the Malay language. In the lowland forests in which they reside, orangutans live solitary existences. They feast on wild fruits like lychees, mangosteens, and figs, and slurp water from holes in trees. They make nests in trees of vegetation to sleep at night and rest during the day. Adult male orangutans can weigh up to 200 pounds. Flanged males have prominent cheek pads called flanges and a throat sac used to make loud verbalizations called long calls. An unflanged male looks like an adult female. In a biological phenomenon unique among primates, an unflanged male can change to a flanged male for reasons that are not yet fully understood.',
    human_benefit: `Orangutans are "gardeners" of the forest, playing a vital role in seed dispersal in their habitats. They live in tropical forests and prefer forest in river valleys and floodplains of their respective islands. Orangutans' extremely low reproductive rate makes their populations highly vulnerable. Females give birth to one infant at a time about every 3-5 years, so these species can take a long time to recover from population declines. With human pressure only increasing, orangutans face an increasing risk of extinction.`,
    id: 75,
  },
  {
    name: 'Saola',
    status: 'Critically Endangered',
    population: 'Unknown',
    scientific_name: 'Pseudoryx nghetinhensis',
    height: 'Average 33 inches at the shoulder',
    weight: '176 - 220 lbs',
    length: '',
    habitat: 'Asia',
    facts:
      "The saola was discovered in May 1992 during a joint survey carried out by the Ministry of Forestry of Vietnam and the World Wildlife Fund in north-central Vietnam. The team found a skull with unusual long, straight horns in a hunter's home and knew it was something extraordinary. The find proved to be the first large mammal new to science in more than 50 years and one of the most spectacular zoological discoveries of the 20th century.\n" +
      '  Saola (pronounced: sow-la) are recognized by two parallel horns with sharp ends, which can reach 20 inches in length and are found on both males and females. Meaning “spindle horns” in Vietnamese, they are a cousin of cattle but resemble an antelope. Saola have striking white markings on the face and large maxillary glands on the muzzle, which could be used to mark territory or attract mates. They are found only in the Annamite Mountains of Vietnam and Laos.',
    human_benefit:
      'The actual size of the remaining population is unknown. Its rarity, distinctiveness and vulnerability make it one of the greatest priorities for conservation in the region. The current population is thought to be a few hundred at a maximum and possibly only a few dozen at a minimum.',
    id: 76,
  },
  {
    name: 'South China Tiger',
    status: 'Critically Endangered',
    population: 'Believed to be extinct in the wild',
    scientific_name: 'Panthera tigris amoyensis',
    height: '',
    weight: '',
    length: '',
    habitat: 'Asia',
    facts:
      'The South China tiger population was estimated to number 4,000 individuals in the early 1950s. In the next few decades, thousands were killed as the subspecies was hunted as a pest. The Chinese government banned hunting in 1979. By 1996 the population was estimated to be just 30-80 individuals.\n' +
      '  Today the South China tiger is considered by scientists to be “functionally extinct,” as it has not been sighted in the wild for more than 25 years.',
    human_benefit:
      'South China tigers are a reminder that the threat against the world’s tiger is an urgent one. Today, South China tigers are found in zoos and in South Africa where there are plans to reintroduce captive-bred tigers back into the wild.',
    id: 77,
  },
  {
    name: 'Sumatran Elephant',
    status: 'Critically Endangered',
    population: '2,400 – 2,800',
    scientific_name: 'Elephas maximus sumatranus',
    height: '5 - 9 feet at the shoulder',
    weight: 'Approximately 5 tons',
    length: 'Up to 20 feet',
    habitat: 'Asia',
    facts:
      'Sumatran elephants feed on a variety of plants and deposit seeds wherever they go, contributing to a healthy forest ecosystem. They also share their lush forest habitat with several other endangered species, such as the Sumatran rhino, tiger, and orangutan, and countless other species that all benefit from an elephant population that thrives in a healthy habitat.',
    human_benefit:
      'Sumatran elephants feed on a variety of plants and deposit seeds wherever they go, contributing to a healthy forest ecosystem.',
    id: 78,
  },
  {
    name: 'Sumatran Orangutan',
    status: 'Critically Endangered',
    population: '14,613',
    scientific_name: 'Pongo abelii',
    height: '4 - 5 feet',
    weight: '66 – 198 pounds',
    length: '',
    habitat: 'Asia',
    facts:
      'The Sumatran orangutan is almost exclusively arboreal, living among the trees of tropical rainforests. Females virtually never travel on the ground and adult males do so rarely. Sumatran orangutans are reported to have closer social ties than their Bornean cousins. This has been attributed to mass fruit on fig trees, where groups of Sumatran orangutans can come together to feed. Adult males are typically solitary while females are accompanied by offspring.',
    human_benefit:
      'Orangutans are frugivores and play a vital role in the dispersal of seeds over a huge area. If orangutans were to disappear, so would several tree species, especially those with larger seeds.',
    id: 79,
  },
  {
    name: 'Sumatran Rhino',
    status: 'Critically Endangered',
    population: 'Fewer than 100',
    scientific_name: 'Dicerorhinus sumatrensis',
    height: '3.3 - 5 feet',
    weight: '1,320 - 2,090 pounds',
    length: '6.5 - 13 feet',
    habitat: 'Asia',
    facts:
      'Sumatran rhinos are the smallest of the living rhinoceroses and the only Asian rhino with two horns. They are covered with long hair and are more closely related to the extinct woolly rhinos than any of the other rhino species alive today. Calves are born with a dense covering that turns reddish brown in young adults and becomes sparse, bristly and almost black in older animals. Sumatran rhinos compete with the Javan rhino for the unenviable title of most threatened rhino species. While surviving in greater numbers than the Javan rhino, Sumatran rhinos are more threatened by poaching. There is no indication that the population is stable and just two captive females have reproduced in the last 15 years.',
    human_benefit:
      'In all rhino conservation areas, there are other valuable plants and animals. Protecting rhinos helps maintain other animal and plant life in the area and keeps ecosystems healthy.',
    id: 80,
  },
  {
    name: 'Sumatran Tiger',
    status: 'Critically Endangered',
    population: '400 - 500',
    scientific_name: 'Panthera tigris sumatrae',
    height: '',
    weight: '165 – 308 pounds',
    length: '',
    habitat: 'Asia',
    facts:
      'Sumatran tigers are the smallest surviving tiger subspecies and are distinguished by heavy black stripes on their orange coats. The last of Indonesia’s tigers—as few as 400 today—are holding on for survival in the remaining patches of forests on the island of Sumatra. Accelerating deforestation and rampant poaching mean this noble creature could end up like its extinct Javan and Balinese relatives.\n' +
      '  In Indonesia, anyone caught hunting tigers could face jail time and steep fines. But despite increased efforts in tiger conservation—including strengthening law enforcement and antipoaching capacity—a substantial market remains in Sumatra and the rest of Asia for tiger parts and products. Sumatran tigers are losing their habitat and prey fast, and poaching shows no sign of decline.',
    human_benefit:
      "The island of Sumatra is the only place where tigers, rhinos, orangutans and elephants live together. The presence of the Sumatran tiger is an important indicator of a forest's biodiversity. Protecting tigers and their habitat means many other species benefit—including humans.",
    id: 81,
  },
  {
    name: 'Vaquita',
    status: 'Critically Endangered',
    population: '30 individuals',
    scientific_name: 'Phocoena sinus',
    height: '',
    weight: 'Up to 120 pounds',
    length: 'Up to 5 feet',
    habitat: 'North America',
    facts:
      "Vaquita, the world’s most rare marine mammal, is on the edge of extinction. This little porpoise wasn't discovered until 1958 and a little over half a century later, we are on the brink of losing them forever. Vaquita are often caught and drowned in gillnets used by illegal fishing operations in marine protected areas within Mexico's Gulf of California. The population has dropped drastically in the last few years.\n" +
      "  The vaquita has a large dark ring around its eyes and dark patches on its lips that form a thin line from the mouth to the pectoral fins. Its dorsal surface is dark gray, sides pale gray and ventral surface white with long, light gray markings. Newborn vaquita have darker coloration and a wide gray fringe of color that runs from the head to the dorsal flukes, passing through the dorsal and pectoral fins. They are most often found close to shore in the Gulf's shallow waters, although they quickly swim away if a boat approaches.",
    human_benefit:
      'The vaquita is the most endangered cetacean in the world. With as few as 30 left, the species will become extinct without a fully enforced gillnet ban throughout their entire range.',
    id: 82,
  },
  {
    name: 'Western Lowland Gorilla',
    status: 'Critically Endangered',
    population: 'Unknown',
    scientific_name: 'Gorilla gorilla gorilla',
    height: '4 to 5 ½ feet when standing on two feet',
    weight: 'Up to 440 pounds',
    length: '',
    habitat: 'Africa',
    facts:
      'The western lowland gorilla is the most numerous and widespread of all gorilla subspecies. Populations can be found in Cameroon, the Central African Republic, the Democratic Republic of Congo and Equatorial Guinea as well as in large areas in Gabon and the Republic of Congo. The exact number of western lowland gorillas is not known because they inhabit some of the most dense and remote rainforests in Africa. Significant populations still exist, including in isolated swamps and the remote swampy forests of the Republic of Congo.',
    human_benefit: '',
    id: 83,
  },
  {
    name: 'Yangtze Finless Porpoise',
    status: 'Critically Endangered',
    population: '1,000 - 1,800',
    scientific_name: 'Neophocaena asiaeorientalis ssp. asiaeorientalis',
    height: '',
    weight: '',
    length: '6.2 feet',
    habitat: 'Oceans',
    facts:
      'The Yangtze River, the longest river in Asia, used to be one of the only two rivers in the world that was home to two different species of dolphin—the Yangtze finless porpoise and the Baiji dolphin. However, in 2006 the Baiji dolphin was declared functionally extinct. This was the first time in history that an entire species of dolphin had been wiped off the planet because of human activity. Its close cousin, the Yangtze finless porpoise, is known for its mischievous smile and has a level of intelligence comparable to that of a gorilla.',
    human_benefit: '',
    id: 84,
  },
];

export default animalsData;
