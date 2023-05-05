import { useParams } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import {
  Container,
  Genre,
  GenreList,
  ImageContainer,
  MainTitle,
  Plot,
  TitleContainer,
  Year,
  Image,
} from "./styled";
import { AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { retrieveMovieDetail } from "../../slices/movies";
import { toHoursAndMinutes } from "../../shared/utils";

const Details = (props: any) => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const initFetch = useCallback(() => {
    if (id) {
      dispatch(retrieveMovieDetail(id));
    }
  }, [dispatch]);

  const { movieDetail } = useSelector((state: any) => state?.movies);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <>
      {movieDetail && (
        <>
          <Breadcrumbs title={movieDetail.title} />
          <Container>
            <ImageContainer>
              <Image src={movieDetail?.image} alt={movieDetail.title} />
            </ImageContainer>
            <TitleContainer>
              <MainTitle>{movieDetail.title}</MainTitle>
              <Genre>
                <GenreList>
                  {movieDetail.genres && movieDetail.genres.join(",  ")}
                </GenreList>
                <Year>
                  <img
                    src="https://img.icons8.com/ios/50/null/calendar--v1.png"
                    width={15}
                    height={15}
                  />
                  <span> {movieDetail.year}</span>
                </Year>
                <Year>
                  <img
                    src="https://img.icons8.com/ios/50/null/clock--v1.png"
                    width={15}
                    height={15}
                  />
                  <span>{toHoursAndMinutes(movieDetail.duration)}</span>
                </Year>
              </Genre>
              <Plot>{movieDetail.plot}</Plot>
            </TitleContainer>
          </Container>
        </>
      )}
    </>
  );
};

export default Details;
