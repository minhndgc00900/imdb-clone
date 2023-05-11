export type Resource = {
  id: string;
};

export interface Movies {
  id: string,
  rank: string,
  title: string,
  fullTitle: string,
  year: string,
  image: string,
  crew: string,
  imDbRating: string,
  imDbRatingCount: string
}

export interface Movie extends Movies {
  duration: number,
  plot: string,
  genres: string[]
}

export interface MovieDetail {
  movie: Movie
}

export interface MovieList {
  movies: Movies[]
}
