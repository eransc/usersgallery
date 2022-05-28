import styled from "styled-components";

export const Grid2 = styled.div`
  // border: 1px solid red;
  margin: 0 20%;
`;

export const GridInner = styled.div`
  margin: 2% auto;
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  // border: 1px solid green;
  padding: 5px;
`;
