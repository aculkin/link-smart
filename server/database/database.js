require('dotenv').config()
const Sequelize = require('sequelize')

const databaseUrl =
  process.env.DATABASE_URL || `postgres://postgres@localhost:5432/link-service`

const herokuDialectOptions = {
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
}

let dialectOptions = !!process.env.DATABASE_URL ? herokuDialectOptions : null

const db = new Sequelize(databaseUrl, {
  logging: false,
  dialect: 'postgres',
  dialectOptions,
})

module.exports = db
