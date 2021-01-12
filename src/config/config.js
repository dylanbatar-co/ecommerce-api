require("dotenv").config();

// SERVER PORT
process.env.PORT = process.env.PORT || 3000;

// MYSQL
const dbclient = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.HOST,
    user: process.env.MYSQL_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.MYSQL_PORT,
  },
});

// REDIS
const redisClient = require("redis").createClient(process.env.REDIS_PORT);

// ELASTICSEARCH
const { Client } = require("@elastic/elasticsearch");
const elasticClient = new Client({ node: process.env.ELASTICSEARCH_HOST });

module.exports = {
  dbclient,
  redisClient,
  elasticClient,
};
