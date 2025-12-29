import { FastifyInstance } from 'fastify';

const app = async (server: FastifyInstance) => {
  server.get(
    '/',
    {
      schema: {
        description: 'Root endpoint',
        tags: ['Root'],
        response: {
          200: {
            type: 'string',
            description: 'A simple greeting message',
          },
        },
      },
    },
    async () => {
      return 'Hello World!';
    },
  );
};

export default app;
