module.exports = {
    apiUrl: `https://sounds-ag-z5fiut5qsa-uc.a.run.app/graphql`,
    queries: {
      getSongByName: `
      query songsbyname  ($user: String!){
        songsbyname(name: $user){
          id
          song_name
          song_path
          song_liryc
          artist
        }
      }`
      }, 
  }


 