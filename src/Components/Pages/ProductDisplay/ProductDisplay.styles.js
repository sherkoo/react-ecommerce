import styled from "styled-components";

export const ProductDisplayGrid = styled.div`
  display: grid;
  column-gap: 2%;
  grid-template-columns: 70% 28%;
`;

export const ProductDetailsThumbnails = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: auto auto auto;

  & img{
    max-width: 100%;
  }
`;

export const ProductDetailsThumbnail = styled.img`
  cursor: pointer;
  box-sizing: border-box;
  border: 3px solid white;
  transition: border .25s ease-in-out;

  &:hover{
    border-color: lightblue;
  }

  &.active {
    border-color: blue;
  }
`

export const ProductDetails = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 1em;
`;
