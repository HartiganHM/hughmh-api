import fastify from 'fastify';
import cors from '@fastify/cors';
import path from 'path';
import autoload from '@fastify/autoload';

const server = fastify();

server.register(cors, {
  origin: '*',
  methods: ['GET'],
});
server.register(autoload, {
  dir: path.join(__dirname, 'routes'),
});

server.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
