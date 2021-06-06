import React, { createContext } from 'react'


const FavoritesContest = createContext({
  favorites: [],
  totalFavorites: 0
})

function FavoritesContestProvider(props) {
  { props.children }
  </FavoritesContest.Provider>
}