import { FastifyInstance } from 'fastify';
import prisma from '../../../../lib/prisma';

export default async function (server: FastifyInstance) {
  server.get(
    '/',
    {
      schema: {
        description: 'Get all continents',
        tags: ['Continents'],
        response: {
          200: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                name: { type: 'string' },
                bio: { type: 'string' },
                image_url: { type: 'string' },
              },
            },
          },
        },
      },
    },
    async (request, response) => {
      const continents = await prisma.continent.findMany();
      response.send(continents);
    },
  );
}
