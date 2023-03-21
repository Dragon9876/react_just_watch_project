export interface IMovies {
   page: number
   results: IMovieResult[]
   total_results: number
   total_pages: number
}

export interface IMovieResult {
   poster_path: string | null
   adult: boolean
   overview: string
   release_date: string
   genre_ids: number[]
   id: number
   original_title: string
   original_language: string
   title: string
   backdrop_path: string | null
   popularity: number
   vote_count: number
   video: boolean
   vote_average: number
}

export interface IMovieGenres {
   id: number
   name: string
}

export interface IMovieProductionCompany {
   name: string
   id: number
   logo_path: string | null
   origin_country: string
}

export interface IMovieProductionCountry {
   iso_3166_1: string
   name: string
}

export interface IMovieSpokenLanguages {
   iso_639_1: string
   name: string
}

export interface IMovieDetailsResult {
   adult: boolean
   backdrop_path: string | null
   belongs_to_collection: null | object
   budget: number
   genres: IMovieGenres[]
   homepage: string | null
   id: number
   imdb_id: string | null
   original_language: string
   original_title: string
   overview: string | null
   popularity: number
   poster_path: string | null
   production_companies: IMovieProductionCompany[]
   production_countries: IMovieProductionCountry[]
   release_date: string
   revenue: number
   runtime: number | null
   spoken_languages: IMovieSpokenLanguages[]
   status: string
   tagline: string | null
   title: string
   video: boolean
   vote_average: number
   vote_count: number
}

export interface IMovieTrailerResult {
   iso_639_1: string
   iso_3166_1: string
   name: string
   key: string
   site: string
   size: number
   type: string
   official: boolean
   published_at: string
   id: string
}

export interface IMovieTrailersResult {
   id: number
   results: IMovieTrailerResult[]
}
