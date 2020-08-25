const { ApolloServer } = require ('apollo-server');
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')
const conectarDb = require ('./config/db')

//conectar base de datos
conectarDb();


//servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () =>{
        const miCotext = "Hola";
        return{ miCotext}
    }
});


//arraccar el servidor

server.listen().then(({url}) => {
    console.log(`Servidor listo en la URL ${url}`)
})