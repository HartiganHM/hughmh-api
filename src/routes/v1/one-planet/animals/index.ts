import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (server: FastifyInstance) {
  server.get('/', async (request, response) => {
    const animals = await prisma.animal.findMany();
    response.send(animals);
  });
}
