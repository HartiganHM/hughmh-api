import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function (server: FastifyInstance) {
  server.get(
    "/",
    {
      schema: {
        description: "Get all animals",
        tags: ["Animals"],
        response: {
          200: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                name: { type: "string" },
                status: { type: "string" },
                population: { type: "string" },
                scientific_name: { type: "string" },
                height: { type: "string" },
                weight: { type: "string" },
                length: { type: "string" },
                habitat: { type: "string" },
                facts: { type: "string" },
                human_benefit: { type: "string" },
                image_url: { type: "string" },
              },
            },
          },
        },
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      const animals = await prisma.animal.findMany();
      reply.send(animals);
    }
  );
}
