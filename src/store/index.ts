import { create } from 'zustand'

export const useFiltersStore = create((set) => ({
   sort_by: 'popularity.desc',
   filters: {
      realize_year: {
         this_year: false,
         last_year: false,
         from_year: null,
         to_year: null,
      },
      genreId: null,
      rating: null,
   },

   setGenre: (genreId) => {
      set({
         filters: {
            genreId,
         },
      })
   },

   setSortMethod: (sortMethod) => {
      set({
         sort_by: sortMethod,
      })
   },
}))
