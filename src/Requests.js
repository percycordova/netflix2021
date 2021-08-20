const API_KEY = "5d4ee6aa6eb78c292e0de3ac283eb4dd";

// edpoints
//cada edpoints ed un género
const request = [
    {
        fetchGender: `trending/all/week?api_key=${API_KEY}&language=en-US`,
        nameGender:null
    },
    {
        fetchGender: `discover/tv?api_key=${API_KEY}&with_network=213`,
        nameGender: null
    },
    {
        fetchGender: `/movie/top_rated?api_key=${API_KEY}&language=es-US`,
        nameGender: "Top Rated"
    },
    {
        fetchGender: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        nameGender: "Action Movies"
    },
    {
        fetchGender: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        nameGender: "Comedy Movies"
    },
    {
        fetchGender: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        nameGender: "Horror Movies"
    },
    {
        fetchGender: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        nameGender: "Romance Movies"
    },
    {
        fetchGender: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
        nameGender: "Documentaries"
    },

]
export default request;

