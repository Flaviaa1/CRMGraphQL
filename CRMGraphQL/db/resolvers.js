
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
        obtenerCursos: (_, {input}, ctx) => {
            const resultado = cursos.filter(cursos => cursos.tecnologia === input.tecnologia);
            console.log(ctx);
            return resultado
        }
    }
}

module.exports = resolvers;