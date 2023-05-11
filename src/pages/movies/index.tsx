import { useCallback, useEffect, useState } from 'react';
import { MoviesState, retrieveMovies } from '../../slices/movies';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../../components/card';
import { AppDispatch, RootState } from '../../store';
import { List, Loading } from './styled';

export interface Movie {
  image: string;
  title: string;
  crew: string;
  year: string;
  id: string;
}

function MoviesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState<number>(0);
  const { movies = [] } = useSelector<RootState, MoviesState>(
    (state) => state?.movies
  );

  const initFetch = useCallback(
    (page: number) => {
      dispatch(retrieveMovies({ offset: page }));
      setPage((prev) => prev + 1);
    },
    [dispatch]
  );

  useEffect(() => {
    initFetch(0);
  }, [initFetch]);

  return (
    <div>
      <h1>Latest Movies</h1>
      <InfiniteScroll
        dataLength={movies.length}
        next={() => initFetch(page)}
        hasMore={movies.length < 250}
        loader={<Loading>Loading...</Loading>}
      >
        <List>
          {movies &&
            movies.length !== 0 &&
            movies.map((item: Movie) => <Card movie={item} key={item.id} />)}
        </List>
      </InfiniteScroll>
    </div>
  );
}

export default MoviesPage;
