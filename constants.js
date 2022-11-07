module.exports = {
  apiUrl: `http://2c32-161-10-20-195.ngrok.io/graphql`,
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


 