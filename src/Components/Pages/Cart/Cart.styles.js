import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  gap: 1em;
`;

export const CartOrderSummary = styled.div`
  border-radius: 4px;
  padding: 1em;
  border: 1px solid grey;
  background-color: #fafafa;
`;

export const CartItem = styled.div`
  border: 1px solid #eaeaea;
  display: flex;
  margin-bottom: 1em;
`;
