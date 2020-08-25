
const cursos = [

    {
        titulo: ' JavaScript moderan guia',
        tecnologia:'Javascript ES6',
    
    },
    {
        titulo: ' React Guia completa',
        tecnologia:'React',
    
    },
    {
        titulo: ' Node.js - Bootcamp desarrollo web',
        tecnologia:'Node.js',
    
    },
    {
        titulo: ' React avanzado- Fullstack',
        tecnologia:'React',
    
    }

];

//resolvers
const resolvers = {
    Query:{
        obtenerCursos: () => cursos,
        obtenerTecnologia :() => cursos
    }
}

module.exports = resolvers;