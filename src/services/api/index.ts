

import { IMovieDetailsResult, IMovies, IMovieTrailersResult } from '../types/movies.in'

import { MOVIES_API_KEY } from '../../config'

export class ApiService {
  // getAllPopularMovies() {
  //
  // }
}

//
// export const moviesApi = createApi({
//    reducerPath: 'moviesApi',
//    baseQuery: fetchBaseQuery({
//       baseUrl: 'https://api.themoviedb.org/3/',
//    }),
//    tagTypes: ['Movies'],
//    endpoints: (builder) => ({
//       getAllPopularMovies: builder.query<IMovies, number>({
//          query: (pageNumber) => ({
//             url: 'movie/popular',
//             method: 'get',
//             params: {
//                api_key: MOVIES_API_KEY,
//                language: 'en-US',
//                page: pageNumber,
//             },
//          }),
//       }),
//       getAllSimilarMovies: builder.query<IMovies, number>({
//          query: (movieId) => ({
//             url: `movie/${movieId}/similar`,
//             method: 'get',
//             params: {
//                api_key: MOVIES_API_KEY,
//                language: 'en-US',
//                page: 1,
//             },
//          }),
//       }),
//       getMovieDetails: builder.query<IMovieDetailsResult, number>({
//          query: (movieId) => ({
//             url: `movie/${movieId}`,
//             method: 'get',
//             params: {
//                api_key: MOVIES_API_KEY,
//                language: 'en-US',
//                page: 1,
//             },
//          }),
//       }),
//       getAllMovieTrailers: builder.query<IMovieTrailersResult, number>({
//          query: (movieId) => ({
//             url: `movie/${movieId}/videos`,
//             method: 'get',
//             params: {
//                api_key: MOVIES_API_KEY,
//                language: 'en-US',
//                page: 1,
//             },
//          }),
//       }),
//       searchMovies: builder.query<IMovies, string>({
//          query: (searchTerm) => ({
//             url: 'search/movie',
//             method: 'get',
//             params: {
//                api_key: MOVIES_API_KEY,
//                // language: 'en-US',
//                // page: 1,
//                query: searchTerm,
//             },
//          }),
//       }),
//    }),
// })
//
// export const {
//    useGetAllPopularMoviesQuery,
//    useLazySearchMoviesQuery,
//    useGetAllSimilarMoviesQuery,
//    useGetAllMovieTrailersQuery,
//    // useGetMovieDetails,
// } = moviesApi
