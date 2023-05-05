import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    margin-top: 1rem;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
  width: 35%;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 60%;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
`
export const MainTitle = styled.div`
    font-size: 48px;
    font-weight: 600;
`

export const Genre = styled.div`
    font-size: 14px;
    font-weight: 600;
    display: flex;
    gap: 20px;
`

export const GenreList = styled.div`
    color: rgb(121, 121, 121);
`

export const Year = styled.div`
    display: flex;
    gap: 8px;
`

export const Plot = styled.div`
    font-weight: 500;
`

export const Image = styled.img`
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  object-fit: cover;
  width: 100%;
`
