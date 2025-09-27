import Fastify from 'fastify'
import cors from '@fastify/cors'

const server = Fastify()
server.register(cors, {
    origin: true
})

// Middleware para configurar CSP
server.addHook('onSend', async (request, reply, payload) => {
    reply.header('Content-Security-Policy', "default-src 'self'; connect-src 'self' https://back-end-2lpw.onrender.com"); 
    return payload;
});


server.patch("/teste",(request:any,response)=>{
    return
})

server.listen({
    host:"0.0.0.0",
    port: process.env.PORT ?? 3333,
}as any);