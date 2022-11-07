module.exports = {
  apiUrl: `http//:host.docker.internal:5000/graphql`,
  queries: {
    getSongByName: `
      query{
        allCourses{
          _id
          datos_id
          codigo_id
          name
          credit
          periodo
          nota
          plan
        }
      }`,
  },
};


 