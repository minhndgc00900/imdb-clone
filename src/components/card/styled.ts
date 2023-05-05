import styled from "styled-components"

export const CardItem = styled.div`
  text-decoration: none;
  border: 0 solid transparent;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h3 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }

  cursor: pointer;
`;

export const Image = styled.img`
  align-items: center;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
  width: 100%;
`
export const Tooltiptext = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 10;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
`

export const TitleContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 600;
  color: rgba(81,81,81,255) !important;

  display: flex;
  justify-content: start;

  &:hover ${Tooltiptext} {
  visibility: visible;
  opacity: 1;
}
`


export const Title = styled.div`
  text-align: center;
  text-overflow: ellipsis;
  width: 100% ;
  overflow: hidden !important;
  white-space: nowrap;
`
export const Desc = styled.div`
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(190,190,190,255);
  font-size: 13px;
`
