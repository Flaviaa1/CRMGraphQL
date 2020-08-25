const { gql} = require ('apollo-server');


//Schema
const typeDefs = gql `

type Cursos{
    titulo: String
}

type Tecnologia{
    tecnologia: String
}

input CursoInput {
    tecnologia: String
}

type Query{
    obtenerCursos(input: CursoInput!):[Cursos]
    obtenerTecnologia:[Tecnologia]
}
`;

module.exports = typeDefs;