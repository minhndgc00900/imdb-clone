import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { retrieveMovies } from "../../slices/movies";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../components/card";
import { AppDispatch } from "../../store";
import { List, Loading } from "./styled";

export interface Movie {
  image: string;
  title: string;
  crew: string;
  year: string;
  id: string;
}

function MoviesPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const InfiniteScrollComponent = InfiniteScroll as any;
  const [page, setPage] = useState<number>(0);
  const { movies = [] } = useSelector((state: any) => state?.movies);

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
      <InfiniteScrollComponent
        dataLength={movies.length}
        next={() => initFetch(page)}
        hasMore={movies.length < 250}
        loader={<Loading>Loading...</Loading>}
      >
        <List>
          {movies &&
            movies.length !== 0 &&
            movies.map((item: Movie) => (
              <Card movie={item} key={item.id} />
            ))}
        </List>
      </InfiniteScrollComponent>
    </div>
  );
}

export default MoviesPage;
