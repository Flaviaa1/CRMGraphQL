const { gql} = require ('apollo-server');


//Schema
const typeDefs = gql `

type Cursos{
    titulo: String
}

type Tecnologia{
    tecnologia: String
}

type Query{
    obtenerCursos:[Cursos]
    obtenerTecnologia:[Tecnologia]
}
`;

module.exports = typeDefs;