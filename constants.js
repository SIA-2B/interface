module.exports = {
  apiUrl: `http://f25c-161-10-20-195.ngrok.io/graphql`,
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


 