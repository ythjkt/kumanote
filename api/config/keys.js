module.exports = {
  mongoHost: process.env.MONGO_HOST,
  mongoDB: process.env.MONGO_DB,
  mongoPort: process.env.MONGO_PORT,
  mongoUser: process.env.MONGO_INITDB_ROOT_USERNAME,
  mongoPassword: process.env.MONGO_INITDB_ROOT_PASSWORD,
  secretOrKey: 'secret'
}
