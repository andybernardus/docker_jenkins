const allRoutes = (fastify) => {
    fastify.get("/", (_, res) => res.status(200).send({ message: "JENKINS SUDAH MASUK" }));
}

module.exports = allRoutes;