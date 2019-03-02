const { cleanEnv, port } = require('envalid')

module.exports = cleanEnv(
  process.env,
  {
    PORT: port({ default: 3000 }),
  },
  {
    strict: true,
  }
)
