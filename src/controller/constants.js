module.exports = {
  apiUrl: `http://172.20.0.1/graphiql`,
  queries: {
    getSongByName: `
      query{
        allCursos{
          id
          nombre
          creditos
          tipologia
          sede
          nivelestudio
          facultad
          descripcion
          prerequisitos
          codigo
        }
      }`,
  },
};


 