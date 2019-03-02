const app = require("./server")
const env = require('./env')

const listener = app.listen({ port: env.PORT }, err => {
  if (err) {
    console.error('Error starting app', err)
  } else {
    const { port } = listener.address()
    console.info(`🚀 Server ready at http://localhost:${port}`)
  }
})
