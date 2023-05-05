import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 1rem;
    /* justify-content: center; */
`;

export const ImageContainer = styled.div`
  width: 20%;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 60%;
`
export const MainTitle = styled.div`
    font-size: 40px;
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
    font-weight: 600;
`