import { useNavigate } from 'react-router';
import { Movie } from '../../pages/movies';
import {
  CardItem,
  Desc,
  Image,
  Title,
  TitleContainer,
  Tooltiptext,
} from './styled';

interface ICard {
  movie: Movie;
  disableNavigate?: boolean;
}

const Card = (props: ICard) => {
  const { movie, disableNavigate = false } = props;

  const navigate = useNavigate();

  const onDetail = () => {
    if (!disableNavigate) {
      navigate(`/movies/${movie.id}`);
    }
  };

  return (
    <CardItem onClick={() => onDetail()}>
      <Image src={movie.image} alt={movie.title} />
      <TitleContainer>
        <Title title={`${movie.title} ${movie.year}`}>
          {movie.title} {movie.year}
        </Title>
        <Desc>{movie.crew}</Desc>
      </TitleContainer>
      <Tooltiptext>{movie.title}</Tooltiptext>
    </CardItem>
  );
};

export default Card;
