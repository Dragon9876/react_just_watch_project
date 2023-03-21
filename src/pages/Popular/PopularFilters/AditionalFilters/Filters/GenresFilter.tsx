const genres = [
   { genreLabel: 'Action & Adventure ', genreValue: 'action_&_adventure' },
   { genreLabel: 'Comedy', genreValue: 'comedy' },
   { genreLabel: 'Documentary', genreValue: 'action_&_adventure' },
   { genreLabel: 'Fantasy', genreValue: 'fantasy' },
   { genreLabel: 'Horror', genreValue: 'horror' },
   { genreLabel: 'Music & Musical', genreValue: 'music_&_musical' },
   { genreLabel: 'Romance', genreValue: 'romance' },
   { genreLabel: 'Sport', genreValue: 'sport' },
   { genreLabel: 'Western', genreValue: 'western' },
   { genreLabel: 'Made in Europe', genreValue: 'made_in_europe' },
   { genreLabel: 'Animation', genreValue: 'animation' },
   { genreLabel: 'Crime', genreValue: 'action_&_adventure' },
   { genreLabel: 'Drama', genreValue: 'action_&_adventure' },
   { genreLabel: 'History', genreValue: 'history' },
   { genreLabel: 'Kids & Family', genreValue: 'kids_&_family' },
   { genreLabel: 'Mystery & Thriller', genreValue: 'kids_&_family' },
   { genreLabel: 'Science-Fiction', genreValue: 'science_fiction' },
   { genreLabel: 'War & Military ', genreValue: 'war_&_military' },
   { genreLabel: 'Reality TV ', genreValue: 'reality_tv' },
]

export const GenresFilter = () => {
   return (
      <div>
         GenresFilter
         {genres.map((genre) => (
            <div key={genre.genreLabel}>{genre.genreLabel}</div>
         ))}
      </div>
   )
}
