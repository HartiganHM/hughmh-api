import { PrismaClient } from '@prisma/client';
import animalsData from './animals';
import continentsData from './continents';

const prisma = new PrismaClient();

async function main() {
  continentsData.forEach(async (continent) => {
    await prisma.continent.create({
      data: continent,
    });

    console.log(`Created continent: ${continent.name}`);

    const filteredAnimals = animalsData.filter(
      (animal) => animal.habitat === continent.name,
    );

    filteredAnimals.forEach(async (animal) => {
      const newAnimal = {
        ...animal,
        continent_id: continent.id,
        image_url: generateImageUrl(animal.name, animal.image_url),
      };

      await prisma.animal.create({
        data: newAnimal,
      });

      console.log(`${animal.id} Created animal: ${animal.name}`);
    });
  });

  const generateImageUrl = (name: string, image_url?: string) =>
    image_url ||
    `https://our-planet.s3-us-west-2.amazonaws.com/animals/${name
      .toLowerCase()
      .split(' ')
      .join('+')}.jpg`;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
