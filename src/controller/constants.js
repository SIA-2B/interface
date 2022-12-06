module.exports = {
  apiUrl: `https://10.116.2.178:5000/graphql`,
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


 