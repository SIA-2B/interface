module.exports = {
  apiUrl: `http://172.18.0.1:5000/graphql`,
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


 