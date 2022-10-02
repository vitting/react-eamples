/**
 * https://emotion.sh/docs/styled
 */
import styled from "@emotion/styled";

interface Props {
  numberOfColumns: number;
}

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props: Props) =>
    `repeat(${props.numberOfColumns}, 100px)`};
  gap: 2px;
  & > div {
    background-color: lightblue;
  }
`;

export const Grid2 = styled.div((props: Props) => ({
  display: "grid",
  "grid-template-columns": `repeat(${props.numberOfColumns}, 100px)`,
}));
