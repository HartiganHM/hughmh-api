import fastify from "fastify";
import cors from "@fastify/cors";
import path from "path";
import autoload from "@fastify/autoload";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

const server = fastify();

// Register CORS
server.register(cors, {
  origin: "*",
  methods: ["GET"],
});

// Register Swagger
server.register(swagger, {
  swagger: {
    info: {
      title: "hughmh API",
      description: "API documentation for hughmh services",
      version: "1.0.0",
    },
  },
});

server.register(swaggerUi, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "full",
  },
});

// Autoload routes
server.register(autoload, {
  dir: path.join(__dirname, "routes"),
});

// Start the server
server.listen(
  { port: 8080, host: "0.0.0.0" },
  (err: Error | null, address: string) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`Server listening at ${address}`);
  }
);
