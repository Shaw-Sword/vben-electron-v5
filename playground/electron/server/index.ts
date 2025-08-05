import Fastify from 'fastify'
import { b } from './db';
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})




export async function a(){
  console.log('aaaaaa',1);

  b();
  // Run the server!
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

