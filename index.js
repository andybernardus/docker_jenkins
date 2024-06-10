const fastify = require("fastify")();
const allRoutes = require('./allRoutes');

fastify.register(require("@fastify/cors"), {
    origin: "*",
    credentials: true,
  });


allRoutes(fastify);

const port = 54321;
const startServer = async () => {
    try {
     
      await fastify.listen({ port, host: "0.0.0.0" });
      console.log(`Server is running at port: ${port}`);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };

startServer();