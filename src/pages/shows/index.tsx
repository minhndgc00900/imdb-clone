import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../components/card";
import { AppDispatch, RootState } from "../../store";
import { ShowsState, retrieveShows } from "../../slices/shows";
import { List, Loading } from "./styled";

export interface Show {
  image: string;
  title: string;
  crew: string;
  year: string;
  id: string
}

function ShowPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState<number>(0);
  const { shows = [] } = useSelector<RootState, ShowsState>((state) => state?.shows);

  const initFetch = useCallback(
    (page: number) => {
      dispatch(retrieveShows({ offset: page }));
      setPage((prev) => prev + 1);
    },
    [dispatch]
  );

  useEffect(() => {
    initFetch(0);
  }, [initFetch]);

  return (
    <div>
      <h1>Latest TV Shows</h1>
      <InfiniteScroll
        dataLength={shows.length}
        next={() => initFetch(page)}
        hasMore={shows.length < 250}
        loader={<Loading>Loading...</Loading>}
      >
        <List>
          {shows &&
            shows.length !== 0 &&
            shows.map((item: Show, key: number) => (
              <Card movie={item} key={key} disableNavigate />
            ))}
        </List>
      </InfiniteScroll>
    </div>
  );
}

export default ShowPage;
