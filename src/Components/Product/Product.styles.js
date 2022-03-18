import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */

  & a{
    text-decoration: none;
  }
`;

export const ProductCardImg = styled.img`
  max-width: 100%;
`;

export const ProductHeadline = styled.h2`
  font-size: 1em;
  margin-bottom: 0;
`;

export const ProductDescription = styled.p`
  font-size: 0.75em;
  margin-bottom: 0;
`;

export const ProductGrid = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: auto auto auto auto;
`;
